// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Playfair Display", "serif"], // keeps your font override
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};



