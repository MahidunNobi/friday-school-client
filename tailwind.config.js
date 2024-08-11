/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#336699",
        "secoundry": "#99CCFF",
        "accent": "#003366"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: "selector"
}

