import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B2341",
          ink: "#102A48",
          sky: "#3B82F6",
          cyan: "#22C3D6",
          mist: "#E7F3FF",
          line: "#D6E4F5",
        },
      },
      boxShadow: {
        soft: "0 18px 45px -28px rgba(11, 35, 65, 0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.18) 1px, transparent 0)",
      },
      fontFamily: {
        sans: [
          "\"Noto Sans JP\"",
          "\"Hiragino Sans\"",
          "\"Yu Gothic\"",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
