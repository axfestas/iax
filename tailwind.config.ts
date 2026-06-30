import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)'
      },
      colors: {
        brand: {
          50: '#f7f8ff',
          100: '#eef0ff',
          200: '#d4d8ff',
          300: '#a5b0ff',
          400: '#7685ff',
          500: '#5460f4',
          600: '#3c43c7',
          700: '#32379d',
          800: '#2a316f',
          900: '#272e59'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
