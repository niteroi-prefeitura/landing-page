/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      typography: {
        docs: {
          css: {
            lineHeight: "1.5",
            fontSize: "0.95rem",
            maxWidth: "80ch",

            p: {
              marginTop: "0.5em",
              marginBottom: "0.8em",
            },

            h1: {
              fontSize: "1.7rem",
              lineHeight: "1.2",
              marginBottom: "0.6em",
              marginTop: "3em",
            },

            h2: {
              fontSize: "1.4rem",
              lineHeight: "1.25",
              marginTop: "1.5em",
              marginBottom: "0.6em",
            },

            h3: {
              fontSize: "1.2rem",
              lineHeight: "1.25",
            },

            ul: {
              marginTop: "0.4em",
              marginBottom: "0.4em",
            },
            li: {
              marginTop: "0.2em",
              marginBottom: "0.2em",
            },

            a: {
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
            },
          },
        },

        md: {
          css: {
            fontSize: "1.05rem",
            lineHeight: "1.75",

            h1: { fontSize: "2.2rem" },
            h2: { fontSize: "1.8rem" },
            h3: { fontSize: "1.4rem" },
          },
        },

        lg: {
          css: {
            fontSize: "1.15rem",

            h1: { fontSize: "2.6rem" },
            h2: { fontSize: "2rem" },
            h3: { fontSize: "1.5rem" },
          },
        },
      },
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
  plugins: [require("@tailwindcss/typography")],
};
