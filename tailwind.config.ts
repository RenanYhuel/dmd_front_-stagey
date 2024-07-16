/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 6px 50px 0px #00000014',
        'message': '0px 4px 6px 0px #00000014',
        'popup': '0px 6px 50px 0px #00000014',


      },

    },
  },
  plugins: [],
}

