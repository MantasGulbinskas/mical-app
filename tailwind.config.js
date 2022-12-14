/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1a5dbf",
        secondary: "#51fe44",
        footer: "#141629"
      },
    },
  },
  plugins: [],
};
