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
          DEFAULT: 'rgb(var(--docs-color-secondary-default, 48 48 48) / <alpha-value>)',
          1000: 'rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)',
          900: 'rgb(var(--docs-color-secondary-900, 28 28 28) / <alpha-value>)',
          800: 'rgb(var(--docs-color-secondary-800, 44 44 44) / <alpha-value>)',
          700: 'rgb(var(--docs-color-secondary-700, 60 60 60) / <alpha-value>)',
        },        
        text: {
          400: '#FF6F00'
        },
      },
    },
  },
  plugins: [],
};