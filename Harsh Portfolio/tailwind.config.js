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
        pacifico: ['Pacifico', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        primary: '#171717', // Neutral Black
        secondary: '#404040', // Neutral Dark Gray
        tertiary: '#525252', // Neutral Gray
        dark: '#000000', // Pure Black
        light: '#FFFFFF', // Pure White
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      }
    },
  },
  plugins: [],
}
