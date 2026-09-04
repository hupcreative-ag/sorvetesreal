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
        "real-red": "#C02D2F",
        "real-gold": "#EEC234",
        "real-wine": "#541517",
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
