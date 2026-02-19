import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../components/Card';
import Gauge from '../components/Gauge';
import ProgressBar from '../components/ProgressBar';
import StatusBadge from '../components/StatusBadge';
import OceanSafetyMap from '../components/OceanSafetyMap';
import ParticipatoryKnowledgeInput from '../components/ParticipatoryKnowledgeInput';
import OceanFutureSimulator from '../components/OceanFutureSimulator';
import MarineKnowledgeEncyclopedia from '../components/MarineKnowledgeEncyclopedia';
import CoralReefRiskMonitor from '../components/CoralReefRiskMonitor';
import CommunityAlertSystem from '../components/CommunityAlertSystem';
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
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-danger text-center py-8">
        {error}
      </div>
    );
  }

  const seaSurfaceTemp = Number((26.4 + ((data.pollution?.level || 0) / 100) * 2.8).toFixed(1));
  const nextHighTideWindow = '06:40 - 08:05';

  return (
    <div className="space-y-8">
      {/* Top Insights + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-text">Live Map</h3>
            <p className="text-sm text-textMuted mt-1">Real-time ocean conditions and activity layers</p>
          </div>
          <div className="rounded-lg border border-border overflow-hidden relative bg-surface">
            <OceanSafetyMap className="rounded-none" />
            <div className="absolute left-3 bottom-3 z-10 pointer-events-none">
              <div className="rounded-lg border border-border bg-surface/95 backdrop-blur-sm px-3 py-2">
                <div className="text-[11px] font-semibold text-text">Layers</div>
                <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-textMuted">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-danger" />
                    Pollution
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-success" />
                    Safe Zones
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-warning" />
                    Alerts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 lg:col-span-4">
          <div className="bg-surface border border-border rounded-lg p-5">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-text">Food Chain Regulation</h3>
              <p className="text-xs text-textMuted mt-1">Ecosystem balance indicator</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-textMuted">Status</span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-success"></span>
                  <span className="text-xs font-medium text-text">Stable</span>
                </span>
              </div>
              <ProgressBar value={72} label="Regulation Score" variant="health" />
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-5">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-text">Temperature</h3>
              <p className="text-xs text-textMuted mt-1">Sea surface temperature</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text mb-1">{seaSurfaceTemp}°C</div>
              <div className="text-xs text-textMuted">Current SST</div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-5">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-text">High Tides</h3>
              <p className="text-xs text-textMuted mt-1">Next high tide window</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-textMuted">Alert</span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-warning"></span>
                  <span className="text-xs font-medium text-text">Moderate</span>
                </span>
              </div>
              <div className="text-sm text-text">{nextHighTideWindow}</div>
            </div>
          </div>
        </div>
      </div>
            {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Water Pollution Level</h3>
            <p className="text-xs text-textMuted mt-1">Current contamination index</p>
          </div>
          <Gauge
            value={data.pollution?.level || 0}
            label="Current Level"
            unit="%"
          />
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Microplastics</h3>
            <p className="text-xs text-textMuted mt-1">Particle concentration</p>
          </div>
          <div className="relative text-center">
            <div className="absolute top-0 right-0">
              <span className="inline-flex items-center rounded-full bg-warning/10 text-warning text-xs font-medium px-2 py-1">
                High
              </span>
            </div>
            <div className="text-3xl font-bold text-text mb-2">
              {data.microplastics?.concentration || 0}
            </div>
            <div className="text-xs text-textMuted mb-2">
              {data.microplastics?.unit || 'particles/m³'}
            </div>
            <div className="text-sm font-medium text-text">
              Concentration
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-warning"></span>
                <span className="text-xs font-medium text-text">{data.microplastics?.trend || 'stable'}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Oil Contamination</h3>
            <p className="text-xs text-textMuted mt-1">Oil spill index</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning mb-2">
              {data.oilContamination?.index || 0}
            </div>
            <div className="text-sm font-medium text-text mb-2">
              Contamination Index
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-success"></span>
                <span className="text-xs font-medium text-text">{data.oilContamination?.status || 'low'}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Coral Reef Health</h3>
            <p className="text-xs text-textMuted mt-1">Ecosystem vitality score</p>
          </div>
          <Gauge
            value={data.coralReef?.score || 0}
            label="Health Score"
            unit="/100"
          />
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Pollution & Microplastics Trend</h3>
            <p className="text-xs text-textMuted mt-1">7-day contamination trend</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                stroke="#6B7280"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#6B7280"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="pollution" 
                stroke="#DC2626" 
                strokeWidth={2}
                name="Pollution"
                dot={{ fill: '#DC2626', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="microplastics" 
                stroke="#D97706" 
                strokeWidth={2}
                name="Microplastics"
                dot={{ fill: '#D97706', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">AI Alerts & Suggestions</h3>
            <p className="text-xs text-textMuted mt-1">Actionable insights from monitoring</p>
          </div>
          <div className="space-y-3">
            {data.alerts.map((alert, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg border-l-4 ${
                  alert.type === 'warning' 
                    ? 'bg-warning/5 border-warning' 
                    : 'bg-accent/5 border-accent'
                }`}
              >
                <div className="flex items-start">
                  <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                    alert.type === 'warning' ? 'bg-warning' : 'bg-accent'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-text">{alert.message}</p>
                    <p className="text-xs text-textMuted mt-1">
                      {new Date(alert.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Coral Reef Details</h3>
            <p className="text-xs text-textMuted mt-1">Health and risk indicators</p>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-textMuted">Bleaching Risk</span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-warning"></span>
                <span className="text-xs font-medium text-text">{data.coralReef?.bleachingRisk || 'moderate'}</span>
              </span>
            </div>
            <ProgressBar 
              value={data.coralReef?.score || 0} 
              label="Overall Health" 
              variant="health"
            />
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Oil Contamination</h3>
            <p className="text-xs text-textMuted mt-1">Recent incidents and index</p>
          </div>
          <div className="space-y-3">
            <div className="text-sm text-textMuted">
              Last Incident: {data.oilContamination?.lastIncident || 'None recorded'}
            </div>
            <ProgressBar 
              value={data.oilContamination?.index || 0} 
              label="Contamination Index" 
              max={100}
            />
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Water Quality Status</h3>
            <p className="text-xs text-textMuted mt-1">Pollution level and trend</p>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-textMuted">Trend</span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-success"></span>
                <span className="text-xs font-medium text-text">{data.pollution?.trend || 'stable'}</span>
              </span>
            </div>
            <ProgressBar 
              value={data.pollution?.level || 0} 
              label="Pollution Level" 
              variant="pollution"
            />
          </div>
        </div>
      </div>

      {/* Participatory & Future Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ParticipatoryKnowledgeInput />
        <OceanFutureSimulator baseMetrics={{
          fishPopulation: 70,
          coralHealth: data.coralReef?.score || 65
        }} />
      </div>

      {/* Knowledge & Risk Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MarineKnowledgeEncyclopedia />
        <CoralReefRiskMonitor liveData={{
          temperature: 26.8,
          pollution: data.pollution?.level || 35,
          acidity: 8.1,
          bleachingReports: 0
        }} />
      </div>

      {/* Community Alerts */}
      <CommunityAlertSystem />
    </div>
  );
};

export default SeaOrganismDashboard;
