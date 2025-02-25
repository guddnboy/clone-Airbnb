/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        airbnb: {
          primary: '#FF5A5F',
          secondary: '#FF385C',
          dark: '#484848',
          light: '#F7F7F7',
          pink: '#FC642D',
          blue: '#00A699',
        },
      },
    },
  },
  plugins: [],
};
