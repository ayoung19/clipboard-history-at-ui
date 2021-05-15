module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        checkbox: "16px",
      },
      height: {
        checkbox: "16px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
