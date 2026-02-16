/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#08a698',
        light: '#f4f4f6',
        dark: '#111',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'floatUpDown 3s ease-in-out infinite',
      },
      keyframes: {
        floatUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
