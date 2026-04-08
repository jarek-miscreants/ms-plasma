// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // Skip image optimization in the Workers runtime — the Cloudflare adapter
  // would otherwise enable the Cloudflare Images service, which requires the
  // `IMAGES` binding (paid add-on). Passthrough serves source files as-is;
  // they're still bundled and hashed by Vite, just not transcoded.
  image: {
    service: passthroughImageService(),
  },

  adapter: cloudflare(),
});