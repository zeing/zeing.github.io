module.exports = {
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontSize: ['hover', 'focus'],
    },
  },
  plugins: [],
}
