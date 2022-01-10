const defaultTheme = require('tailwindcss/defaultTheme')
const customTheme = require('./src/theme').theme;

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      ...defaultTheme,
    },
    ...customTheme
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
