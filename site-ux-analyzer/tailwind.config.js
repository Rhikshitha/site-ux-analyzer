/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#A7C7E7',
        'pastel-green': '#B5EAD7',
        'pastel-yellow': '#FFF8B8',
        'pastel-purple': '#DAB6FC',
      }
    }
  },
  plugins: [],
}
