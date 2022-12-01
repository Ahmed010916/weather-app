/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "site"  : "#0f91e7",
        "snow"  : "#67b3d7",
        "sun"   : "#00b4d9",
        "storm" : "#6e6491",
        "rainy" : "#003d6a",
        "rog"   : "#1bb58c",
        "cloudy": "#fea71e",
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}