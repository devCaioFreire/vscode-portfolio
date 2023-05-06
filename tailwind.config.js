/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      app: "linear-gradient(115.73deg, #9B64F4 1.06%, #98F1FE 98.56%)",
    },
    colors: {
      vscodeBg: "#21202E",
      vscodeBgSidebar: "#1C1B22",

      macOsClose: "#FF605C",
      macOsMinimise: "#FFBD44",
      macOsMaximise: "#00CA4E",

      textGray: "#B3B3B3",
      textWhite: "#E1E1E6",
      textActive: "#60FDC5",
      textPurple: "#9266D2",
    },
    boxShadow: {
      custom: "0px 5px 10px 5px rgba(0,0,0,0.5)",
    },
    gridTemplateRows: {
      default: "2rem 48.5rem 1fr",
      laptop: "2rem 42rem 1fr",
      tablet: "2rem 36rem 1fr",
      mobile: "2rem 36rem 1fr",
    },
    gridTemplateColumns: {
      default: "3.5rem 16rem 1fr",
      projects: "25rem 25rem 3fr",
      laptop: "3.5rem 16rem 1fr",
      tablet: "3.5rem 16rem 1fr",
      mobileLarge: "0rem 10rem 1fr",
      mobile: "-1rem 0rem 1fr",
    },
    screens: {
      mobile: "320px",
      // => @media (min-width: 430px) { ... }

      mobileLarge: "688px",
      // => @media (min-width: 688px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      tablet: "1280px",
      // => @media (min-width: 1280px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }

      default: "1480px",
      // => @media (min-width: 1480px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
