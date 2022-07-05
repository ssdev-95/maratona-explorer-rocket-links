/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        green: {
          33: "rgb(123,255,123)",
          glass: "rgba(123,255,123,0.33)",
        },
        darkblue: {
          glass: "rgba(80,90,190,0.33)",
          900: "#03000D",
        },
        white: "#F0F2F5",
      },
      backgroundImage: {
        grad: "linear-gradient(45deg, white 50%, transparent 90%)",
      },
      animation: {
        spin: "spinner 2s infinite cubic-bezier(0.7,0.7,0.7,0.7)",
      },
      keyframes: {
        spinner: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(90deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "75%": {
            transform: "rotate(270deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
}
