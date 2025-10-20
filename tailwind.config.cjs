/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secundary: "#b4b4b4",

        bus: {
          normal: {
            DEFAULT: "#336a16",
            accent: "#559f06",
          },
          alert: {
            DEFAULT: "rgba(229, 160, 0, 0.8)",
            accent: "#ffaa00",
          },
          jammed: {
            DEFAULT: "#b4631b",
            accent: "#ff7700",
          },
          alert_jammed: {
            DEFAULT: "#b4631b",
            accent: "#ff7700",
          },
        },

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

        camera: {
          DEFAULT: "#8583E3",
          accent: "#A29BFE",
        },
      },
      fontFamily: {
        primary: ['"IBM Plex Sans"', "sans-serif"],
        secondary: ['"Oxygen"', "sans-serif"],
        alt: ['"Orbitron"', "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".reveal": {
          opacity: "0",
          transform: "translateY(40px)",
          filter: "blur(8px)",
          transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        },
        ".show": {
          opacity: "1",
          transform: "translateY(0)",
          filter: "blur(0)",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};