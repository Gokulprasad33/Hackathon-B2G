import React, { useState } from 'react';
import SeaOrganismDashboard from './pages/SeaOrganismDashboard';
import FarmerAdvisoryDashboard from './pages/FarmerAdvisoryDashboard';

function App() {
  const [activeDashboard, setActiveDashboard] = useState('sea-organism');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                OceanOpt Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm p-1 mb-6">
          <div className="flex">
            <button
              onClick={() => setActiveDashboard('sea-organism')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeDashboard === 'sea-organism'
                  ? 'bg-ocean-600 text-white shadow-sm'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Sea Organism Dashboard
            </button>
            <button
              onClick={() => setActiveDashboard('farmer-advisory')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeDashboard === 'farmer-advisory'
                  ? 'bg-ocean-600 text-white shadow-sm'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
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

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm text-gray-500">
            OceanOpt Dashboard - Real-time Ocean Monitoring System
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
