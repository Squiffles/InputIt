/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "flame": "#FF6E36",
                "palidFlame": "#D36135",
                "softBlack": "#02020B",
                "indigo": "#033F63",
                "ashGray": "#C6D8D3",
                "white": "#FDF0D5",
            },
            fontFamily: {
                "sans": ["Regular", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                "clamp-a": "clamp(5rem, 5vw + 0.5rem, 10rem)"
            },
            screens: {
                'xs': { 'max': '467px' },
                'sm': { 'min': '468px' },
                // used for results grid.
                'smd': { 'min': '650px', 'max': '767px'},
                'xs&sm': { 'max': '767px' },
                'md': { 'min': '768px' },
                'lg': { 'min': '1024px' },
                'xl': { 'min': '1280px' },
                '2xl': { 'min': '1536px' },
                // ...defaultTheme.screens
            },
            boxShadow: {
                'reg-black': '2px 4px 12px rgba(0, 0, 0, .08)',
                'foc-black': '2px 4px 16px rgba(0, 0, 0, .4)',
                'reg-white': '2px 4px 12px rgba(255, 255, 255, 0.08)',
                'foc-white': '2px 4px 16px rgba(255, 255, 255, 0.4)'
            }
        },
    },
    plugins: [],
};