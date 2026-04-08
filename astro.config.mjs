// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // `imageService: "compile"` tells the Cloudflare adapter to run sharp at
  // BUILD time for any prerendered routes (static pages bake optimized,
  // hashed assets straight into /_astro/) and falls back to passthrough for
  // SSR routes. No Cloudflare Images binding needed, no runtime cost.
  adapter: cloudflare({
    imageService: "compile",
  }),
});