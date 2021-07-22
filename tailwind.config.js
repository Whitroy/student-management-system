module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'blue': '0 10px 8px -6px rgba(33, 132, 243, 0.5)',
        'green': '0 10px 8px -6px rgba(0, 250, 154, 0.5)',
        'red': '0 10px 8px -6px rgba(250,128,114, 0.5)',
        'yellow': '0 10px 8px -6px rgba(255,228,181, 0.5)',
        'gray': '0 10px 8px -6px rgba(105,105,105, 0.5)'
      }
      , width: {
        '68' : '17rem'
      },
      margin: {
        "1/5": "20%",
        "1/10":"10%"
      },
      transitionProperty: {
        'height': 'height',
        'width':'width',
      },
    },
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
