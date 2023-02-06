/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: {
    jit: true, // uncomment this line to enable JIT mode
  },
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "1110px",
      lg: "1440px",
    },
    fontFamily: {
      mukta: ["var(--font-mukta)", ...fontFamily.sans],
      maven: ["var(--font-maven)", ...fontFamily.sans],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    colors: {
      grey: " #7D7D7D;",
      white: "#FFFFFF",
      lightBlue: "#18354B",
      darkPurple: "#0E0A30",
      lightGreen: "#00AC4D",
      greenBg:
        "linear-gradient(180deg, #119D5E 0%, rgba(37, 229, 142, 0) 100%);",
      lightGreyBg: "#F4F4F4",
      black: "#000000",
      blueBg:
        "linear-gradient(90deg, #3CFFFE 9.76%, #3CE6FE 23.42%, #3CCBFE 42.3%, #3CB7FE 61.35%, #3CABFE 80.53%, #3CA7FE 100%);",
      purpleBg:
        "linear-gradient(90deg, #B04BFF 0%, #BD4BF3 33.47%, #DF4BD2 95.21%, #E24BCF 100%);",
      purpleFadeBg:
        "linear-gradient(180deg, #B04BFF 0%, rgba(189, 75, 243, 0.4) 58.33%, rgba(223, 75, 210, 0) 95.21%, rgba(226, 75, 207, 0) 100%);",
      radial:
        "radial-gradient(46.73% 158.33% at 33% 43.77%, #1F185B 0%, rgba(14, 10, 48, 0) 100%), #0E0A30;",
    },
  },
  plugins: [],
};
