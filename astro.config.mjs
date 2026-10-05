// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://satheez.github.io',
  base: '/jwt-decoder',
  // Astro 7 defaults compressHTML to 'jsx', which drops spaces between inline
  // elements. Keep the previous HTML compression so the layout stays the same.
  compressHTML: true,
  // `vite` is a direct dependency so npm hoists Vite 8. Astro 7 and
  // `@tailwindcss/vite` both need that major; an older hoisted Vite breaks the build.
  vite: {
    plugins: [tailwindcss()],
  },
});
