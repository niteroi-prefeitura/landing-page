import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  site: "https://prefeitura-niteroi.github.io/landing-page/",

  base: "/landing-page/",
});
