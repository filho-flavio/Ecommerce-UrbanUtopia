/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: "aliceblue",
        c8815f: "#c8815f",
        111: "#111",
        e9ecee: "#e9ecee",
        e5e7eb: "#e5e7eb",
        f8f4f1: "#f8f4f1",
      },
      width: {
        11: "11.25rem",
        450: "28rem",
        "50r": "50rem",
        "16r": "16rem",
        "15/15": "15%",
      },
      height: {
        "16r": "22rem",
        "10/10": "10%",
      },
      scale: {
        120: "1.2",
      },
      padding: {
        "7/0/0/8.5": "7rem 0 0 8.5rem",
        "1rem": "1rem",
        "14px": "14px",
        "14%": "14%",
      },
      lineHeight: {
        40: "4rem",
      },
    },
  },
  plugins: [],
};
