/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#4B0082',
        },
        green: {
          500: '#00FF00',
        },
        gray: {
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};