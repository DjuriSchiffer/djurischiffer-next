/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./node_modules/flowbite-react/**/*.js", "./app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      emerald: colors.emerald,
      white: "#ffffff",
      black: "#000000",
      loss: "#ea3943",
      dark: "#1e293b",
      "gray-dark": "#1e2126",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    extend: {
      colors: {
        green: {
          // primary
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#10b981",
          700: "#10b981",
          800: "#10b981",
          900: "#10b981",
          DEFAULT: "#34d399", //500
          on: "#ecfdf5", //50
          dark: {
            DEFAULT: "#34d399", //400
            on: "#ecfdf5", //800
          },
        },
      },
      extend: {
        fontSize: {
          "8xl": "6rem",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
