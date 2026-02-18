import os
import json
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
WEATHER_API_KEY = os.getenv('WEATHER_API_KEY')

def test_weatherapi(location="Kanchipuram"):
    """Test the WeatherAPI.com API"""
    import requests
    
    print(f"\n=== Testing WeatherAPI for {location} ===")
    
    base_url = "http://api.weatherapi.com/v1/current.json"
    params = {
        'key': WEATHER_API_KEY,
        'q': location,
        'aqi': 'no'
    }
    
    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()
        data = response.json()
        
        print("✅ Success!")
        print("Location:", f"{data['location']['name']}, {data['location']['region']}, {data['location']['country']}")
        print(f"Temperature: {data['current']['temp_c']}°C ({data['current']['temp_f']}°F)")
        print("Condition:", data['current']['condition']['text'])
        print("Wind:", f"{data['current']['wind_kph']} km/h {data['current']['wind_dir']}")
        return data
    except Exception as e:
        print("❌ Error:", str(e))
        if 'response' in locals():
            print("Response:", response.text)
        return None

def test_openmeteo(lat=11.7562, lon=79.7669):
    """Test the Open-Meteo API"""
    import openmeteo_requests
    import requests_cache
    from retry_requests import retry
    
    print(f"\n=== Testing Open-Meteo for coordinates {lat}, {lon} ===")
    
    # Setup the Open-Meteo API client with cache and retry on error
    cache_session = requests_cache.CachedSession('.cache', expire_after=3600)
    retry_session = retry(cache_session, retries=5, backoff_factor=0.2)
    openmeteo = openmeteo_requests.Client(session=retry_session)
    
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
        
        print("✅ Success!")
        print(f"Location: {response.Latitude()}°N, {response.Longitude()}°E")
        print(f"Elevation: {response.Elevation()} m")
        
        # Process hourly data
        hourly = response.Hourly()
        hourly_temperature_2m = hourly.Variables(0).ValuesAsNumpy()
        
        print("\nNext 5 hours forecast:")
        for i in range(5):
            print(f"  Hour {i+1}: {hourly_temperature_2m[i]}°C")
            
        return response
    except Exception as e:
        print("❌ Error:", str(e))
        return None

def test_flask_api():
    """Test the Flask API endpoints"""
    import requests
    
    print("\n=== Testing Flask API ===")
    base_url = "http://localhost:5000"
    
    # Test current weather endpoint
    try:
        print("\nTesting /api/current...")
        response = requests.get(f"{base_url}/api/current", params={"location": "Kanchipuram"})
        response.raise_for_status()
        data = response.json()
        print("✅ Success!")
        print(f"Location: {data['location']['name']}, {data['location']['country']}")
        print(f"Temperature: {data['current']['temp_c']}°C")
    except Exception as e:
        print("❌ Error with /api/current:", str(e))
    
    # Test forecast endpoint
    try:
        print("\nTesting /api/forecast...")
        response = requests.get(f"{base_url}/api/forecast", params={"lat": 11.7562, "lon": 79.7669})
        response.raise_for_status()
        data = response.json()
        print("✅ Success!")
        print(f"Forecast for: {data['latitude']}°N, {data['longitude']}°E")
        print(f"Timezone: {data['timezone']}")
    except Exception as e:
        print("❌ Error with /api/forecast:", str(e))

if __name__ == "__main__":
    if not WEATHER_API_KEY or WEATHER_API_KEY == 'your_api_key_here':
        print("⚠️  Warning: WEATHER_API_KEY not set in .env file")
    
    # Test WeatherAPI
    weather_data = test_weatherapi()
    
    # If we got location data from WeatherAPI, use it for Open-Meteo test
    if weather_data and 'location' in weather_data:
        lat = weather_data['location']['lat']
        lon = weather_data['location']['lon']
        test_openmeteo(lat, lon)
    else:
        # Use default coordinates if WeatherAPI fails
        test_openmeteo()
    
    # Test Flask API if it's running
    try:
        test_flask_api()
    except Exception as e:
        print("\n⚠️  Flask API is not running. Start it with: python weather.py")
        print("Error:", str(e))
