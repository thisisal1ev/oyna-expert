/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'lightGreen': '#63B700',
        'mainBlack': '#323232',
        'orange': '#FFB500',
        'grey': '#B3B3B3',
      },
      maxWidth: {
        'base': '1440px',
      },
    },
  },
  plugins: [],
}