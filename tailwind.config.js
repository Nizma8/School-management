/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
       
        customFont:['Roboto Slab', 'serif']
      }
    },
  },
  plugins: [],
}

