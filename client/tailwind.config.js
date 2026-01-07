export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
    },
    letterSpacing: {
      tightest: "-0.03em",
      tighter: "-0.02em",
    },
  },
},
  plugins: [],
}
