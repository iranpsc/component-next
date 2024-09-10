/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "node_modules/preline/dist/*.js",
    "./src/**/*.{html,js}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1850px',
    },
    extend: {
      colors: {
        'primery-blue': '#2667FF',
        'dark-yellow': '#FFC700',
      },
      fontFamily: {
        azarMehr: ['AzarMehr', 'sans-serif'],
        rohk: ['Rokh', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
  darkMode: 'class',
};
