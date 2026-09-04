import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "real-red": "#C4242D",
        "real-gold": "#F8C427",
        "real-wine": "#59171C",
        "real-white": "#FFFFFF",
      },
      fontFamily: {
        yanone: ["var(--font-yanone)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
