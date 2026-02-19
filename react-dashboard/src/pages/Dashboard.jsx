import React, { useState } from 'react';
import SeaOrganismDashboard from './SeaOrganismDashboard';
import FishermenAdvisoryDashboard from './FishermenAdvisoryDashboard';
import TogglePill from '../components/TogglePill';

const Dashboard = () => {
  const [activeDashboard, setActiveDashboard] = useState('sea-organism');

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ocean Monitoring Dashboard
          </h1>
          <p className="text-lg text-ocean-600 max-w-2xl mx-auto">
            Real-time analytics for ocean health and maritime safety. 
            Toggle between different monitoring perspectives.
          </p>
        </div>

        {/* Dashboard Toggle */}
        <div className="flex justify-center mb-8">
          <TogglePill
            options={[
              { label: 'Sea Organism Data', value: 'sea-organism' },
              { label: 'Fishermen', value: 'farmer-advisory' }
            ]}
            value={activeDashboard}
            onChange={setActiveDashboard}
          />
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
