# Logo assets

Drop brand logos here when they're not available in `simple-icons` (Iconify).

## File naming

Use lowercase kebab-case matching the brand slug:

```
src/assets/logos/
├── acme-corp.svg       ← preferred (vector, recolorable)
├── obscure-startup.svg
└── legacy-vendor.png   ← fallback when only raster is available
```

## SVG prep checklist

Before saving an SVG here, run it through:

1. **[SVGOMG](https://jakearchibald.github.io/svgomg/)** to strip metadata, comments, and unnecessary precision
2. **Replace hardcoded fills with `currentColor`** so the icon inherits the parent's text color:
   ```svg
   <!-- Before -->
   <path d="..." fill="#FF5733"/>
   <!-- After -->
   <path d="..." fill="currentColor"/>
   ```
3. **Ensure `viewBox` is set** (e.g. `viewBox="0 0 24 24"`) so it scales cleanly
4. **Remove fixed `width`/`height`** attributes — let the parent control sizing

## How to wire it up

Once the file exists, edit `src/data/logos.ts`:

```ts
import acmeLogo from "../assets/logos/acme-corp.svg";

export const logos: Logo[] = [
  // ... existing entries
  {
    kind: "svg",
    src: acmeLogo,
    name: "Acme Corp",
    url: "https://acme.example",
  },
];
```

`LogoStrip.astro` automatically picks up the new entry — no component changes needed.

## Legal note

Always get explicit permission before listing a customer's logo in production. Most companies have brand guidelines about how their logo can be used (color, spacing, monochrome variants). Don't recolor brand bitmaps without permission.
