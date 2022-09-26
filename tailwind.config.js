/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    extend: {
      zIndex: {
        '1' : '1',
        '2' : '2',
        '5' : '5',
        '8' : '8',
        '9' : '9',
      }
    },
  },
  plugins: [],
}
