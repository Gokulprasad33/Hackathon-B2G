import React from 'react';

const Gauge = ({ value, max = 100, label, unit = '', color = 'ocean' }) => {
  const percentage = (value / max) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getColorClass = (value) => {
    if (value <= 30) return 'text-green-500';
    if (value <= 60) return 'text-yellow-500';
    if (value <= 80) return 'text-orange-500';
    return 'text-red-500';
  };

  const getStrokeColor = (value) => {
    if (value <= 30) return '#10b981';
    if (value <= 60) return '#f59e0b';
    if (value <= 80) return '#f97316';
    return '#ef4444';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke={getStrokeColor(value)}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className={`text-2xl font-bold ${getColorClass(value)}`}>
              {value}
            </span>
            {unit && (
              <span className="text-sm text-gray-500 block">{unit}</span>
            )}
          </div>
        </div>
      </div>
      {label && (
        <p className="text-sm font-medium text-gray-700 mt-3 text-center">
          {label}
        </p>
      )}
    </div>
  );
};

export default Gauge;
