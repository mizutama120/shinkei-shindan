/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#FDF6F0',
        'bg-pink': '#F9EDE8',
        'gold': '#C4A96B',
        'gold-light': '#E8D9B0',
        'pink-main': '#D4869A',
        'pink-soft': '#EAB8C2',
        'ink': '#3D2B2B',
        'ink-soft': '#8A7070',
        'off-white': '#FFFCF8',
        'type-a': '#C4786A',
        'type-b': '#7A9E8F',
        'type-c': '#9B7DB8',
        'type-d': '#C4A855',
      },
      fontFamily: {
        mincho: ['"Shippori Mincho"', 'serif'],
        gothic: ['"Zen Kaku Gothic New"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.6' },
          '33%': { transform: 'translateY(-12px) translateX(6px)', opacity: '1' },
          '66%': { transform: 'translateY(-6px) translateX(-4px)', opacity: '0.7' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gaugeGrow: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--gauge-value)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease forwards',
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-fast': 'float 6s ease-in-out infinite',
        'slide-left': 'slideLeft 0.3s ease forwards',
        'gauge-grow': 'gaugeGrow 1s ease forwards',
      },
    },
  },
  plugins: [],
}
