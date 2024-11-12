import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: { fontFamily: { custom1: ["Roboto Slab","serif"] } },
    screens:{
      'sm':'500px',
      'md':'630px',
      'lg':'890px',
      'xl':'1140px',
      '2xl':'1390px',
      'iconResponce':'1230px'
    }
  },
  plugins: [],
} satisfies Config;
