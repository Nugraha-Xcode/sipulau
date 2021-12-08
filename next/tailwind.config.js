const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      resize: "row-resize",
      disable: "not-allowed",
      crosshair: "crosshair",
    },
    extend: {
      fontFamily: {
        map: ["Poppins", "sans-serif"],
      },
      colors: {
        "main-white": "#FFFFFF",
        "main-blue": "#2A63B5",
        "soft-blue": "#88C2EC",
        "dark-blue": "#3C5373",
        "main-gray": "#747B85",
        "footer-blue": "#29538F",
        "hover-blue": "#1E4A8A",
        "black-2": "#575F6C",
        "blue-2": "#F0F6FF",
        "blue-3": "#D2E2FA",
        "gray-2": "#828282",
        "gray-3": "#4F4F4F",
        "gray-4": "#E4E5E7",
        "gray-5": "#C9CCD0",
        "gray-6": "#EFF0F1",
        "gray-7": "#AAAEB5",
        "main-black": "#151439",
        "main-green": "#41B06E",
        "main-orange": "#F2994A",
        "main-red": "#EA4545",
      },
      boxShadow: {
        "map-1": "0px 4px 10px 2px rgba(50, 50, 50, 0.1)",
        "map-2": "0px 4px 10px 2px rgba(50, 50, 50, 0.2)",
        "style-1": "1px 2px 8px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".smooth-scroll": {
          "overflow-y": "scroll",
          "scroll-behavior": "smooth",
          display: "block",
          height: "100vh",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
