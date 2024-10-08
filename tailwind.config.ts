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
        "primary-default": "#4426D9",
        "primary-50": "#ECE9FB",
        secondary: "#5C6970",
      },
      fontFamily: {
        mono: [
          "var(--font-roboto-flex)",
          {
            fontVariationSettings: "'wdth' 150",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
