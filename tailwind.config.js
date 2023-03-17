/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#2BB8D6",
          red: "#EA526F",
          jet: "#30323D",
          Rhythm: "#7C81A0",
          "Spanish Gray": "#9A9A9A",
          green: "#37B76C",
        },
        secondary: {
          "background-gray": "#9A9A9A1A",
        },
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
