/** @type {import('tailwindcss').Config} */
const {colors} = require("./src/theme/colors");

module.exports = {
    content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: colors.black,
            },
            fontFamily: {
                regular: 'Inter_400Regular',
                semibold: 'Inter_600SemiBold',
                bold: 'Inter_700Bold',
                extrabold: 'Inter_800ExtraBold',
            },
        },
    },
    plugins: [],
};
