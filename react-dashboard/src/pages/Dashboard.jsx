import React, { useState } from 'react';
import SeaOrganismDashboard from './SeaOrganismDashboard';
import FishermenAdvisoryDashboard from './FishermenAdvisoryDashboard';
import TogglePill from '../components/TogglePill';

const Dashboard = () => {
  const [activeDashboard, setActiveDashboard] = useState('sea-organism');

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Ocean Monitoring Dashboard
          </h1>
          <p className="text-lg text-textMuted max-w-xl mx-auto leading-relaxed">
            Real-time analytics for ocean health and maritime safety. Toggle between different monitoring perspectives.
          </p>
        </div>

        {/* Dashboard Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-surface border border-border rounded-lg p-1">
            <button
              onClick={() => setActiveDashboard('sea-organism')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeDashboard === 'sea-organism'
                  ? 'bg-primary text-surface shadow-sm'
                  : 'text-textMuted hover:text-text'
              }`}
            >
              Sea Organism Data
            </button>
            <button
              onClick={() => setActiveDashboard('farmer-advisory')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeDashboard === 'farmer-advisory'
                  ? 'bg-primary text-surface shadow-sm'
                  : 'text-textMuted hover:text-text'
              }`}
            >
              Fishermen
            </button>
          </div>
        </div>

        {/* Active Dashboard */}
        <div className="animate-fadeIn">
          {activeDashboard === 'sea-organism' ? (
            <SeaOrganismDashboard />
          ) : (
            <FishermenAdvisoryDashboard />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
