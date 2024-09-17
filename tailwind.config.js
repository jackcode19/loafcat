/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A213F',
        secondary: '#D38B01', 
      },
      fontFamily: {
        fontCat: ["LittleMario"],
      },
    },
  },
  plugins: [],
}