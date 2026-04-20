/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669',
          dark: '#047857',
          light: '#10B981',
        },
        secondary: '#064E3B',
        accent: {
          DEFAULT: '#C5A55A',
          dark: '#A68B3C',
        },
        earth: '#B45309',
        ivory: {
          DEFAULT: '#FAFDF7',
          dark: '#F0F7F3',
        },
        cream: '#F5F0E8',
        brown: {
          DEFAULT: '#3D2B1F',
          light: '#6B5B50',
        },
        white: '#FFFFFF',
        gray: '#94A3B8',
        border: '#E2E8F0',
        destructive: '#DC2626',
      },
      fontFamily: {
        heading: ['Lexend', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideUp: 'slideUp 0.6s ease-out forwards',
        slideInLeft: 'slideInLeft 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-out forwards',
        bounceSlow: 'bounceSlow 2s ease-in-out infinite',
        scaleIn: 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
