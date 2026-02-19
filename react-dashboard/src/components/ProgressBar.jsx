import React from 'react';

const ProgressBar = ({ value, max = 100, label, variant = 'auto', showPercentage = true }) => {
  const percentage = (value / max) * 100;

  const getColorClass = (value) => {
    if (variant === 'health') return 'bg-green-500';
    if (variant === 'pollution') return 'bg-rose-600';

    if (value <= 30) return 'bg-green-500';
    if (value <= 60) return 'bg-yellow-500';
    if (value <= 80) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showPercentage && (
            <span className="text-sm text-gray-500">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${getColorClass(value)} h-2 rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
