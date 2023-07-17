/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
   "./index.html",	
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
    },
    extend: {
      colors: {
        // Custom color definitions
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'imdb_red': '#ff0000',
      },
      fontFamily: { 
        sans: ['Inter var', 'Arial', 'sans-serif'], 
        serif: ['Georgia', 'serif'], mono: ['Menlo', 'Monaco', 'monospace']
      }
    },
  },
  plugins: [],
})