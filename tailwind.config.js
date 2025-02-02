/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        botton: "rgba(72, 178, 154, 1)",
        bgBody: "rgba(248, 248, 248, 1)",
        backGround: "rgba(244, 245, 247, 1)",
        textColor: "rgba(107, 114, 128, 1)",
        blue: "rgba(62, 151, 255, 1)",
        babyBlue: "rgba(62, 151, 255, .1)",
        red: "rgba(255, 75, 85, 1)",
      },
    },
  },
  plugins: [],
};
