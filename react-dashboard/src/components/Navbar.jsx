import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Articles', href: '/articles' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-ocean-50 border-b border-ocean-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <img 
                src="/icon.png" 
                alt="OceanOpt Logo" 
                className="h-8 w-8 text-primary"
              />
              <span className="text-lg sm:text-xl font-semibold tracking-tight text-primary">OceanOpt</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? 'text-primary'
                        : 'text-ocean-700 hover:text-teal-700'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative">
                      {item.name}
                      <span
                        className={`absolute left-0 -bottom-2 h-0.5 w-full rounded-full transition-opacity duration-200 ${
                          isActive ? 'bg-primary opacity-100' : 'bg-primary opacity-0'
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ocean-700 hover:text-teal-700 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary/40 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 text-base font-medium transition-colors duration-200 border-l-2 ${
                      isActive
                        ? 'text-primary border-primary bg-white/50'
                        : 'text-ocean-700 border-transparent hover:text-teal-700 hover:bg-white/40'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
