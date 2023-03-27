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
        midGray: '#1f1f1f',
      },
      backgroundImage: {
        papyrus: "url('/papyrus-dark.webp')",
        contact: "url('/ContactBG.png')",
        contactSmall: "url('/ContactBGsmall.png')",
      },
    },
  },
  plugins: [],
};
