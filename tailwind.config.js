/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ADEF',
          dark: '#0088BF',
          light: '#33BDEF',
        },
        accent: {
          DEFAULT: '#FF6B35',
          dark: '#E85A2E',
          light: '#FF8A5C',
        },
        navy: {
          DEFAULT: '#0A1931',
          light: '#1A2942',
          dark: '#050C18',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
