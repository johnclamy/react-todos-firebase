const theme = {
  color: {
    // Base palette colours
    black: "#000",
    darkGrey: "#333",
    grey: "#ccc",
    lightGrey: "#ebebeb",
    offWhite: "#f5f5f5",
    white: "#fff",
    blue1: "#3498db",
    blue2: "#2980b9",
    red1: "#e74c3c",
    red2: "#c0392b",
    yellow1: "#f1c40f",
    yellow2: "#f39c12",
    green1: "#2ecc71",
    green2: "#27ae60",
    orange1: "#e67e22",
    orange2: "#d35400",
    aqua1: "#1abc9c",
    aqua2: "#16a085",
    purple1: "#9b59b6",
    purple2: "#8e44ad",
    navy1: "#34495e",
    navy2: "#2c3e50",

    // App colours
    appBlue: "#2B2D42",
    appGrey: "#8D99AE",
    appLight: "#EDF2F4",
    appRed: "#EF233C",
    appCrimson: "#D90429",
  },

  // Backgrounds
  bg: {
    primary: this.color.white,
    secondary: this.color.appLight,
    third: this.color.appGrey,
    inverse: this.color.appBlue,
  },

  // Text
  text: {
    primary: this.color.appBlue,
    secondary: this.color.darkGrey,
    third: this.color.appGrey,
    loud: this.color.appCrimson,
  },

  // Links
  link: {
    primary: this.color.grey,
    primaryHover: this.color.appBlue,
  },

  // Borders
  border: {
    color: this.color.grey,
    size: "1px",
    type: "solid",
    focus: this.color.grey,
    colorOther: this.color.appCrimson,
  },

  // Typography
  font: {
    familyText: `'Poppins', sans-serif;`,
    familyHeading: `'Lobster', cursive;`,
    baseSize: "14px",
    baseLineHeight: "1.6",
  },

  // Layout
  layout: {
    margin: "1rem",
    padding: "1rem",
  },

  // Media queries
  mediaQuery: {
    xs: `only screen and (max-width: 25em)`,
    sm: `only screen and (max-width: 37.5em)`,
    md: `only screen and (max-width: 56em)`,
    lg: `only screen and (max-width: 80em)`,
    xl: `only screen and (max-width: 90em)`,
  },
};

export default theme