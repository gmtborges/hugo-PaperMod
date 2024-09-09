/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../content/**/*.{html,md}",
    "../../layouts/**/*.html",
    "./layouts/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
