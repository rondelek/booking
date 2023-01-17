/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "main-dark": "#09153D",
      "main-red": "#EE1C47",
      "main-orange": "#FF823A",
      "main-gray": "#676C7B",
      white: "rgb(248 250 252)",
      gold: "#FFD700",
      transparent: "transparent",
    },
  },
  plugins: [],
};
