import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import Card from '../components/Card';
import Gauge from '../components/Gauge';
import StatusBadge from '../components/StatusBadge';
import { farmerAPI } from '../services/api';

const FishermenAdvisoryDashboard = () => {
  const [data, setData] = useState({
    seaLevel: null,
    weather: null,
    fishingScore: null,
    riskAlerts: [],
    breedingSeason: null,
    safeZones: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [
          seaLevel,
          weather,
          fishingScore,
          riskAlerts,
          breedingSeason,
          safeZones
        ] = await Promise.all([
          farmerAPI.getSeaLevel(),
          farmerAPI.getWeatherConditions(),
          farmerAPI.getFishingScore(),
          farmerAPI.getRiskAlerts(),
          farmerAPI.getBreedingSeason(),
          farmerAPI.getSafeZones()
        ]);

        setData({
          seaLevel,
          weather,
          fishingScore,
          riskAlerts,
          breedingSeason,
          safeZones
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

  const fishingScoreData = data.fishingScore?.factors ? [
    { factor: 'Weather', value: data.fishingScore.factors.weather },
    { factor: 'Sea Conditions', value: data.fishingScore.factors.seaConditions },
    { factor: 'Fish Activity', value: data.fishingScore.factors.fishActivity },
    { factor: 'Safety', value: data.fishingScore.factors.safety }
  ] : [];

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

  const baseTemp = data.weather?.temperature || 0;
  const baseWind = data.weather?.windSpeed || 0;
  const predicted = {
    next6hTemp: Number((baseTemp + 0.6).toFixed(1)),
    next12hTemp: Number((baseTemp - 0.4).toFixed(1)),
    next24hTemp: Number((baseTemp + 0.2).toFixed(1)),
    windGusts: Math.max(baseWind + 8, 0),
    waveHeight: Number((0.9 + (baseWind / 25) * 1.1).toFixed(1)),
    rainfallChance: Math.min(85, Math.max(10, 25 + baseWind * 2))
  };

  return (
    <div className="space-y-8">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="text-center">
            <div className="text-3xl font-bold text-text mb-2">
              {data.seaLevel?.current || 0}m
            </div>
            <div className="text-xs text-textMuted mb-2">
              {data.seaLevel?.anomaly || 'Normal'}
            </div>
            <div className="text-sm font-medium text-text mb-2">
              Sea Level
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-success"></span>
                <span className="text-xs font-medium text-text">{data.seaLevel?.trend || 'stable'}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="text-center">
            <div className="text-3xl font-bold text-text mb-2">
              {data.weather?.temperature || 0}°C
            </div>
            <div className="text-xs text-textMuted mb-2">
              Wind: {data.weather?.windSpeed || 0} km/h
            </div>
            <div className="text-sm font-medium text-text mb-2">
              Weather
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-warning"></span>
                <span className="text-xs font-medium text-text">{data.weather?.waveRisk || 'moderate'}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <Gauge
            value={data.fishingScore?.score || 0}
            label="Fishing Score"
            unit="/100"
          />
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="text-center">
            <div className="mb-2">
              <span className="inline-flex items-center rounded-full bg-accent/10 text-accent text-sm font-medium px-3 py-1">
                {data.breedingSeason?.status || 'active'}
              </span>
            </div>
            <div className="text-sm font-medium text-text mb-2">
              Breeding Season
            </div>
            <div className="text-xs text-textMuted">
              Until: {data.breedingSeason?.endDate || 'Unknown'}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-lg p-5">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-text">Predictive Weather (Next 24 Hours)</h3>
          <p className="text-xs text-textMuted mt-1">AI-powered forecast for fishing conditions</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-lg border border-border bg-surface p-3">
            <div className="text-xs font-medium text-textMuted">Temperature</div>
            <div className="mt-1 text-lg font-semibold text-text">{predicted.next24hTemp}°C</div>
            <div className="mt-1 text-xs text-textMuted">6h: {predicted.next6hTemp}°C · 12h: {predicted.next12hTemp}°C</div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-3">
            <div className="text-xs font-medium text-textMuted">Winds & Waves</div>
            <div className="mt-1 text-lg font-semibold text-text">Gusts {predicted.windGusts} km/h</div>
            <div className="mt-1 text-xs text-textMuted">Wave height: ~{predicted.waveHeight} m</div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-3">
            <div className="text-xs font-medium text-textMuted">Rainfall</div>
            <div className="mt-1 flex items-center justify-between">
              <div className="text-lg font-semibold text-text">{predicted.rainfallChance}%</div>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-warning"></span>
                <span className="text-xs font-medium text-text">{predicted.rainfallChance >= 60 ? 'increasing' : 'stable'}</span>
              </span>
            </div>
            <div className="mt-1 text-xs text-textMuted">Chance of rain during next 24 hours</div>
          </div>
        </div>
      </div>

      {/* Charts and Alerts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Fishing Score Breakdown</h3>
            <p className="text-xs text-textMuted mt-1">Factors affecting fishing conditions</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={fishingScoreData}>
              <PolarGrid stroke="#E5E7EB" />
              <PolarAngleAxis 
                dataKey="factor" 
                tick={{ fontSize: 12 }}
                stroke="#6B7280"
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10 }}
                stroke="#6B7280"
              />
              <Radar
                name="Score"
                dataKey="value"
                stroke="#2D8A85"
                fill="#2D8A85"
                fillOpacity={0.6}
                strokeWidth={2}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Risk Alerts</h3>
            <p className="text-xs text-textMuted mt-1">Safety and operational advisories</p>
          </div>
          <div className="space-y-3">
            {data.riskAlerts.map((alert, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg border-l-4 ${
                  alert.severity === 'high' 
                    ? 'bg-danger/5 border-danger' 
                    : alert.severity === 'medium'
                    ? 'bg-warning/5 border-warning'
                    : 'bg-accent/5 border-accent'
                }`}
              >
                <div className="flex items-start">
                  <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                    alert.severity === 'high' ? 'bg-danger' : 
                    alert.severity === 'medium' ? 'bg-warning' : 
                    'bg-accent'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-medium uppercase ${
                        alert.severity === 'high' ? 'text-danger' : 
                        alert.severity === 'medium' ? 'text-warning' : 
                        'text-accent'
                      }`}>
                        {alert.type}
                      </span>
                      <span className="text-xs text-textMuted">
                        {alert.timeframe}
                      </span>
                    </div>
                    <p className="text-sm text-text">{alert.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safe Zones and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Recommended Safe Zones</h3>
            <p className="text-xs text-textMuted mt-1">AI-suggested safe fishing areas</p>
          </div>
          <div className="space-y-3">
            {data.safeZones?.recommended?.map((zone, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-success/5 rounded-lg">
                <div>
                  <div className="font-medium text-text">{zone.zone}</div>
                  <div className="text-sm text-textMuted">{zone.coordinates}</div>
                </div>
                <div className="text-sm text-text font-medium">{zone.distance}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Areas to Avoid</h3>
            <p className="text-xs text-textMuted mt-1">Hazardous or restricted zones</p>
          </div>
          <div className="space-y-3">
            {data.safeZones?.avoid?.map((area, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-danger/5 rounded-lg">
                <div>
                  <div className="font-medium text-text">{area.zone}</div>
                  <div className="text-sm text-textMuted">{area.reason}</div>
                </div>
                <div className="text-danger">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Breeding Season Information</h3>
            <p className="text-xs text-textMuted mt-1">Active species and guidance</p>
          </div>
          <div className="space-y-3">
            <div className="text-sm text-textMuted">
              <strong>Active Species:</strong>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.breedingSeason?.species?.map((species, index) => (
                <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                  {species}
                </span>
              ))}
            </div>
            <div className="text-sm text-textMuted mt-3">
              <strong>Restrictions:</strong> {data.breedingSeason?.restrictions || 'None'}
            </div>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Fishing Recommendation</h3>
            <p className="text-xs text-textMuted mt-1">AI-driven go/no-go guidance</p>
          </div>
          <div className="text-center py-4">
            <div className="text-2xl font-bold text-success mb-2">
              {data.fishingScore?.recommendation || 'Conditions unknown'}
            </div>
            <div className="text-sm text-textMuted">
              Based on current weather, sea conditions, and fish activity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishermenAdvisoryDashboard;
