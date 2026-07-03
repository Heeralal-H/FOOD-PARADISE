/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf6e3',
          100: '#faeab8',
          200: '#f6dc8a',
          300: '#f2cf5c',
          400: '#eebf3d',
          500: '#e2ac18',
          600: '#c99410',
          700: '#a97e0c',
          800: '#866407',
          900: '#6a4f05'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.18)',
        glow: '0 0 0 1px rgba(226, 172, 24, 0.25), 0 18px 60px rgba(226, 172, 24, 0.12)'
      }
    }
  },
  plugins: []
};

