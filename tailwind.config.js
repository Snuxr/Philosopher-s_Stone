/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'cover':'98%',
        'prodImg': '224px'
      },
      height: {
        'cover':'98%',
        'prodImg': '224px'
      },
      boxShadow: {
        'full': '1px 1px 30px 1px'
      }
    },
  },
  plugins: [],
}

