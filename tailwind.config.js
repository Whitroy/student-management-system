module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fill: theme => ({
      'blue-200': theme('colors.blue.200'),
      'blue-400': theme('colors.blue.400'),
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
