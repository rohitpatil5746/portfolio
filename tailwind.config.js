import withMT from "@material-tailwind/react/utils/withMT.js";

export default withMT({
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
