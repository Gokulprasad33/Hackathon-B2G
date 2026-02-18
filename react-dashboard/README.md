# OceanOpt Dashboard

A production-ready React dashboard for ocean monitoring with real-time data visualization.

## Features

- **Dual Dashboard System**: Switch between Sea Organism and Farmer Advisory dashboards
- **Real-time Data**: Connects to Python backend REST APIs with graceful fallback to mock data
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimal design using Tailwind CSS with custom ocean-themed colors
- **Interactive Charts**: Powered by Recharts for data visualization
- **Error Handling**: Comprehensive error states and loading indicators

## Dashboard Components

### Sea Organism Dashboard
- Water Pollution Level (gauge visualization)
- Microplastics Concentration monitoring
- Oil Contamination Index tracking
- Coral Reef Health Score assessment
- AI-powered Alerts & Suggestions
- Historical trend charts for pollution and microplastics

### Farmer Advisory Dashboard
- Sea Level monitoring with anomaly detection
- Weather Conditions (temperature, wind, wave risk)
- Fishing Score with multi-factor analysis
- Risk Alerts (storm, tide, pollution warnings)
- Fish Breeding Season indicators
- Recommended Safe Zones and avoidance areas

## Technical Stack

- **Frontend**: React 18 with functional components and hooks
- **Styling**: Tailwind CSS with custom ocean theme
- **Charts**: Recharts for responsive data visualization
- **API**: Axios with centralized service layer
- **Build**: Create React App with optimized production build

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## API Configuration

The dashboard connects to a Python backend via REST API. Configure the API URL in the `.env` file:

```
REACT_APP_API_URL=http://localhost:5000
```

### API Endpoints

#### Sea Organism Endpoints
- `/api/sea-organism/pollution` - Water pollution data
- `/api/sea-organism/microplastics` - Microplastic concentration
- `/api/sea-organism/oil-contamination` - Oil contamination index
- `/api/sea-organism/coral-reef` - Coral reef health metrics
- `/api/sea-organism/alerts` - AI-generated alerts
- `/api/sea-organism/pollution-trend` - Historical pollution data

#### Farmer Advisory Endpoints
- `/api/farmer/sea-level` - Current sea level measurements
- `/api/farmer/weather` - Weather conditions
- `/api/farmer/fishing-score` - Fishing suitability score
- `/api/farmer/risk-alerts` - Risk warnings and alerts
- `/api/farmer/breeding-season` - Fish breeding season info
- `/api/farmer/safe-zones` - Recommended and restricted zones

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.jsx        # Base card component
│   ├── Gauge.jsx       # Circular gauge visualization
│   ├── ProgressBar.jsx # Linear progress bar
│   └── StatusBadge.jsx # Status indicator badges
├── pages/              # Dashboard pages
│   ├── SeaOrganismDashboard.jsx
│   └── FarmerAdvisoryDashboard.jsx
├── services/           # API service layer
│   └── api.js         # Centralized API calls with fallback data
├── App.jsx            # Main application component
├── index.css          # Global styles and Tailwind imports
└── index.js           # Application entry point
```

## Features Implemented

- **Graceful Degradation**: If API calls fail, the dashboard automatically falls back to realistic mock data
- **Responsive Grid**: Adapts to different screen sizes with appropriate column layouts
- **Loading States**: Smooth loading animations and skeleton screens
- **Error Handling**: User-friendly error messages and recovery options
- **Accessibility**: Semantic HTML and ARIA labels for screen readers
- **Performance**: Optimized re-renders and efficient data fetching

## Customization

### Colors
The ocean theme is definedd in `tailwind.config.js`. Modify the `ocean` color palette to match your brand.

### Components
All components are modular and reusable. Extend or modify them in the `components/` directory.

### API Integration
Replace the placeholder endpoints in `src/services/api.js` with your actual backend endpoints.

## Production Build

Create an optimized production build:

```bash
npm run build
```

This creates the `build/` folder with optimized assets ready for deployment.

## Deployment

The dashboard can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages
- Any web server with static file serving

## License

This project is licensed under the MIT License.
