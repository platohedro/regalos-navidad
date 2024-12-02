/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif'],
      },
      // Configuración personalizada para las tarjetas del contador
      colors: {
        'counter-primary': '#8fe8e0',
        'segundo-color': '#eb7575',
        'tercer-color': '#db3434',
        'cuarto-color': '#db0e0e',
        

      },
      boxShadow: {
        'counter': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}