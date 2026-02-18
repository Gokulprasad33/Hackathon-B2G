import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Sea Organism Dashboard endpoints
export const seaOrganismAPI = {
  getWaterPollution: async () => {
    try {
      const response = await api.get('/api/sea-organism/pollution');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch water pollution data, using fallback');
      return {
        level: 65,
        status: 'moderate',
        trend: 'increasing'
      };
    }
  },

  getMicroplastics: async () => {
    try {
      const response = await api.get('/api/sea-organism/microplastics');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch microplastics data, using fallback');
      return {
        concentration: 45,
        unit: 'particles/m³',
        trend: 'stable'
      };
    }
  },

  getOilContamination: async () => {
    try {
      const response = await api.get('/api/sea-organism/oil-contamination');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch oil contamination data, using fallback');
      return {
        index: 28,
        status: 'low',
        lastIncident: '2024-01-15'
      };
    }
  },

  getCoralReefHealth: async () => {
    try {
      const response = await api.get('/api/sea-organism/coral-reef');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch coral reef data, using fallback');
      return {
        score: 72,
        status: 'recovering',
        bleachingRisk: 'moderate'
      };
    }
  },

  getAIAlerts: async () => {
    try {
      const response = await api.get('/api/sea-organism/alerts');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch AI alerts, using fallback');
      return [
        {
          type: 'warning',
          message: 'Elevated microplastic levels detected near coral reef zone B3',
          timestamp: new Date().toISOString()
        },
        {
          type: 'info',
          message: 'Water quality improving after recent cleanup operation',
          timestamp: new Date().toISOString()
        }
      ];
    }
  },

  getPollutionTrend: async () => {
    try {
      const response = await api.get('/api/sea-organism/pollution-trend');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch pollution trend, using fallback');
      return {
        data: [
          { date: '2024-01', pollution: 58, microplastics: 42 },
          { date: '2024-02', pollution: 62, microplastics: 44 },
          { date: '2024-03', pollution: 65, microplastics: 45 },
          { date: '2024-04', pollution: 63, microplastics: 46 },
          { date: '2024-05', pollution: 67, microplastics: 47 },
          { date: '2024-06', pollution: 65, microplastics: 45 },
        ]
      };
    }
  }
};

// Farmer Advisory Dashboard endpoints
export const farmerAPI = {
  getSeaLevel: async () => {
    try {
      const response = await api.get('/api/farmer/sea-level');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch sea level data, using fallback');
      return {
        current: 2.3,
        trend: 'rising',
        anomaly: '+0.15m above normal'
      };
    }
  },

  getWeatherConditions: async () => {
    try {
      const response = await api.get('/api/farmer/weather');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch weather data, using fallback');
      return {
        temperature: 28,
        windSpeed: 12,
        waveRisk: 'moderate',
        visibility: 'good'
      };
    }
  },

  getFishingScore: async () => {
    try {
      const response = await api.get('/api/farmer/fishing-score');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch fishing score, using fallback');
      return {
        score: 78,
        factors: {
          weather: 85,
          seaConditions: 72,
          fishActivity: 80,
          safety: 75
        },
        recommendation: 'Good conditions for fishing'
      };
    }
  },

  getRiskAlerts: async () => {
    try {
      const response = await api.get('/api/farmer/risk-alerts');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch risk alerts, using fallback');
      return [
        {
          type: 'storm',
          severity: 'medium',
          message: 'Storm expected in 48 hours, take precautions',
          timeframe: '48 hours'
        },
        {
          type: 'tide',
          severity: 'low',
          message: 'High tide expected tomorrow morning',
          timeframe: '12 hours'
        }
      ];
    }
  },

  getBreedingSeason: async () => {
    try {
      const response = await api.get('/api/farmer/breeding-season');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch breeding season data, using fallback');
      return {
        status: 'active',
        species: ['Tuna', 'Mackerel', 'Sardines'],
        restrictions: 'No fishing in protected zones',
        endDate: '2024-03-15'
      };
    }
  },

  getSafeZones: async () => {
    try {
      const response = await api.get('/api/farmer/safe-zones');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch safe zones, using fallback');
      return {
        recommended: [
          { zone: 'Zone A', coordinates: '11.5°N, 79.8°E', distance: '5km' },
          { zone: 'Zone C', coordinates: '11.7°N, 79.6°E', distance: '8km' }
        ],
        avoid: [
          { zone: 'Zone B', reason: 'High pollution levels' },
          { zone: 'Protected Area', reason: 'Breeding season restrictions' }
        ]
      };
    }
  }
};
