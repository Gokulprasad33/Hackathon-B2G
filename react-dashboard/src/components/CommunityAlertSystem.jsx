import React, { useState, useEffect } from 'react';

const CommunityAlertSystem = () => {
  const [alerts, setAlerts] = useState([]);
  const [activeFilters, setActiveFilters] = useState(['weather', 'safety', 'ecological']);

  useEffect(() => {
    // Simulate real-time alerts
    const mockAlerts = [
      {
        id: 1,
        type: 'weather',
        severity: 'high',
        title: 'Rough Seas Advisory',
        message: 'Wave heights expected 2.5–3.5m this afternoon. Small boats advised to stay near shore.',
        area: 'North Coast',
        validUntil: new Date(Date.now() + 6 * 60 * 60 * 1000),
        actions: ['Avoid deep water fishing', 'Secure equipment', 'Monitor radio channel 16']
      },
      {
        id: 2,
        type: 'safety',
        severity: 'medium',
        title: 'Temporary Fishing Zone Closure',
        message: 'Area near reef restoration site closed until tomorrow 6am for coral transplant work.',
        area: 'East Bay',
        validUntil: new Date(Date.now() + 14 * 60 * 60 * 1000),
        actions: ['Use alternative fishing grounds', 'Respect marker buoys']
      },
      {
        id: 3,
        type: 'ecological',
        severity: 'low',
        title: 'Fish Spawning Observed',
        message: 'Groupers observed spawning at North Reef. Practice catch-and-release in this area.',
        area: 'North Reef',
        validUntil: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        actions: ['Use circle hooks', 'Release large individuals', 'Report sightings']
      },
      {
        id: 4,
        type: 'ecological',
        severity: 'medium',
        title: 'Pollution Sighting Report',
        message: 'Oil sheen reported near industrial outfall. Avoid area until confirmed clear.',
        area: 'South Harbor',
        validUntil: new Date(Date.now() + 24 * 60 * 60 * 1000),
        actions: ['Do not fish in area', 'Report additional sightings', 'Check gear for contamination']
      }
    ];
    setAlerts(mockAlerts);
  }, []);

  const filters = [
    { key: 'weather', label: 'Weather', icon: '🌤️' },
    { key: 'safety', label: 'Safety', icon: '⚠️' },
    { key: 'ecological', label: 'Ecological', icon: '🐠' }
  ];

  const severityConfig = {
    low: { color: 'text-success', bg: 'bg-success/10', border: 'border-success', priority: 1 },
    medium: { color: 'text-warning', bg: 'bg-warning/10', border: 'border-warning', priority: 2 },
    high: { color: 'text-danger', bg: 'bg-danger/10', border: 'border-danger', priority: 3 }
  };

  const filteredAlerts = alerts
    .filter(alert => activeFilters.includes(alert.type))
    .sort((a, b) => severityConfig[b.severity].priority - severityConfig[a.severity].priority);

  const timeUntil = (date) => {
    const hours = Math.floor((date - new Date()) / (1000 * 60 * 60));
    if (hours < 1) return 'Expires soon';
    if (hours < 24) return `${hours}h remaining`;
    const days = Math.floor(hours / 24);
    return `${days}d remaining`;
  };

  const AlertCard = ({ alert }) => {
    const config = severityConfig[alert.severity];
    return (
      <div className={`p-4 rounded-lg border ${config.bg} ${config.border}`}>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{filters.find(f => f.key === alert.type)?.icon}</span>
            <div>
              <div className={`text-sm font-bold ${config.color}`}>{alert.title}</div>
              <div className="text-xs text-textMuted">{alert.area}</div>
            </div>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${config.bg} ${config.color}`}>
            {alert.severity}
          </span>
        </div>
        <p className="text-sm text-text mb-3">{alert.message}</p>
        <div className="space-y-2">
          <div className="text-xs font-medium text-text">Recommended Actions:</div>
          <ul className="space-y-1">
            {alert.actions.map((action, idx) => (
              <li key={idx} className="text-xs text-textMuted flex items-start gap-1">
                <span className="text-primary mt-0.5">•</span>
                {action}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 pt-3 border-t border-border flex justify-between items-center">
          <span className="text-xs text-textMuted">{timeUntil(alert.validUntil)}</span>
          <button className="text-xs text-primary hover:underline">Dismiss</button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-5">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-text">Community Alert System</h3>
        <p className="text-xs text-textMuted mt-1">Real-time safety, weather, and ecological alerts</p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map(filter => (
          <button
            key={filter.key}
            onClick={() => {
              setActiveFilters(prev =>
                prev.includes(filter.key)
                  ? prev.filter(f => f !== filter.key)
                  : [...prev, filter.key]
              );
            }}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              activeFilters.includes(filter.key)
                ? 'bg-primary text-surface'
                : 'bg-surface border border-border text-textMuted hover:text-text'
            }`}
          >
            {filter.icon} {filter.label}
          </button>
        ))}
      </div>

      {/* Alerts List */}
      <div className="space-y-3">
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-sm text-textMuted">No active alerts matching your filters</p>
          </div>
        )}
      </div>

      {/* Alert Summary */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-danger">{alerts.filter(a => a.severity === 'high').length}</div>
            <div className="text-xs text-textMuted">High Priority</div>
          </div>
          <div>
            <div className="text-lg font-bold text-warning">{alerts.filter(a => a.severity === 'medium').length}</div>
            <div className="text-xs text-textMuted">Medium Priority</div>
          </div>
          <div>
            <div className="text-lg font-bold text-success">{alerts.filter(a => a.severity === 'low').length}</div>
            <div className="text-xs text-textMuted">Low Priority</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityAlertSystem;
