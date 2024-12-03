const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        AustraliaFont: ["Edu AU VIC WA NT Arrows", "cursive"],
      },
    },
  },
  plugins: [],
});
