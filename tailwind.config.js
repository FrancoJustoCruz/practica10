const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: {
          DEFAULT: 'hsl(26, 100%, 55%)', // Color naranja predeterminado
          pale: 'hsl(25, 100%, 94%)', // Naranja pálido
        },
        'very-dark-blue': 'hsl(220, 13%, 13%)', // Azul muy oscuro
        'dark-grayish-blue': 'hsl(219, 9%, 45%)', // Azul grisáceo oscuro
        'grayish-blue': 'hsl(220, 14%, 75%)', // Azul grisáceo
        'light-grayish-blue': 'hsl(223, 64%, 98%)', // Azul grisáceo claro
        white: 'hsl(0, 0%, 100%)', // Blanco
        black: 'rgba(0, 0, 0, 0.75)', // Negro con 75% de opacidad para el fondo del lightbox
      },
    },
  },
  plugins: [],
};