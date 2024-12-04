/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        FONT1: ['Font1', 'sans-serif'],
        FONT2: ['Font2', 'sans-serif'],
        caveatBold: ['caveatBold', 'caveatBold'],
        caveatMedium: ['caveatMedium', 'caveatMedium'],
        caveatRegular: ['caveatRegular', 'caveatRegular'],
        caveatSemiBold: ['caveatSemiBold', 'caveatSemiBold'],
        cursiveBold: ['cursiveBold', 'cursiveBold'],
        cursiveMedium: ['cursiveMedium', 'cursiveMedium'],
        cursiveRegular: ['cursiveRegular', 'cursiveRegular'],
        cursiveSemiBold: ['cursiveSemiBold', 'cursiveSemiBold'],
        poppinsBold: ['poppinsBold', 'poppinsBold'],
        poppinsLight: ['poppinsLight', 'poppinsLight'],
        poppinsMedium: ['poppinsMedium', 'poppinsMedium'],
        poppinsRegular: ['poppinsRegular', 'poppinsRegular'],
        poppinsSemiBold: ['poppinsSemiBold', 'poppinsSemiBold'],
      },
    },
  },
  plugins: [],
}