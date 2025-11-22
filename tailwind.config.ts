import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Baloo 2'", "cursive"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      },
      colors: {
        primary: "#4F46E5",
        secondary: "#F97316",
        accent: "#14B8A6"
      }
    }
  },
  plugins: []
};

export default config;
