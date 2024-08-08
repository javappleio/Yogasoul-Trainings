const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Josefin Sans', 'sans-serif'],
        'fjalla': ['Fjalla One', 'sans-serif'],
      },
      colors: {
        "primary": "#FCE227",
        "secondary": "#098DA2",
        "dark": "#3A393A",
        "footer": "#0F2229",
        "light": "#D1F9FF",
        "callPurple": "#6c70dc"
      }
    },
  },
  plugins: [],
});
