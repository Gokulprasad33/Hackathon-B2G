import React, { useState } from 'react';
import SeaOrganismDashboard from './SeaOrganismDashboard';
import FarmerAdvisoryDashboard from './FarmerAdvisoryDashboard';

const Dashboard = () => {
  const [activeDashboard, setActiveDashboard] = useState('sea-organism');

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="bg-white rounded-lg shadow-sm p-1 mb-8">
          <div className="flex">
            <button
              onClick={() => setActiveDashboard('sea-organism')}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeDashboard === 'sea-organism'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-ocean-700 hover:text-primary hover:bg-ocean-50'
              }`}
            >
              Sea Organism Dashboard
            </button>
            <button
              onClick={() => setActiveDashboard('farmer-advisory')}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeDashboard === 'farmer-advisory'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-ocean-700 hover:text-primary hover:bg-ocean-50'
              }`}
            >
              Farmer Advisory Dashboard
            </button>
          </div>
        </div>

        {/* Active Dashboard */}
        <div className="animate-fadeIn">
          {activeDashboard === 'sea-organism' ? (
            <SeaOrganismDashboard />
          ) : (
            <FarmerAdvisoryDashboard />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
