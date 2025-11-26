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
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
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
              foreground: "#f2f2f3",
            },
          },
        },
        light: {
          colors: {
            foreground: "#222831",
            background: "#f8f6f1",
            primary: {
              DEFAULT: "#305AC5",
              foreground: "#F8F6F1",
            },
          },
        },
      },
    }),
  ],
};
