// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Change `site` to the real domain before going live (used for SEO + sitemap).
export default defineConfig({
  site: 'https://tierraresort.com',
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
