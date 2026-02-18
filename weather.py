import os
import json
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import openmeteo_requests
import pandas as pd
import requests_cache
from retry_requests import retry
from dotenv import load_dotenv



# Initialize Flask app
app = Flask(__name__, static_url_path='', static_folder='static')
CORS(app)  # Enable CORS for all routes

@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

# Setup the Open-Meteo API client with cache and retry on error
cache_session = requests_cache.CachedSession('.cache', expire_after=3600)
retry_session = retry(cache_session, retries=5, backoff_factor=0.2)
openmeteo = openmeteo_requests.Client(session=retry_session)

# Load environment variables
load_dotenv()
WEATHER_API_KEY = os.getenv('WEATHER_API_KEY')

def get_current_weather(location, api_key):
    """Fetch current weather data for the specified location using WeatherAPI."""
    base_url = "http://api.weatherapi.com/v1/current.json"
    params = {
        'key': api_key,
        'q': location,
        'aqi': 'no'
    }
    
    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        return {'error': str(e)}

def get_forecast_weather(lat, lon):
    """Fetch forecast weather data using Open-Meteo API."""
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": lat,
        "longitude": lon,
        "hourly": "temperature_2m",
        "timezone": "auto"
    }
    
    try:
        responses = openmeteo.weather_api(url, params=params)
        response = responses[0]
        
        # Process hourly data
        hourly = response.Hourly()
        hourly_temperature_2m = hourly.Variables(0).ValuesAsNumpy()
        
        hourly_data = {"date": pd.date_range(
            start=pd.to_datetime(hourly.Time(), unit="s", utc=True),
            end=pd.to_datetime(hourly.TimeEnd(), unit="s", utc=True),
            freq=pd.Timedelta(seconds=hourly.Interval()),
            inclusive="left"
        ).tolist()}
        
        hourly_data["temperature_2m"] = hourly_temperature_2m.tolist()
        
        return {
            "latitude": response.Latitude(),
            "longitude": response.Longitude(),
            "elevation": response.Elevation(),
            "timezone": response.Timezone(),
            "timezone_abbreviation": response.TimezoneAbbreviation(),
            "hourly": hourly_data
        }
    except Exception as e:
        return {'error': str(e)}

@app.route('/api/current', methods=['GET'])
def current_weather():
    """API endpoint to get current weather for a location."""
    location = request.args.get('location')
    if not location:
        return jsonify({'error': 'Location parameter is required'}), 400
    
    if not WEATHER_API_KEY or WEATHER_API_KEY == 'your_api_key_here':
        return jsonify({'error': 'WeatherAPI.com API key not configured'}), 500
    
    weather_data = get_current_weather(location, WEATHER_API_KEY)
    return jsonify(weather_data)

@app.route('/api/forecast', methods=['GET'])
def forecast_weather():
    """API endpoint to get forecast weather for coordinates."""
    try:
        lat = float(request.args.get('lat', 0))
        lon = float(request.args.get('lon', 0))
    except (TypeError, ValueError):
        return jsonify({'error': 'Invalid latitude or longitude'}), 400
    
    forecast_data = get_forecast_weather(lat, lon)
    return jsonify(forecast_data)

@app.route('/api/weather', methods=['GET'])
def combined_weather():
    """API endpoint to get both current weather and forecast."""
    location = request.args.get('location')
    if not location:
        return jsonify({'error': 'Location parameter is required'}), 400
    
    if not WEATHER_API_KEY or WEATHER_API_KEY == 'your_api_key_here':
        return jsonify({'error': 'WeatherAPI.com API key not configured'}), 500
    
    # Get current weather
    current = get_current_weather(location, WEATHER_API_KEY)
    
    # If we have location data from current weather, use it for forecast
    if 'location' in current and 'lat' in current['location'] and 'lon' in current['location']:
        lat = current['location']['lat']
        lon = current['location']['lon']
        forecast = get_forecast_weather(lat, lon)
    else:
        forecast = {'error': 'Could not get coordinates for forecast'}
    
    return jsonify({
        'current': current,
        'forecast': forecast
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)
