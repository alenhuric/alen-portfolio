module.exports = {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      screens: {
        xs: { max: "500px" },
      },
    },
  },
  plugins: [],
};
