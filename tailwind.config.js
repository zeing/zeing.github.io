module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['space-x-8'],
    },
  },
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
