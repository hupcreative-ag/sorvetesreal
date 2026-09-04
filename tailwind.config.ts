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
        "real-red": "#BD3C38",
        "real-gold": "#F1CA4C",
        "real-wine": "#682423",
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
