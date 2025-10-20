import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: true, // aplica estilos padrões do Tailwind
  }), react()],
});