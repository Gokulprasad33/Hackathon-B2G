/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Calm, neutral base palette inspired by Plausible
        background: '#FAFAFA', // very light neutral off-white
        surface: '#FFFFFF', // pure white for cards
        border: '#E5E7EB', // soft borders
        text: '#111827', // strong text
        textMuted: '#6B7280', // helper text
        // Ocean-themed accents
        primary: '#0D4F5C', // deep ocean teal
        secondary: '#1A6B73', // muted blue-green
        accent: '#2D8A85', // lighter accent
        // Status colors
        success: '#059669', // green (safe)
        warning: '#D97706', // amber (moderate)
        danger: '#DC2626', // red (risk)
        // Legacy ocean palette (keep for compatibility)
        ocean: {
          50: '#EBF4F6',
          100: '#C8DEE3',
          200: '#A5C8D0',
          300: '#7AB2B2',
          400: '#579C94',
          500: '#088395',
          600: '#09637E',
          700: '#074D63',
          800: '#053A48',
          900: '#032733',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
