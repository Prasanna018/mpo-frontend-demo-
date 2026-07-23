/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070a1a',
          900: '#0b0f28',
          850: '#0e1336',
          800: '#141a45',
          700: '#1e2660',
        },
        mpo: {
          blue: '#2563eb',
          hoverBlue: '#1d4ed8',
          sky: '#38bdf8',
          lightSky: '#e0f2fe',
          cardBg: '#e4f1fc',
          navyText: '#101838',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
