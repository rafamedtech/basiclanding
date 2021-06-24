module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
      }),
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535'
      },
      height: {
        '80': '20rem',
        '100': '25rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

