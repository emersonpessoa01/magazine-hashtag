/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        "grid": "repeat(16, minmax(20px, auto))",
      },
    },
  },
  plugins: [],
};
