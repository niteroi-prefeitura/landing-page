/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secundary: "#b4b4b4",

        highlight: {
          cyan: "#00d2f0",
        },

        background: {
          navy: "#001a2d",
          navyAccent: "#004064",
          button: "#002b4a",
          buttonHover: "#02365bff",
          gray: "#9f9898",
          progress: "#145e94",
          landing: "#08051A",
          landingThemes: "rgba(255, 255, 255, 0.05)",
          landingButton: "rgba(255, 255, 255, 0.1)",
          landingButtonHover: "rgba(255, 255, 255, 0.3)",
        },

      },
      fontFamily: {
        primary: ['"IBM Plex Sans"', "sans-serif"],
        secondary: ['"Oxygen"', "sans-serif"],
        alt: ['"Orbitron"', "sans-serif"],
      },
    },
  },
  plugins: [],
  
};
