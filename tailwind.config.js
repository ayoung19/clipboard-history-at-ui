const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        table: "700px",
        col1: "50px",
        col2: "650px",
      },
      height: {
        table: "400px",
      },
      transitionTimingFunction: {
        default: "ease",
      },
      boxShadow: {
        toast: "0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)",
      },
      colors: {
        primary: "#6190E8",
        success: "#13CE66",
        error: "#FF4949",
        warning: "#FFC82C",
        info: "#78A4FA",
        brand: {
          default: "#6190E8",
          light: "#78A4F4",
          dark: "#346FC2",
          text: "#3F536E",
          title: "#2C405A",
          50: "#ECF2FC",
          100: "#D0DEF8",
          200: "#B0C8F4",
          300: "#90B1EF",
          400: "#79A1EB",
          500: "#6190E8",
          600: "#5988E5",
          700: "#4F7DE2",
          800: "#4573DE",
          900: "#3361D8",
        },
        border: {
          gray: "#CCC",
          base: "#C5D9E8",
          split: "#d1e1ed",
          light: "#d6e4ef",
          lighter: "#e2ecf4",
          lightest: "#f3f7fa",
        },
        bg: {
          default: "#FFF",
          base: "#FAFBFC",
          light: "#ECF5FD",
          lighter: "#f6fafe",
          gray: "#f7f7f7",
          black: "#000",
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      green: {
        50: "#E3F9ED",
        100: "#B8F0D1",
        200: "#89E7B3",
        300: "#5ADD94",
        400: "#36D57D",
        500: "#13CE66",
        600: "#11C95E",
        700: "#0EC253",
        800: "#0BBC49",
        900: "#06B038",
      },
      red: {
        50: "#FFE9E9",
        100: "#FFC8C8",
        200: "#FFA4A4",
        300: "#FF8080",
        400: "#FF6464",
        500: "#FF4949",
        600: "#FF4242",
        700: "#FF3939",
        800: "#FF3131",
        900: "#FF2121",
      },
      yellow: {
        50: "#FFF8E6",
        100: "#FFEFC0",
        200: "#FFE496",
        300: "#FFD96B",
        400: "#FFD04C",
        500: "#FFC82C",
        600: "#FFC227",
        700: "#FFBB21",
        800: "#FFB41B",
        900: "#FFA710",
      },
      blue: {
        50: "#EFF4FE",
        100: "#D7E4FE",
        200: "#BCD2FD",
        300: "#A1BFFC",
        400: "#8CB2FB",
        500: "#78A4FA",
        600: "#709CF9",
        700: "#6592F9",
        800: "#5B89F8",
        900: "#4878F6",
      },
      gray: {
        50: "#F7F7F7",
        100: "#ECECEC",
        200: "#DFDFDF",
        300: "#D2D2D2",
        400: "#C9C9C9",
        500: "#BFBFBF",
        600: "#B9B9B9",
        700: "#B1B1B1",
        800: "#A9A9A9",
        900: "#9B9B9B",
      },
      black: {
        50: "#E6E8EB",
        100: "#C0C6CE",
        200: "#96A0AD",
        300: "#6B798C",
        400: "#4C5D73",
        500: "#2C405A",
        600: "#273A52",
        700: "#213248",
        800: "#1B2A3F",
        900: "#101C2E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
