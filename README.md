# OceanOpt Monitoring System

A comprehensive ocean monitoring system with a React frontend and Python backend, providing real-time analytics for both sea organism health and farmer advisory services.

## 🌟 Features

- **Dual Dashboard System**:
  - Sea Organism Dashboard
  - Farmer Advisory Dashboard
- **Real-time Data Visualization** with interactive charts
- **Responsive Design** works on all devices
- **RESTful API** built with Python Flask
- **Automatic Fallback** to mock data when backend is unavailable

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Python 3.8+
- pip (Python package manager)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd path/to/OceanOps
   ```

2. Create and activate a virtual environment:
   ```bash
   # Windows
   python -m venv venv
   .\venv\Scripts\activate
   
   # macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```
   WEATHER_API_KEY=your_weatherapi_key_here
   FLASK_ENV=development
   ```

5. Start the backend server:
   ```bash
   python weather.py
   ```
   The API will be available at `http://localhost:5000`

### Frontend Setup

1. In a new terminal, navigate to the frontend directory:
   ```bash
   cd react-dashboard
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The dashboard will open at `http://localhost:3000`

## 🌐 Deployment

### Backend Deployment (Python/Flask)

#### Option 1: PythonAnywhere (Free Tier Available)
1. Create an account on [PythonAnywhere](https://www.pythonanywhere.com/)
2. Upload your backend files
3. Set up a virtual environment and install requirements
4. Configure the web app with a WSGI file

#### Option 2: Heroku
```bash
# Install Heroku CLI
heroku login
heroku create your-app-name
git add .
git commit -m "Prepare for Heroku deployment"
git push heroku main
```

### Frontend Deployment

#### Option 1: Vercel (Recommended)
1. Push your code to a GitHub repository
2. Sign up at [Vercel](https://vercel.com/)
3. Import your repository
4. Set environment variables in project settings
5. Deploy!

#### Option 2: Netlify
1. Push your code to a GitHub repository
2. Sign up at [Netlify](https://www.netlify.com/)
3. Import your repository
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Add environment variables
7. Deploy site

## 🔧 Environment Variables

### Backend (`.env`)
```
WEATHER_API_KEY=your_weatherapi_key
FLASK_ENV=production  # for production
DATABASE_URL=your_database_url  # if using a database
```

### Frontend (`.env` in react-dashboard)
```
REACT_APP_API_URL=your_backend_url  # e.g., https://your-api.herokuapp.com
```

## 📂 Project Structure

```
OceanOps/
├── react-dashboard/     # Frontend React application
│   ├── public/          # Static files
│   ├── src/             # React source code
│   └── package.json     # Frontend dependencies
├── venv/               # Python virtual environment
├── weather.py          # Backend Flask application
├── requirements.txt    # Python dependencies
└── .env                # Environment variables
```

## 🔄 API Endpoints

### Sea Organism Endpoints
- `GET /api/sea-organism/pollution` - Water pollution data
- `GET /api/sea-organism/microplastics` - Microplastics concentration
- `GET /api/sea-organism/oil-contamination` - Oil contamination index
- `GET /api/sea-organism/coral-reef` - Coral reef health metrics
- `GET /api/sea-organism/alerts` - AI-generated alerts
- `GET /api/sea-organism/pollution-trend` - Historical pollution data

### Farmer Advisory Endpoints
- `GET /api/farmer/sea-level` - Current sea level measurements
- `GET /api/farmer/weather` - Weather conditions
- `GET /api/farmer/fishing-score` - Fishing suitability score
- `GET /api/farmer/risk-alerts` - Risk warnings and alerts
- `GET /api/farmer/breeding-season` - Fish breeding season info
- `GET /api/farmer/safe-zones` - Recommended and restricted zones

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Ocean data from various environmental monitoring sources
- Built with React, Flask, and ❤️
