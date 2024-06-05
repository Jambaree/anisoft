import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: "class",
  important: true,
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "675px",
      mds: "1000px",
      md: "1230px",
      lg: "1440px",
    },
    fontFamily: {
      mukta: ["var(--font-mukta)", ...fontFamily.sans],
      maven: ["var(--font-maven)", ...fontFamily.sans],
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },

    extend: {
      colors: {
        "red-500": "rgb(239 68 68)",
        "red-600": "rgb(220 38 38)",
        "red-700": "rgb(185 28 28)",
        "red-800": "rgb(153 27 27)",
        grey: " #7D7D7D",
        white: "#FFFFFF",
        lightBlue: "#18354B",
        darkPurple: "#0E0A30",
        lightGreen: "#00AC4D",
        greenBg:
          "linear-gradient(180deg, #119D5E 0%, rgba(37, 229, 142, 0) 100%);",
        lightGreyBg: "#F4F4F4",
        lightGreyBg2: "#F5F5F5",
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
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 1s ease-in-out",
        "fade-in-up-2": "fade-in-up 2s ease-in-out",
        "fade-in-down": "fade-in-down 1s ease-in-out",
        "fade-in": "fade-in 3s ease-in-out",
        "fade-in-slow": "fade-in 3s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
