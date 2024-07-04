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
      filter: {
        white: "brightness(0) invert(1)",
        red: "sepia(1) saturate(10000%) hue-rotate(0deg) brightness(0.9)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".filter-white": {
          filter: "brightness(0) invert(1)",
        },
        ".filter-red": {
          filter: "sepia(1) saturate(10000%) hue-rotate(0deg) brightness(0.9)",
        },
        // Add more custom filter classes as needed
      });
    },
  ],
};
