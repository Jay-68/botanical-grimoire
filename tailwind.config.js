/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['EB Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Georgia', 'serif'],
      },
      colors: {
        parchment: {
          50: '#fdfaf4',
          100: '#f9f2e3',
          200: '#f2e4c4',
          300: '#e8d19e',
          400: '#dbb96c',
          500: '#c9a44a',
        },
        ink: {
          900: '#1a1208',
          800: '#2d2010',
          700: '#3d2e1a',
          600: '#4e3c24',
        },
        moss: {
          400: '#7a9b6e',
          500: '#5d7d52',
          600: '#4a6341',
          700: '#3a4f33',
          800: '#2b3c26',
        },
        umber: {
          400: '#a07850',
          500: '#7d5c37',
          600: '#5e4429',
        },
        crimson: {
          400: '#c45c5c',
          500: '#9e3d3d',
          600: '#7a2d2d',
        }
      },
      backgroundImage: {
        'parchment-texture': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"400\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"400\" height=\"400\" filter=\"url(%23noise)\" opacity=\"0.04\"/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
}
