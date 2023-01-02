/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        // 'bg-primaria': '#574AE8',
      },
      keyframes: {
        wiggle: {
          // '0%, 100%': { fontSize: 19 },
          // '50%': { fontSize: 0 },
        }
      }
    },
  },
  purge:[
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [],
}