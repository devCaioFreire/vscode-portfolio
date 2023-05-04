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
      layout: "2rem 48.5rem 1fr",
    },
    gridTemplateColumns: {
      editor: "3.5rem 16rem 1fr",
    },
    screens: {
      mobile: "320px",
      // => @media (min-width: 430px) { ... }

      mobileLarge: "450px",
      // => @media (min-width: 430px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
