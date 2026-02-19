import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../components/Card';
import Gauge from '../components/Gauge';
import ProgressBar from '../components/ProgressBar';
import StatusBadge from '../components/StatusBadge';
import OceanSafetyMap from '../components/OceanSafetyMap';
import { seaOrganismAPI } from '../services/api';

const SeaOrganismDashboard = () => {
  const [data, setData] = useState({
    pollution: null,
    microplastics: null,
    oilContamination: null,
    coralReef: null,
    alerts: [],
    trendData: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [
          pollution,
          microplastics,
          oilContamination,
          coralReef,
          alerts,
          trendData
        ] = await Promise.all([
          seaOrganismAPI.getWaterPollution(),
          seaOrganismAPI.getMicroplastics(),
          seaOrganismAPI.getOilContamination(),
          seaOrganismAPI.getCoralReefHealth(),
          seaOrganismAPI.getAIAlerts(),
          seaOrganismAPI.getPollutionTrend()
        ]);

        setData({
          pollution,
          microplastics,
          oilContamination,
          coralReef,
          alerts,
          trendData: trendData.data
        });
      } catch (err) {
        setError('Failed to load dashboard data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ocean-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8">
        {error}
      </div>
    );
  }

  const seaSurfaceTemp = Number((26.4 + ((data.pollution?.level || 0) / 100) * 2.8).toFixed(1));
  const nextHighTideWindow = '06:40 - 08:05';

  return (
    <div className="space-y-6">
      {/* Top Insights + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-primary">Live Map</h3>
          </div>
          <div className="-mx-6 -mb-4">
            <div className="mx-6 mb-4 rounded-lg border border-ocean-200 overflow-hidden relative">
              <OceanSafetyMap className="rounded-none" />

              <div className="absolute left-3 bottom-3 z-10 pointer-events-none">
                <div className="rounded-lg border border-ocean-200 bg-white/80 backdrop-blur-sm px-3 py-2">
                  <div className="text-[11px] font-semibold text-ocean-900">Layers</div>
                  <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-ocean-800">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-rose-500" />
                      Pollution
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-teal-600" />
                      Tides
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      Temperature
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 lg:col-span-4">
          <Card>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-primary">Food Chain Regulation</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Status</span>
                <StatusBadge status="stable" size="sm" />
              </div>
              <ProgressBar value={72} label="Regulation Score" variant="health" />
            </div>
          </Card>

          <Card>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-primary">Temperature</h3>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ocean-600 mb-2">{seaSurfaceTemp}°C</div>
              <div className="text-sm font-medium text-gray-700">Sea surface (°C)</div>
            </div>
          </Card>

          <Card>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-primary">High Tides</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Alert</span>
                <StatusBadge status="stable" size="sm" />
              </div>
              <div className="text-sm text-gray-600">Next window: {nextHighTideWindow}</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-primary">Water Pollution Level</h3>
          </div>
          <Gauge
            value={data.pollution?.level || 0}
            label="Current Level"
            unit="%"
          />
        </Card>

        <Card>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-primary">Microplastics</h3>
          </div>
          <div className="relative text-center">
            <div className="absolute top-0 right-0">
            </div>
            <div className="text-3xl font-bold text-ocean-600 mb-2">
              {data.microplastics?.concentration || 0}
            </div>
            <div className="text-sm text-gray-500 mb-2">
              {data.microplastics?.unit || 'particles/m³'}
            </div>
            <div className="text-sm font-medium text-gray-700">
              Concentration
            </div>
            <StatusBadge 
              status={data.microplastics?.trend || 'stable'} 
              size="sm" 
              className="mt-2"
            />
          </div>
        </Card>

        <Card>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-primary">Oil Contamination</h3>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {data.oilContamination?.index || 0}
            </div>
            <div className="text-sm font-medium text-gray-700 mb-2">
              Contamination Index
            </div>
            <StatusBadge 
              status={data.oilContamination?.status || 'low'} 
              size="sm"
            />
          </div>
        </Card>

        <Card>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-primary">Coral Reef Health</h3>
          </div>
          <Gauge
            value={data.coralReef?.score || 0}
            label="Health Score"
            unit="/100"
          />
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-primary">Pollution & Microplastics Trend</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="pollution" 
                stroke="#ef4444" 
                strokeWidth={2}
                name="Pollution"
                dot={{ fill: '#ef4444', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="microplastics" 
                stroke="#f59e0b" 
                strokeWidth={2}
                name="Microplastics"
                dot={{ fill: '#f59e0b', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-primary">AI Alerts & Suggestions</h3>
          </div>
          <div className="space-y-3">
            {data.alerts.map((alert, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg border-l-4 ${
                  alert.type === 'warning' 
                    ? 'bg-yellow-50 border-yellow-400' 
                    : 'bg-blue-50 border-blue-400'
                }`}
              >
                <div className="flex items-start">
                  <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                    alert.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(alert.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-primary">Coral Reef Details</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Bleaching Risk</span>
              <StatusBadge status={data.coralReef?.bleachingRisk || 'moderate'} size="sm" />
            </div>
            <ProgressBar 
              value={data.coralReef?.score || 0} 
              label="Overall Health" 
              variant="health"
            />
          </div>
        </Card>

        <Card>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-primary">Oil Contamination</h3>
          </div>
          <div className="space-y-3">
            <div className="text-sm text-gray-600">
              Last Incident: {data.oilContamination?.lastIncident || 'None recorded'}
            </div>
            <ProgressBar 
              value={data.oilContamination?.index || 0} 
              label="Contamination Index" 
              max={100}
            />
          </div>
        </Card>

        <Card>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-primary">Water Quality Status</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Trend</span>
              <StatusBadge status={data.pollution?.trend || 'stable'} size="sm" />
            </div>
            <ProgressBar 
              value={data.pollution?.level || 0} 
              label="Pollution Level" 
              variant="pollution"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SeaOrganismDashboard;
