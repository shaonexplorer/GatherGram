/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('./src/assets/bg.jpeg')",
        img01: "url('./src/assets/img01.jpeg')",
        img02: "url('./src/assets/img02.jpeg')",
        img03: "url('./src/assets/img03.jpeg')",
        img04: "url('./src/assets/img04.jpeg')",
        feature01: "url('./src/assets/Features/feature01.jpeg')",
        feature02: "url('./src/assets/Features/feature02.jpeg')",
        feature03: "url('./src/assets/Features/feature03.jpeg')",
        feature04: "url('./src/assets/Features/feature04.jpeg')",
        feature05: "url('./src/assets/Features/feature05.jpeg')",
        feature06: "url('./src/assets/Features/feature06.jpeg')",
        feature07: "url('./src/assets/Features/feature07.jpeg')",
        banner01: "url('./src/assets/Banner01/bg.jpeg')",
        sw01: "url('./src/assets/swiper/01.jpeg')",
      },
      fontFamily: { mauline: "mauline", maiandra: "maiandra", inter: "Inter" },
    },
  },
  plugins: [],
};
