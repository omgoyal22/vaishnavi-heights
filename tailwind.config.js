/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#C5A04D',
          maroon: '#7D3C3C',
          wine: '#8B2323',
        },
      },
    },
  },
  plugins: [],
};
