# Tierra Resort & Villas — Brand Guidelines

**Theme: Beach & White.** Updated 1 Nov 2026, after munjoh.com: white most of
the page, colours sampled from the "What Awaits" shoreline (turquoise shallows
and sand), Playfair Display + Montserrat, a white header with the logo centred.
No script, no italics; square cards, round header icons only.

---

## 1. Colour

### Core

| Share | Name | Hex | Role |
|---|---|---|---|
| Most | **White** | `#FFFFFF` | Page background, header |
| Some | **Sand** | `#F6F1E7` | Alternate sections, the band above the footer, header icon discs |
| Some | **Mist** | `#E6F4F1` | Palest turquoise: cards, gallery filter bar |
| Text | **Ink** | `#22302E` | Headings and text; the few dark panels |
| Action | **Turquoise** | `#86C9C4` | Every button and active fill, always with Ink text (hover `#6FB9B3`) |
| Action text | **Deep Turquoise** | `#2A7680` | Links, icons, outline buttons and accent numbers on light backgrounds |
| Accent | **Sand Gold** | `#84693F` | Small labels (contact details, reviewers), current page in the menu |

### Supporting

| Name | Hex | Role |
|---|---|---|
| **Turquoise** | `#86C9C4` | Actions and highlights on dark panels and photos; decoration |
| **Light Sand** | `#D9C49A` | Accents on dark panels and photos; hairlines |
| **Shoreline gradient** | `#86C9C4` → `#A6D9D3` → `#CFEAE5` → `#ECE6D6` → `#F2E8D6` | "What Awaits" background (keeps its original teal tiles and dark button) |
| **Footer** | `#FFFFFF` | White, compact, Ink text and the full-colour logo, hairline on top |
| **Ink Muted** | `#56625F` | Secondary text |

### Contrast (WCAG 2.1 — body text 4.5:1, large text/UI 3:1)

| Pairing | Ratio | Result |
|---|---|---|
| Ink on White / Sand / Mist | 13.7 / 12.2 / 12.1 :1 | AAA |
| Ink on Turquoise (button) | 7.30:1 | AAA |
| Deep Turquoise on White / Sand | 5.25 / 4.6 :1 | AA |
| Sand Gold on White / Sand | 5.16 / 4.58 :1 | AA |
| Ink Muted on White / Sand | 6.35 / 5.64 :1 | AA |
| Ink on Turquoise (button on dark) | 7.30:1 | AAA |
| Light Sand on Ink | 8.05:1 | AAA |

### Rules of use

- **One action colour (3 Nov 2026):** primary button = Turquoise + Ink everywhere; secondary = Deep Turquoise outline. No dark green anywhere; shades over photos are neutral slate, not green.
- **Dark panels and photos:** primary button = Turquoise + Ink.
- **Headlines are one colour** (Ink on light, white on photos): no gold
  words, no italics, script or cursive.
- **No dashes (— or –) in any text:** use a comma, colon or full stop, and
  "between Udupi and Mangalore" rather than "Udupi–Mangalore".
- **Contact page (after munjoh.com/contact):** photo hero with text on the
  left and a slowly drifting wave edge; four gold-hairline boxes (Call,
  WhatsApp, Email, Timings); the enquiry form in a white card on a pale
  turquoise band with fine wave lines and wave edges; "Find Us" with
  distances whose dotted leaders draw in, and a Google map that wipes open,
  settles from a closer zoom, pulses over Tierra and shows a name card.
- **About page:** full photo hero with a centred title and wave edge; a centred
  statement under a short gold hairline; the story beside an overlapping photo
  pair, a pull quote and three key facts (2020 · 2 min · 3 km); a wide backwater
  photo that drifts with scroll; "The Tierra Way" as white cards on the pale
  turquoise wave band; location with drawn-in distances beside the delta map.
- **"Everything for a Perfect Escape" (home):** awareness of how much the resort
  offers, Apple-like and mostly black and white. Square warm Sand tiles, Ink type,
  generous gaps. Colour only in three places: the full-bleed
  garden-path photo tile ("2 min"), one Ink tile ("Backwater meets sea"), and
  turquoise / sand-gold touches in the line drawings (Doodle.astro) and the units
  (km, m). Drawings draw themselves in as tiles rise; numbers count up. Closing line:
  "12 reasons to stay" + See all experiences. Phones: small features become compact
  rows with the drawing on the left.
- **One hero for every inner page** (PageHero): full photo, centred title and
  line over an even shade, the drifting wave edge into white. About, Stay,
  Experiences, Weddings, FAQ and Contact all use it; Gallery has no visible title
  (the user prefers the photos straight away; the title is there for screen readers).
- **Desktop header slims after scrolling** (153 → 129px); sticky sub-menus follow
  it (`--hh-now`) and mark the section in view.
- **Repeated row buttons are outlined** (feature rows); solid Turquoise is kept for the
  main action of a section.
- **Body text is Montserrat 400** (was 350) for easier reading on phones.
- **Icons sit on pale Sand discs** with Sand Gold strokes everywhere (no dark squares).
- **Square corners everywhere (2px):** tiles, cards, photos, buttons, icon squares,
  review cards, the WhatsApp button. The only round shapes are the iPhone-style
  photo viewer in the Gallery and the pulse rings on the Contact map.
- **Earth over grey:** surfaces use Sand and Ink, never neutral grey or pure black.
- **Headings and paragraphs** never leave a single word on the last line.
- **Footer:** white and compact, a hairline above it; the Sand band sits above.
- **Home reviews:** the section sits on an animated aerial shoreline (Shoreline.astro:
  turquoise sea into sand, white foam waves washing and drifting). Review cards are
  square frosted glass like an iOS widget: light white veil, strong blur, bright edge.
  Ink text on the glass (12:1). Initials in plain white squares; the Google card is a
  brighter glass pane. No mask on the scrolling row (it would stop the blur).
- **No small labels above headings** ("No. 01", "Our Story", "Stay" and so
  on): the heading stands alone, with its paragraph below.
- The band above the footer is Sand; the footer is white, so they never merge.

---

## 2. Typography

Free fonts (SIL Open Font License), matched to munjoh.com.

| Role | Font | Use |
|---|---|---|
| Headings | **Playfair Display** 400/500 | All headlines, sentence case, one colour. |
| Heading sizes | One scale, site-wide (`--fs-h1/2/3` in global.css) | Page title (H1) 38→68px · section title (H2) 30→48px · card title (H3) 18→20px. No per-heading sizes; one-line headings shrink only where the screen is too narrow. |
| Body, labels, navigation | **Montserrat** (variable, body at 350) | Paragraphs, buttons, forms. Navigation in light (300) capitals with ~0.08em spacing; labels in capitals with ~0.14em. |

Minimum sizes on phones: 12px for labels, 14px for anything to be read, tap
areas about 44px.

---

## 3. Navigation

- **White header, fixed** (munjoh.com style). Top row: outlined "Check
  Availability" (opens the booking panel) on the left, the full-colour logo
  centred (no line under it), and round WhatsApp / Instagram /
  Call icons on pale sand discs on the right. Second row: all page links
  centred, current page in Sand Gold. Height 9.5rem from 1280px.
- **Below 1280px:** menu button left, logo centre, call icon right (4.5rem).
  The menu opens as a white panel under the header.
- Pages are padded by the header height (`--hh`), so heroes start below it.
- Phones keep the bottom bar: Call · WhatsApp · Book.

---

## 4. Motifs

- **Hero badge:** thin-framed TIERRA / CAMPSITE wordmark over the video, tagline
  "Where River Meets Sea, Luxury Finds Its Home", small leaf-green bird perched
  on the frame. Sits a little below the middle of the video (60%).
- **No booking bar on the home video** (removed at the user's request); booking is via Check Availability, WhatsApp and the phone bar.
- **Framed titles:** thin white frame around uppercase serif words over photos
  (hero badge, "Your Coastal Retreat Awaits").
- **Postcard frame:** thick white frame with an open corner around a crisp window
  of the photo (About hero).
- **White wave lines:** thin drifting lines, only on ocean panels and photos of
  water.
- Square photos and cards with hairline rules. No stamps, torn edges or
  wave-shaped dividers.

---

## 5. Logo

- Full-colour logo on **White** (header), **Mist** and the white footer.
- On **Ink, photos and video**, use the light version.
- The brushed-gold version is retired with the gold palette.
- Clear space at least the height of the bird.
- A vector file (SVG / AI / PDF) from the artist is still needed for print.
