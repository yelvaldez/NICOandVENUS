/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richblack: '#020220',
        oldRose: '#c67b76',
        spacecadet: '#282841',
      }
    },
  },
  plugins: [],
}
