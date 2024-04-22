import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'back': "url('/back.png')",
        'back2': "url('/back-2.png')",
      },
      colors: {
        'primary': '#FEFEFF',
        'secondary': '#FED99B',
        'tertiary': '#444299',
        'fourth': '#CCCFE1',
        'light-grey':'#C7C8D5'
      },
      fontFamily: {
        nunito: ["Nunito", 'sans-serif'],
      },
      boxShadow: {
        'own-1': '3px 6px 10px 0px rgba(0,0,0,0.34)',
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
        'own-600': '600px',
      },
      width:{
        'own-450': '450px',
        'own-300': '300px',
      },
    },
  },
  plugins: [],
};
export default config;
