import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true, // aplica estilos padrões do Tailwind
    }),
  ],
});
