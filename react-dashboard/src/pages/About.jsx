import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Marine Biologist',
      expertise: 'Coral reef ecosystems and marine biodiversity'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Data Scientist',
      expertise: 'Machine learning for ocean data analysis'
    },
    {
      name: 'Emma Thompson',
      role: 'Environmental Engineer',
      expertise: 'Water quality monitoring systems'
    },
    {
      name: 'James Wilson',
      role: 'Fisheries Expert',
      expertise: 'Sustainable fishing practices and community engagement'
    }
  ];

  const impactStats = [
    { label: 'Communities Served', value: '50+' },
    { label: 'Research Partners', value: '25+' },
    { label: 'Data Accuracy', value: '98%' },
    { label: 'Response Time', value: '< 5min' }
  ];

  const getStatIcon = (index) => {
    switch(index) {
      case 0:
        return (
          <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 1:
        return (
          <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 2:
        return (
          <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 3:
        return (
          <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <svg className="h-12 w-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About OceanOpt
          </h1>
          <p className="text-lg text-ocean-600 max-w-2xl mx-auto">
            We are a dedicated team of scientists, engineers, and conservationists 
            working together to protect our oceans and support coastal communities.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-ocean-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-ocean-600 mb-4 leading-relaxed">
                  To revolutionize ocean monitoring through cutting-edge technology, 
                  providing real-time data that empowers conservation efforts and protects 
                  fishing communities worldwide.
                </p>
                <p className="text-ocean-600 leading-relaxed">
                  We believe that accessible, accurate ocean data is crucial for making 
                  informed decisions about marine conservation and sustainable resource management.
                </p>
              </div>
              <div className="flex justify-center">
                <svg className="h-32 w-32 text-primary opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-ocean-50 to-ocean-100 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-ocean-600 max-w-3xl mx-auto">
                A world where every ocean is monitored, every marine species is protected, 
                and every fishing community thrives in harmony with nature.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Conservation</h3>
                  <p className="text-sm text-ocean-600">
                    Protecting marine biodiversity through data-driven conservation strategies
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Innovation</h3>
                  <p className="text-sm text-ocean-600">
                    Pioneering new technologies for ocean monitoring and analysis
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Community</h3>
                  <p className="text-sm text-ocean-600">
                    Empowering coastal communities with tools for sustainable fishing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-ocean-600">
              Making a measurable difference in ocean conservation and community safety
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm border border-ocean-100">
                <div className="flex justify-center mb-3">
                  {getStatIcon(index)}
                </div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-ocean-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Our Team
            </h2>
            <p className="text-lg text-ocean-600">
              Meet the experts behind OceanOpt's innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-ocean-100">
                <div className="w-20 h-20 bg-ocean-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-10 w-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-ocean-700 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-ocean-600">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
