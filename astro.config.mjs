// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Change `site` to the real domain before going live (used for SEO + sitemap).
// The GitHub Pages build serves the site from a sub-folder (/project1): it sets SITE_URL and
// SITE_BASE, and scripts/prefix-base.mjs then points the site's own links into that folder.
// Netlify sets neither, so it builds for the root of its domain exactly as before.
export default defineConfig({
  site: process.env.SITE_URL || 'https://tierraresort.com',
  base: process.env.SITE_BASE || '/',
  integrations: [sitemap()],
  // pages merged in the Nov 2026 restructure
  redirects: {
    '/facilities': '/experiences',
    '/corporate': '/weddings-events',
    '/events': '/weddings-events',
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  image: {
    responsiveStyles: true,
  },
  build: { inlineStylesheets: 'auto' },
  vite: {
    plugins: [tailwindcss()],
  },
});
