/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-cyan": "#00FFFF",
        "neon-magenta": "#FF00FF",
        "neon-cyan-rgb": "0, 255, 255",
        "neon-magenta-rgb": "255, 0, 255",
        // South African gold colors
        "sa-gold": {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
      },
      animation: {
        "gradient-fade": "gradient-fade 15s ease infinite",
        "spin-slow": "spin 8s linear infinite",
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        "gradient-fade": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
      },
    },
  },
  plugins: [],
};