/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["Public Sans", "sans-serif"],
    },
    extend: {
      colors: {
        // Beige
        "beige-500": "#98908B",
        "beige-100": "#F8F4F0",
        // Grey
        "grey-900": "#201f24",
        "grey-500": "#696868",
        "grey-300": "#B3B3B3",
        "grey-100": "#F2F2F2",

        // Secondary colors
        "secondary-green": "#277C78",
        "secondary-yellow": "#F2CDAC",
        "secondary-red": "#C94736",
        "secondary-cyan": "#82C9D7",
        "secondary-navy": "#626070",
        "secondary-purple": "#826CB0",

        // Other colors
        purple: "#AF81BA",
        turquoise: "#597C7C",
        brown: "#93674F",
        magenta: "#934F6F",
        blue: "#3F82B2",
        "navy-grey": "#97A0AC",
        "army-green": "#7F9161",
        gold: "#CAB361",
        orange: "#BE6C49",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
