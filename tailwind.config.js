/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"]
      },
      colors: {
        coffee: {
            50: '#FDF8F6',
            100: '#F2E8E5',
            200: '#EADDD7',
            300: '#E0CEC7',
            400: '#D2BAA9',
            500: '#C4A68A',
            600: '#B58863',
            700: '#A66E40',
            800: '#8C5E3D',
            900: '#704F32',
        },
      }
  },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

