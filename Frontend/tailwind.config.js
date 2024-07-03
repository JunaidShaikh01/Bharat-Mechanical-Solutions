/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        josefine: ["Josefin Slab", "serif"],
      },
    },
  },
  plugins: [],
};
