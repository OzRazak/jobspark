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