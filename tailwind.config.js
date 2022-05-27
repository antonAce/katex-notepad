const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      slate: colors.slate,
      neutral: {
        DEFAULT: "#3D4451",
        focus: "#303640",
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
