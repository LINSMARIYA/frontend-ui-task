/** @type {import('tailwindcss').Config} */
const customThemes=require('./themes/customThemes')
export default {
  content: [
    
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: customThemes,
  },
  plugins: [],
}