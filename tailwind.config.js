/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradients: {
        'blue-purple': ['to right', '#4A00E0', '#8E2DE2'],
        'red-orange': ['to right', '#FF416C', '#FF4B2B'],
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

