import React, { useState, useEffect } from 'react';

const CoralReefRiskMonitor = ({ liveData }) => {
  const [riskLevel, setRiskLevel] = useState('moderate');
  const [stressFactors, setStressFactors] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Simulate risk assessment from live data
    const temp = liveData?.temperature || 26.5;
    const pollution = liveData?.pollution || 35;
    const acidity = liveData?.acidity || 8.1;
    const recentBleaching = liveData?.bleachingReports || 0;

    const factors = [];
    if (temp > 28) factors.push({ name: 'High Temperature', severity: 'high', value: temp });
    if (pollution > 40) factors.push({ name: 'Elevated Pollution', severity: 'medium', value: pollution });
    if (acidity < 8.0) factors.push({ name: 'Ocean Acidification', severity: 'medium', value: acidity });
    if (recentBleaching > 0) factors.push({ name: 'Recent Bleaching Events', severity: 'high', value: recentBleaching });

    setStressFactors(factors);

    // Determine overall risk level
    const highSeverityCount = factors.filter(f => f.severity === 'high').length;
    const mediumSeverityCount = factors.filter(f => f.severity === 'medium').length;

    let level = 'low';
    if (highSeverityCount >= 2 || (highSeverityCount >= 1 && mediumSeverityCount >= 2)) {
      level = 'critical';
    } else if (highSeverityCount >= 1 || mediumSeverityCount >= 3) {
      level = 'high';
    } else if (mediumSeverityCount >= 1) {
      level = 'moderate';
    }
    setRiskLevel(level);

    // Generate recommendations
    const recs = [];
    if (temp > 28) recs.push('Reduce local stressors during warm periods; establish temporary no-anchoring zones');
    if (pollution > 40) recs.push('Implement runoff barriers; coordinate community clean-up efforts');
    if (acidity < 8.0) recs.push('Protect seagrass beds; maintain mangrove buffers');
    if (recentBleaching > 0) recs.push('Monitor recovery; limit tourism impact; document changes');
    if (level === 'critical') recs.push('Activate emergency response protocol; engage regional monitoring networks');
    setRecommendations(recs);
  }, [liveData]);

  const riskConfig = {
    low: { color: 'text-success', bg: 'bg-success/10', border: 'border-success', label: 'Low Risk' },
    moderate: { color: 'text-warning', bg: 'bg-warning/10', border: 'border-warning', label: 'Moderate Risk' },
    high: { color: 'text-danger', bg: 'bg-danger/10', border: 'border-danger', label: 'High Risk' },
    critical: { color: 'text-danger', bg: 'bg-danger/20', border: 'border-danger', label: 'Critical Risk' }
  };

  const config = riskConfig[riskLevel];

  return (
    <div className="bg-surface border border-border rounded-lg p-5">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-text">Coral Reef Risk Monitor</h3>
        <p className="text-xs text-textMuted mt-1">Real-time stress detection and protective recommendations</p>
      </div>

      {/* Risk Level Indicator */}
      <div className={`p-4 rounded-lg border ${config.bg} ${config.border} mb-4`}>
        <div className="flex items-center justify-between">
          <div>
            <div className={`text-sm font-medium ${config.color}`}>Current Risk Level</div>
            <div className={`text-2xl font-bold ${config.color}`}>{config.label}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-textMuted">Last updated</div>
            <div className="text-sm text-text">{new Date().toLocaleTimeString()}</div>
          </div>
        </div>
      </div>

      {/* Stress Factors */}
      <div className="mb-4">
        <h4 className="text-sm font-bold text-text mb-3">Active Stress Factors</h4>
        {stressFactors.length > 0 ? (
          <div className="space-y-2">
            {stressFactors.map((factor, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    factor.severity === 'high' ? 'bg-danger' : 'bg-warning'
                  }`} />
                  <div>
                    <div className="text-sm font-medium text-text">{factor.name}</div>
                    <div className="text-xs text-textMuted">
                      {factor.name.includes('Temperature') && `${factor.value}°C`}
                      {factor.name.includes('Pollution') && `${factor.value}%`}
                      {factor.name.includes('Acidity') && `pH ${factor.value}`}
                      {factor.name.includes('Bleaching') && `${factor.value} reports`}
                    </div>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  factor.severity === 'high' ? 'bg-danger/10 text-danger' : 'bg-warning/10 text-warning'
                }`}>
                  {factor.severity}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-sm text-textMuted">No significant stress factors detected</p>
          </div>
        )}
      </div>

      {/* Recommendations */}
      <div>
        <h4 className="text-sm font-bold text-text mb-3">Protective Actions</h4>
        {recommendations.length > 0 ? (
          <div className="space-y-2">
            {recommendations.map((rec, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                <span className="text-accent mt-0.5">•</span>
                <p className="text-sm text-text">{rec}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-sm text-textMuted">Continue routine monitoring and maintenance</p>
          </div>
        )}
      </div>

      {/* Historical Trend */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-textMuted">7-Day Trend</span>
          <span className="text-xs font-medium text-success">Improving</span>
        </div>
        <div className="h-8 bg-surface rounded border border-border overflow-hidden">
          <div className="h-full flex items-end gap-1 px-1 py-1">
            {[45, 52, 48, 55, 58, 54, 50].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/30 rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoralReefRiskMonitor;
