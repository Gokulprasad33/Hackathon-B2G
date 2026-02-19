import React from 'react';

const TogglePill = ({
  options,
  value,
  onChange,
  className = '',
  size = 'md'
}) => {
  const sizeClasses =
    size === 'sm'
      ? 'text-sm'
      : size === 'lg'
      ? 'text-base'
      : 'text-sm md:text-base';

  return (
    <div
      className={`inline-flex items-stretch rounded-full border-2 border-primary p-1 bg-transparent ${className}`}
      role="tablist"
      aria-label="Dashboard toggle"
    >
      {options.map((opt) => {
        const active = opt.value === value;

        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${sizeClasses} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              active
                ? 'bg-primary text-white shadow-sm'
                : 'bg-transparent text-primary hover:bg-primary/10'
            }`}
            role="tab"
            aria-selected={active}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

export default TogglePill;
