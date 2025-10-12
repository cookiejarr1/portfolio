// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: {
          DEFAULT: "hsl(var(--border))",
        },
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            foreground: "#f2f2f3",
            background: "#222831",
            primary: {
              DEFAULT: "#192f67",
              foreground: "#0E0C07",
            },
            secondary: {
              DEFAULT: "#10333C",
              foreground: "#0E0C07",
            },
            focus: "#77949c",
            content1: "#F3F1E7",
            content2: "#0E0C07",
          },
        },
        light: {
          colors: {
            foreground: "#0c0c0d",
            background: '#f8f6f1',
            primary: {
              DEFAULT: "#98aee6",
              foreground: "#F8F6F1",
            },
            secondary: {
              DEFAULT: "#e2ddee",
              foreground: "#F8F6F1",
            },
            focus: "#638088",
            content1: "#F8F6F1",
            content2: "#18160C",
          },
        },
      },
    }),],
}