/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImgTrumpet: "url('/assets/bgTrumpet.jpg')",
      },
    },
    colors: {
      primary: "#282a3e",
      accent: "#d3a273",
      offWhite: "#f2f2f2",
    },
  },
  plugins: [],
};
