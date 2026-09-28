import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        ink: "#0d0e0e",
        cream: "#ece6d6",
        ember: "#ef5a2c",
        muted: "#8a8676",
        olive: "#9a9a62",
        rule: "#2a2a28",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;