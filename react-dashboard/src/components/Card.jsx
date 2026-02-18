import React from 'react';

const Card = ({ children, className = '', title, subtitle, loading = false, error = null }) => {
  return (
    <div className={`bg-white rounded-lg card-shadow hover:card-shadow-hover transition-shadow duration-200 ${className}`}>
      {(title || subtitle) && (
        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 leading-tight">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
      )}
      <div className="px-6 py-4">
        {loading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ocean-600"></div>
          </div>
        )}
        {error && (
          <div className="text-red-500 text-sm py-4 text-center">
            {error}
          </div>
        )}
        {!loading && !error && children}
      </div>
    </div>
  );
};

export default Card;
