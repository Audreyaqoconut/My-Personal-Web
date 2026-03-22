/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sage green — literary, fresh, academic
        sage: {
          50:  '#f0f5f0',
          100: '#ddeadd',
          200: '#bdd3bc',
          300: '#9bbc9a',
          400: '#7aa579',
          500: '#5e925d',
          600: '#4d7a4e',
          700: '#3d623e',
          800: '#2e4a2f',
          900: '#1f3320',
        },
      },
    },
  },
  plugins: [],
}
