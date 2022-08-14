// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#FF9F47',
        black: '#0B1121',
        blackLight: '#363F57',
        blue: '#3ABCFF',
        body: '#9297A4',
        // gradient card colors
        filterRed: '#F04040',
        filterOrange: '#FDBC5B',
        filterGreen: '#6FED43',
        filterCyan: '#30F9E1',
        filterBlue: '#4A64ED',
        filterPurple: '#F13DF4',
      },
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
    },
  },
  plugins: [],
}
