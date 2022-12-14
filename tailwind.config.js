/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './helpers/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        robotoMono: ['Roboto Mono']
      }
    },
  },
  plugins: [],
}
