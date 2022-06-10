const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'default': '0.5rem',
        'icons': '1.5rem',
      }
    },
    colors: {
      neutral: {
        DEFAULT: "#36393e",
        focus: "#282b30",
        content: "#ffffff"
      },
      base: {
        100: "#ffffff",
        200: "#f2f2f2",
        300: "#e5e6e6",
        400: "#94a3b8",
        500: "#64748b",
        600: "#40444b",
        700: "#2f3136",
        800: "#292b2f",
        900: "#202225",
        content: "#1F2937",
        "content-dark": "#FAFAFA"
      },
      red: colors.red
    }
  },
  plugins: [],
}
