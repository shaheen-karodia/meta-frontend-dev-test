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
        primary: "#141C24",
      },
      fontFamily: {
        mono: [
          "var(--font-roboto-flex)",
          {
            fontVariationSettings: "'wght' 800, 'wdth' 150",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
