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
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        brush: ['"Permanent Marker"', 'cursive'],
      },
      colors: {
        primary: '#F97316',
        secondary: '#FB923C',
        accent: '#FCD34D',
        dark: '#09090B',
        surface: '#111113',
        'surface-2': '#18181B',
        light: '#FFFFFF',
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
      },
      backgroundImage: {
        'orange-grad': 'linear-gradient(120deg, #F97316 0%, #FB923C 55%, #FCD34D 100%)',
      },
      animation: {
        'blink': 'blink 1.1s steps(1) infinite',
        'bob': 'bob 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
        bob: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(6px)' } },
        pulseGlow: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.4' } },
      },
    },
  },
  plugins: [],
}
