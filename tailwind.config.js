/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0f172a", // navy
          accent: "#1e40af", // blue
          muted: "#64748b", // grey-blue
        },
      },
    },
  },
  plugins: [],
};
