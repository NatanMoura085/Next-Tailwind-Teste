/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue-dark": "073B4C",
      },
      colors: {
        "button-color": "EF476F",
      },
    },
  },
  variants: {
    extends: {
      backgroundColor: ["hover"],
    },
  },

  plugins: [],
};
