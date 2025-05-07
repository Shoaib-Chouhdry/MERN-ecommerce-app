/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // "./index.html", "./src/**/*.{ts,tsx,js,jsx}"
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
    
    ],
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0, transform: "translateY(10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          zoomRight: {
            "0%": { transform: "scale(1) translateX(0px)" },
            "100%": { transform: "scale(1.1) translateX(20px)" },
          },
          fadeInUp: {
            "0%": { opacity: 0, transform: "translateY(50px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        },
        animation: {
          fadeIn: "fadeIn 0.8s ease-in-out",
          zoomRight: "zoomRight 3s ease-in-out infinite",
          fadeInUp: "fadeInUp 0.8s ease-out",
        },

      },
    },
    plugins: [],
  }
  