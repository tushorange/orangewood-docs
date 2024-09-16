const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
      },
      borderRadius: {
        sm: '4px',
      },
      screens: {
        sm: '0px',
        lg: '997px',
      },
      colors: {
        primary: {
          DEFAULT: '#FF6F00', // Light deep orange
          100: '#FF8F00', // Slightly lighter deep orange
          200: '#FFA726', // Lighter deep orange
          'primary-500': '#FF6F00', // Deep red orange color
        },
        secondary: {
          DEFAULT: '#303030', // Black
          1000: '#000000', // Pure black
          900: '#1C1C1C', // Slightly lighter black
          800: '#2C2C2C', // Medium black
          700: '#3C3C3C', // Light black
        },
        text: {
          400: '#FF6F00', // Light deep orange for text
        },
      },
    },
  },
  plugins: [],
};
