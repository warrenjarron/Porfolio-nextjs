/** @type {import('tailwindcss').Config} */



module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0000D1",
      },
      fontFamily: {
        raleway: ["raleway"],
        great: ["Great Vibes", "cursives"],
        // josefinSans: ["josefin-sans"],
        montecarlo: ["MonteCarlo", "cursive"],
      },
    },
  },
  plugins: [],
};
