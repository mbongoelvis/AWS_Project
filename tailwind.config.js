/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./userAndCompanies/*.html", "./**/script/*.js"],
  theme: {
    extend: {
      colors: {
        // secondary: "#d2d3db",
        // primary: "#fafafa",
        transparent: "rgba(255, 255, 255, 0.1)",
        secondary: "rgb(0, 0, 0)",
        primary: "rgb(27, 31, 35)",
      },
    },
  },
  plugins: [],
};

