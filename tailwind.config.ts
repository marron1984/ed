import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#15315B",
          light: "#1F4480",
          dark: "#0E2342",
        },
        teal: {
          DEFAULT: "#0E7C86",
          light: "#13A1AE",
        },
        gold: {
          DEFAULT: "#C8932A",
          light: "#E0B055",
        },
        mist: "#F4F8FA",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Hiragino Kaku Gothic ProN",
          "Hiragino Sans",
          "Noto Sans JP",
          "Meiryo",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(21, 49, 91, 0.18)",
        card: "0 6px 24px -10px rgba(21, 49, 91, 0.15)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
