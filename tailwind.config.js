/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transformOrigin: {
        'bottom-right': 'bottom right',
      },
    },
  },
  plugins: [],
}