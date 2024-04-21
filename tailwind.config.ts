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
        'own-101': '1.01',
        'own-102': '1.02',
        'own-103': '1.03',
        'own-104': '1.04',
      },
    },
  },
  plugins: [],
};
export default config;
