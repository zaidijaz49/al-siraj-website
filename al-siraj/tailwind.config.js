/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1a5c35",
          mid: "#2d7a4f",
          light: "#e8f5ee",
          dark: "#0d3520",
          darker: "#071a10",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
