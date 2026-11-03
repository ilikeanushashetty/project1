# Tierra Resort & Villas — website

Astro 5 · Tailwind CSS 4 · GSAP + ScrollTrigger · Lenis smooth scroll.
Builds to plain static HTML, so it can be hosted anywhere.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production files in dist/
npm run preview  # serve the production build
```

## Replace the photos

1. Put the real photos in `src/assets/images/`.
2. Either keep the same file names (`hero.jpg`, `pool.jpg`, `garden.jpg`,
   `a-frame.jpg`, `tent.jpg`, `room.jpg`) or add new files and import them at
   the top of `src/data/site.ts`.
3. Use large originals (2000–3000 px wide, JPG). Astro automatically creates
   AVIF/WebP versions at every size the layout needs.

Which photo appears where (stays, the "day at Tierra" timeline, gallery, etc.)
is set in `src/data/site.ts`.

## Edit text & details

All copy, phone numbers, address, stays, amenities, reviews and FAQs are in
`src/data/site.ts`. Page layouts are in `src/pages/`.

## Before going live

- Set the real domain in `astro.config.mjs` (`site:`) for SEO and the sitemap.
- Add the Facebook link in `src/data/site.ts` when the resort has a page (the icon stays hidden until then).
- **Enquiry form** uses Netlify Forms (no extra service). After the first deploy:
  Netlify → Site → Forms → enable form detection, then Forms → Notifications →
  add an email notification to `tierraresortandvillas@gmail.com`. Send one test
  enquiry from the live site to check it arrives. Off Netlify, the form offers
  WhatsApp instead.

## Deploy

Netlify or Vercel: connect the folder/repo, build command `npm run build`,
output directory `dist`. Or upload the contents of `dist/` to any web host.

## Logo files

`logo-color.png` (light backgrounds), `logo-light.png` (cream line-work for dark
photos/footer) and `logo-mark.png` (favicon) were made from the original
artwork. A vector (SVG/AI/PDF) version from the artist would be sharper still.
