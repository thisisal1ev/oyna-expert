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
        'textGrey': '#7f7f7f',
        'primaryBlue': '#4285F4',
        'skyblue': '#a2c3fa',
        'royaleBlue': '#15c',
        'btnBlue': '#3b7cef',
        'red': '#e84c47',
      },
      maxWidth: {
        'base': '1440px',
      },
      fontSize: {
        '22': '22px',
        '26': '26px',
        '28': '28px',
        '32': '32px',
        '38': '38px',
        '44': '44px',
      },
      spacing: {
        '3%': '3%',
      },
      backgroundImage: {
        'sobaka': "url('/src/assets/img/sobaka.jpg')",
        'koshka': "url('/src/assets/img/koshka.jpg')",
        'devushka':"url(/src/assets/img/swiper-first-img.jpg)",
        'mishka':"url(/src/assets/img/swiper-second-img.jpg)",
      },
      zIndex: {
        1: '1'
      },
    },
  },
  plugins: [],
}