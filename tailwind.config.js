module.exports = {
  darkMode: 'media', // bool or 'media' (system setting) or 'class' (toggle manually)
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        fancy: ["Paytone One", "sans-serif"],
      },
      colors: {
        theme: {
          primary: "#e1364a",
          primaryVariant: "#b90e22",
          // secondary: "#",
          // secondaryVariant: "#",
          background: "#151613",
          surface: "#2b2b27",
          // error: "",
          onPrimary: "#f5f5f5",
          // onSecondary: "#",
          onBackground: "#f5f5f5",
          onSurface: "#f5f5f5",
          // onError: ""
        }
      }
    },
  },
  plugins: [],
}
