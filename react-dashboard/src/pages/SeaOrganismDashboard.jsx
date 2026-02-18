import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../components/Card';
import Gauge from '../components/Gauge';
import ProgressBar from '../components/ProgressBar';
import StatusBadge from '../components/StatusBadge';
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

  return (
    <div className="space-y-6">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <Gauge
            value={data.pollution?.level || 0}
            label="Water Pollution Level"
            unit="%"
          />
        </Card>

        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-ocean-600 mb-2">
              {data.microplastics?.concentration || 0}
            </div>
            <div className="text-sm text-gray-500 mb-2">
              {data.microplastics?.unit || 'particles/m³'}
            </div>
            <div className="text-sm font-medium text-gray-700">
              Microplastics
            </div>
            <StatusBadge 
              status={data.microplastics?.trend || 'stable'} 
              size="sm" 
              className="mt-2"
            />
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {data.oilContamination?.index || 0}
            </div>
            <div className="text-sm font-medium text-gray-700 mb-2">
              Oil Contamination
            </div>
            <StatusBadge 
              status={data.oilContamination?.status || 'low'} 
              size="sm"
            />
          </div>
        </Card>

        <Card>
          <Gauge
            value={data.coralReef?.score || 0}
            label="Coral Reef Health"
            unit="/100"
          />
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Pollution & Microplastics Trend">
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

        <Card title="AI Alerts & Suggestions">
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
        <Card title="Coral Reef Details">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Bleaching Risk</span>
              <StatusBadge status={data.coralReef?.bleachingRisk || 'moderate'} size="sm" />
            </div>
            <ProgressBar 
              value={data.coralReef?.score || 0} 
              label="Overall Health" 
            />
          </div>
        </Card>

        <Card title="Oil Contamination">
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

        <Card title="Water Quality Status">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Trend</span>
              <StatusBadge status={data.pollution?.trend || 'stable'} size="sm" />
            </div>
            <ProgressBar 
              value={data.pollution?.level || 0} 
              label="Pollution Level" 
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SeaOrganismDashboard;
