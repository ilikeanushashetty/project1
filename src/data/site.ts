/**
 * All site content lives here. Edit text, prices, contact details and
 * which photo goes where without touching the page layouts.
 *
 * PHOTOS: drop the real pictures into src/assets/images/ using the same
 * file names (or add new files and import them below). Astro converts
 * them to AVIF/WebP at the right sizes automatically.
 */
import hero from '@/assets/images/hero.jpg';
import pool from '@/assets/images/pool.jpg';
import garden from '@/assets/images/garden.jpg';
import aFrame from '@/assets/images/a-frame.jpg';
import tent from '@/assets/images/tent.jpg';
import room from '@/assets/images/room.jpg';
import logo from '@/assets/images/logo-color.png';
import logoLight from '@/assets/images/logo-light.png';
import logoMark from '@/assets/images/logo-mark.png';

export const img = { hero, pool, garden, aFrame, tent, room, logo, logoLight, logoMark };

export const site = {
  name: 'Tierra',
  fullName: 'Tierra Resort & Villas',
  tagline: 'Rooted in earth, where the river meets the sea',
  meaning: 'Tierra means "earth". The name is a promise to keep the place close to the ground: open lawns, old trees, sand, river water and the sea breeze.',
  description:
    'A riverside eco-retreat near the beach on the Udupi–Mangaluru coast, 1.1 km off NH 66. A-frame cottages, riverside tents and a pool at the edge of the backwaters.',
  phone: '+91 99869 88887',
  phoneHref: 'tel:+919986988887',
  phoneAlt: '+91 99000 78888',
  phoneAltHref: 'tel:+919900078888',
  email: 'tierraresortandvillas@gmail.com',
  whatsapp: '919986988887',
  address: ['56/1, Hejamadi, Nadsal', 'Udupi District, Karnataka 574103'],
  geo: { lat: 13.1107242, lng: 74.7690135 },
  mapsUrl: 'https://maps.app.goo.gl/4anAVnXQpsoQTtvS6',
  checkIn: '12:00 PM',
  checkOut: '11:00 AM',
  instagram: '#',
  facebook: '#',
};

export const nav = [
  { label: 'Our Story', href: '/story' },
  { label: 'Stays', href: '/stays' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const stays = [
  {
    slug: 'a-frame-cottage',
    name: 'A-Frame Cottage',
    kicker: 'Signature stay',
    image: aFrame,
    blurb:
      'Steep timber roofs, a loft-like interior and a private sit-out that opens to the greens. Our most loved stay, and one of the few of its kind on the Karnataka coast.',
    guests: '2 adults + 1 child',
    features: ['Private sit-out', 'Air-conditioned', 'Attached bath', 'Garden view'],
  },
  {
    slug: 'semi-a-frame',
    name: 'Semi A-Frame Cottage',
    kicker: 'Cosy & bright',
    image: garden,
    blurb:
      'The same warm wood and sloping roofline in a more compact form. Ideal for couples who want character without the fuss.',
    guests: '2 adults',
    features: ['Queen bed', 'Air-conditioned', 'Attached bath', 'Lawn access'],
  },
  {
    slug: 'riverside-tent',
    name: 'Riverside Tent',
    kicker: 'Closest to the water',
    image: tent,
    blurb:
      'Canvas walls, proper beds and the backwater a few steps away. Fall asleep to the river and wake up to birdsong.',
    guests: '2–3 guests',
    features: ['River-facing', 'Comfortable beds', 'Shared or attached bath', 'Bonfire nearby'],
  },
  {
    slug: 'luxury-room',
    name: 'Luxury Room',
    kicker: 'Comfort first',
    image: room,
    blurb:
      'Spacious, air-conditioned rooms with hotel-style comfort, a short stroll from the pool and café.',
    guests: '2 adults + 1 child',
    features: ['King bed', 'Air-conditioned', 'Smart TV', 'Pool access'],
  },
];

export const amenities = [
  { title: 'Swimming Pool', text: 'A calm blue pool framed by palms. Best at golden hour.', icon: 'pool' },
  { title: 'Café & Chill Zones', text: 'Coastal plates, filter coffee and hammocks in the shade.', icon: 'cup' },
  { title: 'Backwater Walks', text: 'Quiet trails along the river to the point where it meets the sea.', icon: 'wave' },
  { title: 'Bonfire Nights', text: 'Music, stars and the sound of the river after dark.', icon: 'fire' },
  { title: 'Pet-Friendly', text: 'Bring the whole family, four-legged members included.', icon: 'paw' },
  { title: 'Free Wi-Fi & Parking', text: 'Stay connected when you need to; park right on site.', icon: 'wifi' },
];

export const experiences = [
  {
    title: 'Corporate Day-Outs',
    image: pool,
    text: 'Team games on the lawn, a long lunch, a swim and an evening by the bonfire. We plan the day so you can switch off from the city.',
    points: ['Custom day plans', 'Group meals', 'Team activities', 'Open lawns'],
  },
  {
    title: 'Celebrations & Events',
    image: garden,
    text: 'Birthdays, anniversaries, small weddings and get-togethers in open-air spaces between the river and the palms.',
    points: ['Décor on request', 'Catering', 'Riverside setups', 'Overnight stays'],
  },
  {
    title: 'Beach & Surf',
    image: hero,
    text: 'The Blue Flag beach is 3 km away and the surf club just 200 m from the gate. Paddle out in the morning and be back by the pool for lunch.',
    points: ['3 km to Blue Flag beach', '200 m to surf club', 'Sunset drives', 'Kayaking nearby'],
  },
];

/* A day at Tierra: the "story" timeline (sunrise to night) */
export const day = [
  { time: '06:30', title: 'Mist on the river', text: 'Coffee on your sit-out while the fishermen push off and the backwater turns silver.', image: garden },
  { time: '10:00', title: 'Salt & surf', text: 'A short drive to the Blue Flag beach, or a lesson at the surf club down the road.', image: hero },
  { time: '14:00', title: 'Long, slow afternoons', text: 'Lunch at the café, then a hammock, a book and the pool all to yourself.', image: pool },
  { time: '18:15', title: 'The sea takes the sun', text: 'Walk to the delta and watch the river spill into the Arabian Sea at golden hour.', image: aFrame },
  { time: '20:30', title: 'Fire & stars', text: 'Bonfire, coastal dinner and a sky full of stars far from city lights.', image: tent },
];

export const reviews = [
  { quote: 'The A-frame cottages are stunning and the staff made us feel like family. A magical place where the river meets the sea.', name: 'Priya S.', from: 'Mumbai' },
  { quote: 'Poolside evenings and bonfire nights we will not forget. Already planning the next trip.', name: 'Rahul M.', from: 'Bengaluru' },
  { quote: 'Our team loved the corporate day-out. Great food, beautiful spaces and a real break from the city.', name: 'Anita P.', from: 'Chennai' },
];

export const gallery = [
  { image: hero, alt: 'Pool and palms at Tierra', tag: 'Resort' },
  { image: aFrame, alt: 'A-frame cottage', tag: 'Stays' },
  { image: pool, alt: 'Swimming pool', tag: 'Resort' },
  { image: room, alt: 'Luxury room interior', tag: 'Stays' },
  { image: garden, alt: 'Gardens and pathways', tag: 'Nature' },
  { image: tent, alt: 'Riverside tent', tag: 'Stays' },
  { image: pool, alt: 'Evening by the pool', tag: 'Evenings' },
  { image: garden, alt: 'Backwater walk', tag: 'Nature' },
];

export const faqs = [
  { q: 'How far is Tierra from the beach?', a: 'The Blue Flag beach is about 3 km away and the surf club is roughly 200 m from the resort.' },
  { q: 'What are the check-in and check-out times?', a: 'Check-in is from 12:00 PM and check-out is by 11:00 AM. Early check-in or late check-out depends on availability.' },
  { q: 'Are pets allowed?', a: 'Yes, Tierra is pet-friendly. Please let us know when you book so we can prepare.' },
  { q: 'Do you host corporate groups and events?', a: 'Yes. We plan corporate day-outs, celebrations and small weddings. Call or message us with your date and group size.' },
  { q: 'How do I reach Tierra?', a: 'We are at Hejamadi on the Udupi–Mangaluru border, just 1.1 km off NH 66 and close to the beach. Mangaluru airport is about 45 minutes away and Udupi about 30 minutes.' },
  { q: 'Is food available on site?', a: 'Yes, our café serves breakfast, coastal meals and snacks through the day.' },
];
