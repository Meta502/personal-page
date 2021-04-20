const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: () => ({
        'hero': 'linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.75)), url(\'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\')',
      }),
      height: {
        'screen-1/2': '50vh',
      },
      colors: {
        gray: {
          dark: '#121212',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
