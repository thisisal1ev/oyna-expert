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
        'mainGrey': '#B3B3B3',
        'grey': '#f7f7f7',
      },
      maxWidth: {
        'base': '1440px',
      },
      fontSize: {
        '22': '22px',
        '28': '28px',
        '32': '32px',
        '44': '44px',
      },
      zIndex: {
        1: '1'
      },
    },
  },
  plugins: [],
}