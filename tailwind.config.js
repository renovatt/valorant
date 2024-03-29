/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          900: '#1f2333',
          800: '#818aa5',
          700: '#ff3e48',
          600: '#0c1d2c',
          650: '#0f1923',
          500: '#0c2d39',
          550: '#1b2a3d',
          400: '#14212e',
          450: '#50575e',
          DEFAULT: '#151929',
        },
        secondary: {
          450: '#1c1d1a',
          DEFAULT: '#272827',
        },
      },
    },
    fontFamily: {
      valorant: ['var(--font-valorant)'],
    },
    keyframes: {
      fade: {
        from: {
          opacity: '0',
          transform: 'translateY(-20px)',
        },
        to: {
          opacity: '1',
          transform: 'translateY(0px)',
        },
      },
      fadeRight: {
        from: {
          opacity: '0',
          transform: 'translateX(-20px)',
        },
        to: {
          opacity: '1',
          transform: 'translateX(0px)',
        },
      },
      pulse: {
        '0%, 100%': {
          opacity: '1',
        },
        '50%': {
          opacity: '.5',
        },
      },
    },
    animation: {
      fade: 'fade .2s forwards',
      fadeRight: 'fadeRight .6s forwards',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
  },
  plugins: [],
}
