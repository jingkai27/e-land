/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#DDD8D1',
        sage: '#5F6A54',
        dusty: '#D5C5C8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        caslon: ['"Caslon Pro"', 'serif'],
        annabel: ['Annabel', 'cursive'],
        aesthet: ['"Aesthet Nova"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};