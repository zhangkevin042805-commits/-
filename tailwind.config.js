/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        arcane: {
          bg: '#0b1020', panel: '#171a2e', accent: '#d4af37', ink: '#e8ddc5', ok: '#3fbf7f', bad: '#d35656'
        }
      }
    }
  },
  plugins: []
};
