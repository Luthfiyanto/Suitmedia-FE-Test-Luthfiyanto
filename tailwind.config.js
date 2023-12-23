/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      myOrange: {
        600: "#F25C05",
        400: "#F28241",
        200: "#F29966",
      },
      myGrey: {
        600: "#595959",
        200: "#B6BBC4",
      },
      white: "#ffffff",
    },
  },
  plugins: [],
};
