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
          10: "#80334B",
        },
        green: {
          1:'#80334B',
        },
      },
      borderRadius: {
        DEFAULT: "16px",
        0: "0",
        4: "4px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
        40: "40px",
        round: "50%",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
