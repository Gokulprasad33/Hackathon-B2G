import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import Card from '../components/Card';
import Gauge from '../components/Gauge';
import StatusBadge from '../components/StatusBadge';
import { farmerAPI } from '../services/api';

const FarmerAdvisoryDashboard = () => {
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
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {data.seaLevel?.current || 0}m
            </div>
            <div className="text-sm text-gray-500 mb-2">
              {data.seaLevel?.anomaly || 'Normal'}
            </div>
            <div className="text-sm font-medium text-gray-700">
              Sea Level
            </div>
            <StatusBadge 
              status={data.seaLevel?.trend || 'stable'} 
              size="sm" 
              className="mt-2"
            />
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {data.weather?.temperature || 0}°C
            </div>
            <div className="text-sm text-gray-500 mb-2">
              Wind: {data.weather?.windSpeed || 0} km/h
            </div>
            <div className="text-sm font-medium text-gray-700">
              Weather
            </div>
            <StatusBadge 
              status={data.weather?.waveRisk || 'moderate'} 
              size="sm" 
              className="mt-2"
            />
          </div>
        </Card>

        <Card>
          <Gauge
            value={data.fishingScore?.score || 0}
            label="Fishing Score"
            unit="/100"
          />
        </Card>

        <Card>
          <div className="text-center">
            <StatusBadge 
              status={data.breedingSeason?.status || 'active'} 
              size="lg"
              className="mb-2"
            />
            <div className="text-sm font-medium text-gray-700">
              Breeding Season
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Until: {data.breedingSeason?.endDate || 'Unknown'}
            </div>
          </div>
        </Card>
      </div>

      {/* Charts and Alerts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Fishing Score Breakdown">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={fishingScoreData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis 
                dataKey="factor" 
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10 }}
                stroke="#6b7280"
              />
              <Radar
                name="Score"
                dataKey="value"
                stroke="#0ea5e9"
                fill="#0ea5e9"
                fillOpacity={0.6}
                strokeWidth={2}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Risk Alerts">
          <div className="space-y-3">
            {data.riskAlerts.map((alert, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg border-l-4 ${
                  alert.severity === 'high' 
                    ? 'bg-red-50 border-red-400' 
                    : alert.severity === 'medium'
                    ? 'bg-orange-50 border-orange-400'
                    : 'bg-yellow-50 border-yellow-400'
                }`}
              >
                <div className="flex items-start">
                  <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                    alert.severity === 'high' ? 'bg-red-400' : 
                    alert.severity === 'medium' ? 'bg-orange-400' : 
                    'bg-yellow-400'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-medium uppercase ${
                        alert.severity === 'high' ? 'text-red-600' : 
                        alert.severity === 'medium' ? 'text-orange-600' : 
                        'text-yellow-600'
                      }`}>
                        {alert.type}
                      </span>
                      <span className="text-xs text-gray-500">
                        {alert.timeframe}
                      </span>
                    </div>
                    <p className="text-sm text-gray-800">{alert.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Safe Zones and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recommended Safe Zones">
          <div className="space-y-3">
            {data.safeZones?.recommended?.map((zone, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <div className="font-medium text-green-900">{zone.zone}</div>
                  <div className="text-sm text-green-700">{zone.coordinates}</div>
                </div>
                <div className="text-sm text-green-600 font-medium">{zone.distance}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Areas to Avoid">
          <div className="space-y-3">
            {data.safeZones?.avoid?.map((area, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <div className="font-medium text-red-900">{area.zone}</div>
                  <div className="text-sm text-red-700">{area.reason}</div>
                </div>
                <div className="text-red-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Breeding Season Information">
          <div className="space-y-3">
            <div className="text-sm text-gray-600">
              <strong>Active Species:</strong>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.breedingSeason?.species?.map((species, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {species}
                </span>
              ))}
            </div>
            <div className="text-sm text-gray-600 mt-3">
              <strong>Restrictions:</strong> {data.breedingSeason?.restrictions || 'None'}
            </div>
          </div>
        </Card>

        <Card title="Fishing Recommendation">
          <div className="text-center py-4">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {data.fishingScore?.recommendation || 'Conditions unknown'}
            </div>
            <div className="text-sm text-gray-500">
              Based on current weather, sea conditions, and fish activity
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FarmerAdvisoryDashboard;
