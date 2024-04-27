import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'own-auth': '20% 80%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'back': "url('/back.png')",
        'back2': "url('/back-2.png')",
        'back3': "url('/background.jpg')",
        'main': "url('/main.jpg')",
        'decks': "url('/decks.png')",
        'cards': "url('/cards.webp')",
      },
      colors: {
        'primary': '#FEFEFF',
        'secondary': '#EBD8B1',
        'dark-secondary': '#906E29',
        'tertiary': '#444299',
        'fourth': '#CCCFE1',
        'light-grey':'#C7C8D5'
      },
      fontFamily: {
        nunito: ["Nunito", 'sans-serif'],
      },
      boxShadow: {
        'own-1': '3px 6px 10px 0px rgba(0,0,0,0.34)',
        'own-2': '0px 0px 15px 1px rgba(0,0,0,0.91)',
      },
      scale: {
        'own-80': '0.80',
        'own-85': '0.85',
        'own-101': '1.01',
        'own-102': '1.02',
        'own-103': '1.03',
        'own-104': '1.04',
      },
      rotate:{
        'm-1': '179deg',
        'm-2': '178deg',
        'm-3': '177deg',
        'm-4': '176deg',
        'm-5': '175deg',
        'm-6': '174deg',
        'm-7': '173deg',
        'm-8': '172deg',
        'm-9': '171deg',
        'm-10': '170deg',
        'm-11': '169deg',
        'm-12': '168deg',
      },
      height:{
        'own-400': '400px',
        'own-600': '600px',
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
      width:{
        'own-450': '450px',
        'own-300': '300px',
        'own-250': '250px',
      },
    },
  },
  plugins: [],
};
export default config;
