// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      // Bundle only the brand icons we actually reference in src/data/logos.ts.
      // Add new entries here as the trust strip grows. Browse all 3000+ at:
      // https://icon-sets.iconify.design/simple-icons/
      include: {
        "simple-icons": [
          "linear",
          "vercel",
          "notion",
          "supabase",
          "stripe",
          "cloudflare",
          "railway",
        ],
      },
    }),
  ],
});
