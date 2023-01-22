/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aside_black: '#1C1D22'
      }
    }
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [require('daisyui')]
}
