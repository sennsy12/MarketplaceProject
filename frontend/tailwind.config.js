/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488', // Teal 600
        secondary: '#f8fafc',
        accent: '#0f172a',
      }
    },
  },
  plugins: [],
}

