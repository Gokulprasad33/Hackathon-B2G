import React from 'react';

const OceanWaveHero = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Layered SVG waves */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0D4F5C" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1A6B73" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2D8A85" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2D8A85" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FAFAFA" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Bottom layer - deepest wave */}
        <path
          d="M0,240 C240,180 360,180 480,240 C600,300 720,300 840,240 C960,180 1080,180 1200,240 L1200,320 L0,320 Z"
          fill="url(#waveGrad3)"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="M0,240 C240,180 360,180 480,240 C600,300 720,300 840,240 C960,180 1080,180 1200,240 L1200,320 L0,320 Z;M0,250 C240,190 360,190 480,250 C600,310 720,310 840,250 C960,190 1080,190 1200,250 L1200,320 L0,320 Z;M0,240 C240,180 360,180 480,240 C600,300 720,300 840,240 C960,180 1080,180 1200,240 L1200,320 L0,320 Z"
          />
        </path>

        {/* Middle layer */}
        <path
          d="M0,220 C200,160 400,160 600,220 C800,280 1000,280 1100,220 L1200,320 L0,320 Z"
          fill="url(#waveGrad2)"
          opacity="0.7"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="M0,220 C200,160 400,160 600,220 C800,280 1000,280 1100,220 L1200,320 L0,320 Z;M0,230 C200,170 400,170 600,230 C800,290 1000,290 1100,230 L1200,320 L0,320 Z;M0,220 C200,160 400,160 600,220 C800,280 1000,280 1100,220 L1200,320 L0,320 Z"
          />
        </path>

        {/* Top layer - lightest wave */}
        <path
          d="M0,200 C300,140 600,140 900,200 C1050,260 1150,260 1200,200 L1200,320 L0,320 Z"
          fill="url(#waveGrad1)"
          opacity="0.8"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="M0,200 C300,140 600,140 900,200 C1050,260 1150,260 1200,200 L1200,320 L0,320 Z;M0,210 C300,150 600,150 900,210 C1050,270 1150,270 1200,210 L1200,320 L0,320 Z;M0,200 C300,140 600,140 900,200 C1050,260 1150,260 1200,200 L1200,320 L0,320 Z"
          />
        </path>

        {/* Minimal fish silhouettes */}
        <g opacity="0.15">
          <path
            d="M150,180 C155,175 160,175 165,180 C170,185 175,180 180,175 C185,175 190,180"
            fill="none"
            stroke="#1A6B73"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="25s"
              repeatCount="indefinite"
              values="0,0; 50,3; 100,0; 150,-3; 200,0; 250,3; 300,0"
            />
          </path>
        </g>

        <g opacity="0.1">
          <path
            d="M850,160 C855,155 860,155 865,160 C870,165 875,160 880,155"
            fill="none"
            stroke="#2D8A85"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="30s"
              repeatCount="indefinite"
              values="0,0; 60,2; 120,0; 180,-2; 240,0; 300,2"
            />
          </path>
        </g>

        {/* Floating bubbles */}
        <circle cx="200" cy="250" r="2" fill="#E0F2FE" opacity="0.2">
          <animate
            attributeName="cy"
            dur="8s"
            repeatCount="indefinite"
            values="250; 240; 245; 255; 245; 250"
          />
        </circle>
        <circle cx="950" cy="270" r="1.5" fill="#2D8A85" opacity="0.15">
          <animate
            attributeName="cy"
            dur="10s"
            repeatCount="indefinite"
            values="270; 265; 275; 265; 270"
          />
        </circle>
        <circle cx="500" cy="200" r="1" fill="#FAFAFA" opacity="0.3">
          <animate
            attributeName="cy"
            dur="12s"
            repeatCount="indefinite"
            values="200; 195; 205; 195; 200"
          />
        </circle>
      </svg>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[320px] px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default OceanWaveHero;
