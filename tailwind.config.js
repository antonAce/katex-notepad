const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      gray: colors.gray,
      neutral: {
        DEFAULT: "#36393e",
        focus: "#282b30",
        content: "#FFFFFF"
      },
      base: {
        100: "#FFFFFF",
        200: "#F2F2F2",
        300: "#E5E6E6",
        content: "#1F2937"
      }
    }
  },
  plugins: [],
}
