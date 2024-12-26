/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F97316",
          dark: "#EA580C",
          light: "#FDBA74",
        },
      },
    },
  },
  plugins: [],
};
