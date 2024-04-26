/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      textColor: {
        main: "#A3B3BC",
        primary: "#ca8a04",
        secondary: "#5b21b6",
      },
      backgroundColor: {
        main: "#ca8a04",
        primary: "rgb(3 7 18 / <alpha-value>)",
        secondary: "#5b21b6",
      },
      borderColor: {
        main: "#A3B3BC",
        primary: "#ca8a04",
        secondary: "#5b21b6",
      },
    },
  },
  plugins: [],
};
