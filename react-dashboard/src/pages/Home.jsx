import React from 'react';
import { Link } from 'react-router-dom';
import OceanWaveHero from '../components/OceanWaveHero';

const Home = () => {
  const features = [
    {
      title: 'Pollution Monitoring',
      description: '<strong>Water Pollution Levels</strong>, <strong>Microplastics</strong>, and <strong>Oil Contamination</strong> tracking to protect marine ecosystems with real-time data.',
      color: 'text-red-500',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      )
    },
    {
      title: 'Marine Health',
      description: '<strong>Coral Reef Health</strong> monitoring, biodiversity indicators, and comprehensive ocean ecosystem condition assessment.',
      color: 'text-green-500',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Fisherman Advisory',
      description: 'Weather alerts, fishing scores, and safety recommendations to support sustainable fishing practices.',
      color: 'text-blue-500',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    }
  ];

  const stats = [
    { label: 'Ocean Areas Monitored', value: '50+' },
    { label: 'Active Sensors', value: '200+' },
    { label: 'Lives Protected', value: '10,000+' },
    { label: 'Data Points Daily', value: '1M+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Ocean Waves */}
      <section className="relative min-h-[320px]">
        <OceanWaveHero>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/icon.png" 
                alt="OceanOpt Logo" 
                className="h-16 w-16 text-primary"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
              OceanOpt
            </h1>
            <p className="text-xl md:text-2xl text-textMuted mb-8 max-w-3xl mx-auto">
              Protecting our oceans through innovative technology. 
              Real-time monitoring for ocean sustainability and fisherman safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-3 bg-primary text-surface font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002 2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2 2z" />
                </svg>
                Open Dashboard
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 bg-surface text-primary font-medium rounded-lg border border-border hover:bg-background transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </OceanWaveHero>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Impact Areas
            </h2>
            <p className="text-lg text-ocean-600 max-w-2xl mx-auto">
              Comprehensive monitoring solutions for ocean conservation and maritime safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-ocean-100"
              >
                <div className="flex justify-center mb-4">
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 text-center">
                  {feature.title}
                </h3>
                <p 
                  className="text-ocean-600 text-center leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Together, we can protect our oceans and support sustainable fishing communities 
            for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-ocean-50 transition-colors duration-200"
            >
              Get Involved
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-3 bg-ocean-700 text-white font-medium rounded-lg hover:bg-ocean-800 transition-colors duration-200"
            >
              View Live Data
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
