import React, { useMemo } from 'react';

const OceanSafetyMap = ({
  className = '',
  center = [21.686, 80.207],
  zoom = 5
}) => {
  const [lat, lon] = center;

  const windySrc = useMemo(() => {
    const params = new URLSearchParams({
      lat: String(lat),
      lon: String(lon),
      zoom: String(zoom),
      level: 'surface',
      overlay: 'wind',
      menu: '',
      message: '',
      marker: '',
      calendar: 'now',
      pressure: '',
      type: 'map',
      location: 'coordinates',
      detail: '',
      detailLat: '',
      detailLon: '',
      metricWind: 'km/h',
      metricTemp: '°C',
      radarRange: '-1'
    });

    return `https://embed.windy.com/embed2.html?${params.toString()}`;
  }, [lat, lon, zoom]);

  return (
    <div className={`relative w-full h-[320px] rounded-lg overflow-hidden ${className}`}>
      <iframe
        title="Windy Map"
        src={windySrc}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
};

export default OceanSafetyMap;
