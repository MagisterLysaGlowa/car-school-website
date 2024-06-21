/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        kalam: ["Kalam", "cursive"],
        kanit: ["Kanit", "sans-serif"],
      },

      colors: {
        first: "#FFFFFF",
        second: "#2CA3FA",
        hero: "#3E79EC",
        mission: "#2979F0",
        title: "#9D9D9D",
      },
    },
  },
  plugins: [],
};
