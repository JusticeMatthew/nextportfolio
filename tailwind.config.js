/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#15db95',
      },
      backgroundImage: {
        papyrus: "url('/papyrus-dark.webp')",
      },
    },
  },
  plugins: [],
};
