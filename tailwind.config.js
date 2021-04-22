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
        'hero': 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url(\'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\')',
      }),
      height: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
      },
      colors: {
        gray: {
          dark: '#151515',
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
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
};
