/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#FF6D1F', // Orange
        secondary: '#F5E7C6', // Beige
        tertiary: '#FF6D1F', // Orange (Mapped to Primary)
        dark: '#222222', // Dark Grey
        light: '#FAF3E1', // Cream
      }
    },
  },
  plugins: [],
}
