/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        elengant: ["'Playfair Display'", "serif"],
      },
      colors: {
        secondary: "#f5741c",
        dark8g: "#131424",
      },
      backgroundImage: {
        "gradient-cover":
        "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      }
    },
  },
  plugins: [],
};
