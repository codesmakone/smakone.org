const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "2rem",
      },
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      fontFamily: {
        'sans': ['Montserrat','SF-Pro', ...defaultTheme.fontFamily.sans],
        'serif':['Lora', ...defaultTheme.fontFamily.sans]
      },
      minHeight: {
        '0': '0',
        '100': '100px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
