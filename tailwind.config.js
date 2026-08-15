/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral': '#FF7A8A',
        'coral-light': '#FFEEF0',
        'mint': '#7FDBC0',
        'mint-light': '#E8F8F4',
        'yellow': '#FFD966',
        'yellow-light': '#FFF8DC',
        'ivory': '#FFFFF7',
        'light-gray': '#F2F2F2',
        'charcoal': '#333333',
        'ink': '#333333',
        'ink-soft': '#666666',
        'off-white': '#FFFFF7',
        /* 後方互換 */
        'bg-base': '#FFFFFF',
        'pink-main': '#FF7A8A',
        'type-a': '#FF7A8A',
        'type-b': '#7FDBC0',
        'type-c': '#FFD966',
        'type-d': '#7FDBC0',
      },
      fontFamily: {
        main: ['"Noto Sans JP"', 'sans-serif'],
        mincho: ['"Noto Sans JP"', 'sans-serif'],
        gothic: ['"Noto Sans JP"', 'sans-serif'],
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
