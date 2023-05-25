/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D86F38',
        ['primary-hover']: '#F19C70'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

