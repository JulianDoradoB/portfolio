import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#282626",
        "custom-white":"#F4F0E3",
        "custom-rojo":"#A53636",
        "custom-parrafos":"#F1EAEA",
        "custom-imagen":"#3D3B3B",
        'alabaster': {
        '50': '#fbfcfe',
        '100': '#e6ecf8',
        '200': '#c7d7f0',
        '300': '#96b5e3',
        '400': '#5e8fd2',
        '500': '#3a71bd',
        '600': '#2957a0',
        '700': '#234781',
        '800': '#203d6c',
        '900': '#20365a',
        '950': '#15223c',
        'red-devil': {
        '50': '#fff1f1',
        '100': '#ffdfdf',
        '200': '#ffc4c4',
        '300': '#ff9a9a',
        '400': '#ff6060',
        '500': '#ff2f2f',
        '600': '#f30f0f',
        '700': '#cc0909',
        '800': '#a90b0b',
        '900': '#841010',
        '950': '#4c0303',
    },
    
    },
    
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

