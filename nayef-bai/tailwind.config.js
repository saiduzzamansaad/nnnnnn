/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '440px'
      },
      colors: {
        brandColor: "#2042B6",
        btnColor: "#AFCD80",
        background: "#EDEDED"
      },
      fontFamily: {
        Playwright: ["'Playwright PT'", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"]
      }
    },
  },
  plugins: [],
};