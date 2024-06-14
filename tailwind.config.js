/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: { 
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        hind:["Hind", 'sans-serif'],
      },
      fontWeight: {
         smnormal:200,
         snormal:300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
    screens: {
      'sm': '200px',
      'md': '740px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
    

   
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

