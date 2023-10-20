/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      ...colors,
      primary: colors.amber,
      secondary: colors.rose,
    },
  },
  plugins: [],
};
