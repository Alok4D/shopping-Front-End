/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.js", 
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulseScale 2s ease-in-out infinite",
      },
      keyframes: {
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), 
    require("daisyui"),          
  ],
};
