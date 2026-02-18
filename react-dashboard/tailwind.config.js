/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        primary: '#09637E',
        secondary: '#088395',
        tertiary: '#7AB2B2',
        background: '#EBF4F6',
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
