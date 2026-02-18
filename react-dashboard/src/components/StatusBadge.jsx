import React from 'react';

const StatusBadge = ({ status, size = 'md' }) => {
  const getStatusConfig = (status) => {
    const configs = {
      active: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        label: 'Active'
      },
      low: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        label: 'Low'
      },
      restricted: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        label: 'Restricted'
      },
      moderate: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        label: 'Moderate'
      },
      high: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        label: 'High'
      },
      low: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        label: 'Low'
      },
      recovering: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        label: 'Recovering'
      },
      stable: {
        bg: 'bg-gray-100',
        text: 'text-gray-800',
        label: 'Stable'
      }
    };

    return configs[status?.toLowerCase()] || configs.stable;
  };

  const config = getStatusConfig(status);
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <span className={`inline-flex items-center font-medium rounded-full ${config.bg} ${config.text} ${sizeClasses[size]}`}>
      {config.label}
    </span>
  );
};

export default StatusBadge;
