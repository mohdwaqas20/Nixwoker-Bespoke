/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#111111',
        'primary-white': '#FFFFFF',
        'leather-brown': '#8B6F47',
        'dark-tan': '#6B5B45',
        'antique-gold': '#9D8659',
        'deep-brown': '#3D2817',
        'cream': '#F5F1E8'
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },

      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
        'widest': '0.15em'
      }
    }
  },
  plugins: []
}