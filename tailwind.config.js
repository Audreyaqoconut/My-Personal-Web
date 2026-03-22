/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50:  '#eff5fe',
          100: '#dce8fd',
          200: '#b9d1fb',
          300: '#96baf6',
          400: '#7aa4f1',
          500: '#7aa4f1',
          600: '#6495ED',
          700: '#4d7fd9',
          800: '#3a69c5',
          900: '#2a4e8a',
        },
      },
    },
  },
  plugins: [],
}
