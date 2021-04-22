/* eslint-disable max-len */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: () => ({
        'hero': `url(\'/images/hero_image.jpg\')`,
        'hero-pattern': 'linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45)), url(\'/images/background.png\')',
      }),
      animation: {
        'top-left-linear-infinite': 'top-left-linear-infinite 800s linear infinite',
      },
      keyframes: {
        'top-left-linear-infinite': {
          'from': {'background-position': '0 0'},
          'to': {'background-position': '-400% -800%'},
        },
      },
      height: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
      },
      colors: {
        gray: {
          dark: '#151515',
          darker: '#070a11',
        },
        blue: {
          dark: '#3969b8',
        },
      },
      maxWidth: {
        '1/4': '25%',
        '1/3': '33.3333%',
        '2/3': '66.6666%',
        '3/4': '75%',
        '2/5': '40%',
        '62.5': '62.5%',
        '1/2': '50%',
      },
      maxHeight: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
      },
      width: {
        '1/4': '25%',
        '3/4': '75%',
      },
      opacity: {
        '35': '.35',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
};
