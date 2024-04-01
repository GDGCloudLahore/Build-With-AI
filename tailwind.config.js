/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
// const { colors: defaultColors } = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");

export default ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "1024px",
      },
      colors: {
        ...colors,
        bglight: "#ffffff",
        bgdark: "#202124",
        gdggreen: {
          100: "#ccf1dc",
          200: "#99e3b9",
          300: "#66d597",
          400: "#33c774",
          500: "#00b951",
          600: "#009441",
          700: "#006f31",
          800: "#004a20",
          900: "#002510",
        },
        gdgred: {
          100: "#ffd0d6",
          200: "#ffa1ad",
          300: "#ff7384",
          400: "#ff445b",
          500: "#ff1532",
          600: "#cc1128",
          700: "#990d1e",
          800: "#660814",
          900: "#33040a",
        },
        gdgblue: {
          100: "#d9e8ff",
          200: "#b3d2ff",
          300: "#8ebbff",
          400: "#68a5ff",
          500: "#428eff",
          600: "#3572cc",
          700: "#285599",
          800: "#1a3966",
          900: "#0d1c33",
        },

        gdgyellow: {
          100: "#fff3cc",
          200: "#ffe799",
          300: "#ffdc66",
          400: "#ffd033",
          500: "#ffc400",
          600: "#cc9d00",
          700: "#997600",
          800: "#664e00",
          900: "#332700",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
});
