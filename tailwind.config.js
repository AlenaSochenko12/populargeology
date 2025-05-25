// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // путь к твоим компонентам
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#141210",
        orangecustom: "#db6735",
        orangehover: "#E55C22",
        whitecustom: "#FFF8F2",
        greytext: "#d0d0d0",
        greyborder: "#6b6b6b",
        greylight: "#a4a4a4",
      },
      fontFamily: {
        golos: ["'Golos Text'", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        96: "24rem",  // 384px - на всякий (для больших паддингов)
        77: "19.25rem", // 308px, для line-height и padding (примерно)
        40: "10rem",  // 160px для больших отступов
        30: "7.5rem",  // 120px
        28: "7rem",
        24: "6rem",
        20: "5rem",
        18: "4.5rem",
        16: "4rem",
        10: "2.5rem",
      },
      lineHeight: {
        77: "4.8125rem",  // 77px
        29: "1.8125rem",
        24: "1.5rem",
        20: "1.25rem",
        19: "1.1875rem",
      },
      fontSize: {
        "64px": ["64px", { lineHeight: "77px" }],
        "30px": "30px",
        "24px": "24px",
        "20px": "20px",
        "16px": "16px",
        "12px": "12px",
      },
      borderRadius: {
        "36px": "36px",
        "40px": "40px",
        "20px": "20px",
        "10px": "10px",
      },
    },
  },
  plugins: [],
};
