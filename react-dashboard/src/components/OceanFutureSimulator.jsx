import React, { useState, useEffect, useMemo } from 'react';

const OceanFutureSimulator = ({ baseMetrics }) => {
  const [scenarios, setScenarios] = useState({
    fishingIntensity: 50,
    pollutionLevel: 30,
    temperatureRise: 0.8,
    coralProtection: 40
  });

  const projected = useMemo(() => {
    const fishImpact = 1 - (scenarios.fishingIntensity / 100) * 0.6 + (scenarios.coralProtection / 100) * 0.3;
    const coralImpact = 1 - (scenarios.pollutionLevel / 100) * 0.5 - (scenarios.temperatureRise / 3) * 0.4 + (scenarios.coralProtection / 100) * 0.4;
    const ecosystemStability = (fishImpact + coralImpact) / 2;
    const livelihoodSustainability = fishImpact * 0.7 + ecosystemStability * 0.3;

    return {
      fishPopulation: Math.round((baseMetrics?.fishPopulation || 70) * fishImpact),
      coralHealth: Math.round((baseMetrics?.coralHealth || 65) * coralImpact),
      ecosystemStability: Math.round(ecosystemStability * 100),
      livelihoodSustainability: Math.round(livelihoodSustainability * 100)
    };
  }, [scenarios, baseMetrics]);

  const handleSliderChange = (key, value) => {
    setScenarios(s => ({ ...s, [key]: value }));
  };

  const ScenarioSlider = ({ label, value, onChange, unit, min, max, color }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-text">{label}</label>
        <span className="text-sm font-bold text-text">{value}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${color}`}
        style={{
          background: `linear-gradient(to right, currentColor 0%, currentColor ${(value - min) / (max - min) * 100}%, #E5E7EB ${(value - min) / (max - min) * 100}%, #E5E7EB 100%)`
        }}
      />
    </div>
  );

  const MetricCard = ({ title, value, unit, trend }) => (
    <div className="bg-surface border border-border rounded-lg p-4">
      <div className="text-xs text-textMuted mb-1">{title}</div>
      <div className="text-2xl font-bold text-text mb-1">
        {value}{unit}
      </div>
      <div className={`text-xs font-medium ${
        trend > 0 ? 'text-success' : trend < 0 ? 'text-danger' : 'text-textMuted'
      }`}>
        {trend > 0 ? '+' : ''}{trend}% vs today
      </div>
    </div>
  );

  const trends = useMemo(() => ({
    fishPopulation: Math.round(((projected.fishPopulation / (baseMetrics?.fishPopulation || 70)) - 1) * 100),
    coralHealth: Math.round(((projected.coralHealth / (baseMetrics?.coralHealth || 65)) - 1) * 100),
    ecosystemStability: 0,
    livelihoodSustainability: 0
  }), [projected, baseMetrics]);

  return (
    <div className="bg-surface border border-border rounded-lg p-5">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-text">Ocean Future Simulator</h3>
        <p className="text-xs text-textMuted mt-1">Adjust variables to explore long-term outcomes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sliders */}
        <div className="space-y-5">
          <ScenarioSlider
            label="Fishing Intensity"
            value={scenarios.fishingIntensity}
            onChange={v => handleSliderChange('fishingIntensity', v)}
            unit="%"
            min={0}
            max={100}
            color="text-warning"
          />
          <ScenarioSlider
            label="Pollution Level"
            value={scenarios.pollutionLevel}
            onChange={v => handleSliderChange('pollutionLevel', v)}
            unit="%"
            min={0}
            max={100}
            color="text-danger"
          />
          <ScenarioSlider
            label="Temperature Rise"
            value={scenarios.temperatureRise}
            onChange={v => handleSliderChange('temperatureRise', v)}
            unit="°C"
            min={0}
            max={3}
            step={0.1}
            color="text-accent"
          />
          <ScenarioSlider
            label="Coral Protection Effort"
            value={scenarios.coralProtection}
            onChange={v => handleSliderChange('coralProtection', v)}
            unit="%"
            min={0}
            max={100}
            color="text-success"
          />
        </div>

        {/* Projected Outcomes */}
        <div className="grid grid-cols-2 gap-3">
          <MetricCard
            title="Fish Population"
            value={projected.fishPopulation}
            unit="%"
            trend={trends.fishPopulation}
          />
          <MetricCard
            title="Coral Health"
            value={projected.coralHealth}
            unit="%"
            trend={trends.coralHealth}
          />
          <MetricCard
            title="Ecosystem Stability"
            value={projected.ecosystemStability}
            unit="%"
            trend={trends.ecosystemStability}
          />
          <MetricCard
            title="Livelihood Sustainability"
            value={projected.livelihoodSustainability}
            unit="%"
            trend={trends.livelihoodSustainability}
          />
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
        <div className="text-sm font-medium text-text mb-2">Key Insights</div>
        <ul className="text-xs text-textMuted space-y-1">
          <li>• Reducing fishing intensity by 20% can improve fish population resilience by ~12% over 5 years.</li>
          <li>• Coral protection efforts significantly buffer temperature rise impacts on reef health.</li>
          <li>• Combined actions yield stronger ecosystem stability than single interventions.</li>
        </ul>
      </div>
    </div>
  );
};

export default OceanFutureSimulator;
