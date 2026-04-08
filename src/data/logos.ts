// ============================================================================
// LOGO STRIP DATA
// ============================================================================
//
// Each logo is described as one of four "kinds" so the strip can mix sources
// freely: Iconify brand icons, local SVG files, raster images, or hand-drawn
// inline SVG. The component branches once per kind and renders accordingly.
//
// To add a new logo:
//
//   1. Find the cheapest source that's available:
//      a. Search https://icon-sets.iconify.design/simple-icons/ first
//         → if it exists there, use kind: "iconify"
//      b. If not, ask the brand for an SVG (or grab from their press kit)
//         → save to src/assets/logos/<slug>.svg, use kind: "svg"
//      c. If only a raster logo exists (PNG/WebP)
//         → save to src/assets/logos/<slug>.png, use kind: "image"
//      d. If you just need a placeholder
//         → use kind: "inline" with raw SVG path data
//
//   2. Add the entry to the `logos` array below.
//
//   3. If using kind: "iconify", also add the icon name to `astro.config.mjs`
//      under integrations → icon → include → simple-icons.
//
// All other component changes — none. The strip absorbs new entries
// automatically.
//
// ============================================================================

import type { ImageMetadata } from "astro";

/**
 * A discriminated union — TypeScript narrows `logo.*` correctly inside each
 * branch of `if (logo.kind === ...)` so you can't accidentally mix fields.
 */
export type Logo =
  // 1. Iconify brand from a registered collection (e.g. simple-icons)
  | {
      kind: "iconify";
      name: string;
      slug: string; // e.g. "simple-icons:linear"
      url?: string;
    }

  // 2. Local SVG file imported from src/assets/logos/
  | {
      kind: "svg";
      name: string;
      src: ImageMetadata;
      url?: string;
    }

  // 3. Raster image (PNG/WebP) imported from src/assets/logos/
  | {
      kind: "image";
      name: string;
      src: ImageMetadata;
      url?: string;
    }

  // 4. Hand-drawn inline SVG (no separate file) — placeholder or one-off
  | {
      kind: "inline";
      name: string;
      svg: string; // inner SVG content (no <svg> wrapper)
      url?: string;
    };

// ----------------------------------------------------------------------------
// THE LOGO STRIP
// ----------------------------------------------------------------------------
//
// Mix and match any of the four kinds. Order = display order.
//
// Right now everything is "inline" placeholders to preserve the existing look.
// As real logos arrive, upgrade individual entries to "iconify" / "svg" /
// "image". The component never changes.
//
// Once you switch to iconify, the form becomes:
//   { kind: "iconify", slug: "simple-icons:linear", name: "Linear", url: "..." }
// and you must also list "linear" in astro.config.mjs.
// ----------------------------------------------------------------------------

export const logos: Logo[] = [
  { kind: "iconify", slug: "simple-icons:linear", name: "Linear" },
  { kind: "iconify", slug: "simple-icons:vercel", name: "Vercel" },
  { kind: "iconify", slug: "simple-icons:notion", name: "Notion" },
  { kind: "iconify", slug: "simple-icons:supabase", name: "Supabase" },
  { kind: "iconify", slug: "simple-icons:stripe", name: "Stripe" },
  { kind: "iconify", slug: "simple-icons:cloudflare", name: "Cloudflare" },
  { kind: "iconify", slug: "simple-icons:railway", name: "Railway" },

  // ─── EXAMPLES (commented out) ─────────────────────────────────────────────
  // Uncomment + adapt these when you have real assets to drop in.
  //
  // // Real Iconify brand (after listing in astro.config.mjs):
  // {
  //   kind: "iconify",
  //   slug: "simple-icons:github",
  //   name: "GitHub",
  //   url: "https://github.com",
  // },
  //
  // // Local SVG file (designer exported it):
  // import acmeLogo from "../assets/logos/acme.svg";
  // {
  //   kind: "svg",
  //   src: acmeLogo,
  //   name: "Acme Corp",
  //   url: "https://acme.example",
  // },
  //
  // // Raster fallback (only PNG available):
  // import obscureLogo from "../assets/logos/obscure-corp.png";
  // {
  //   kind: "image",
  //   src: obscureLogo,
  //   name: "Obscure Corp",
  // },
];
