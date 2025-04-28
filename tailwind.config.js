import {lato} from 'next/font/google'
/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: {
          DEFAULT: "#000000",
        },
        white: {
          DEFAULT: "#ffffff",
          10: "rgba(250, 252, 255, 1)",
      
        },
        gray: {
          DEFAULT: "#f2f2f2",
          0: "#FAFAFA",
          1: "#F8F8F8",
          2: "#EFEFF4",
          3: "#0000001A",
          4: "#00000029",
          5: "#B2B2B2",
          6: "#707070",
          7: "#676069",
        },
        blue: {
          DEFAULT: "#25304A",
          1: "#182849",
        },
        red: {
          0:"#FF0000",
          10: "#80334B",
        },
        green: {
          0:'#409826',
          1:'#80334B',
        },
      },
      sc: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
