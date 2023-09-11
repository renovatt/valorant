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
          500: '#0c2d39',
          DEFAULT: '#151929',
        },
      },
    },
    fontFamily: {
      valorant: ['var(--font-valorant)'],
    },
  },
  plugins: [],
}
