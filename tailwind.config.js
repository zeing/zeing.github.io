module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Prompt', 'sans-serif'],
      body: ['Prompt', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      fontSize: ['hover', 'focus'],
      scale: ['active', 'group-hover'],
      opacity: ['group-hover'],
      backgroundOpacity: ['group-hover'],
    },
  },
  plugins: [],
}
