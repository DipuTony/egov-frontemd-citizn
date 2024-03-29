/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'RobotoSlab': ['Roboto Slab', 'serif', 'Arial'],
      }
    },
  },
  plugins: [],
}