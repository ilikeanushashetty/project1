import type { ImageMetadata } from 'astro';
/**
 * All site content lives here. Text matches the client's current site
 * (tierra.lookitlive.com); photos are the new real Tierra photos.
 *
 * PHOTOS: drop the real pictures into src/assets/images/ using the same
 * file names (or add new files and import them below). Astro converts
 * them to AVIF/WebP at the right sizes automatically.
 */
// placeholders (no real photo yet)
import room from '@/assets/images/room.jpg';
import garden from '@/assets/images/garden.jpg';
// real Tierra photos
import aFrameExterior from '@/assets/images/aframe-exterior.jpg';
import aFrameInterior from '@/assets/images/aframe-interior.jpg';
import aFrameView from '@/assets/images/aframe-view.jpg';
import cafeFood from '@/assets/images/cafe-food.jpg';
import aerial from '@/assets/images/aerial.jpg';
import poolReflection from '@/assets/images/pool-reflection.jpg';
import poolFront from '@/assets/images/pool-front.jpg';
import aFrameRow from '@/assets/images/aframe-row.jpg';
import breakfastLawn from '@/assets/images/breakfast-lawn.jpg';
import kayakAerial from '@/assets/images/kayak-aerial.jpg';
// first frames of the background videos (instant paint while the video loads)
import heroPoster from '@/assets/images/hero-poster.jpg';
import resortPool from '@/assets/images/resort-pool.webp';
import outroPoster from '@/assets/images/outro-poster.jpg';
import logo from '@/assets/images/logo-color.png';
import logoLight from '@/assets/images/logo-light.png';
import logoGold from '@/assets/images/logo-gold.png';
import aboutSunset from '@/assets/images/about-sunset.webp';
import contactDusk from '@/assets/images/contact-dusk.webp';
// TEMPORARY sample photos (free, Unsplash) until real ones arrive: see assets/images/samples/README.md
import sampleYoga from '@/assets/images/samples/yoga.jpg';
import sampleCampfire from '@/assets/images/samples/campfire.jpg';
import sampleSurfing from '@/assets/images/samples/surfing.jpg';
import sampleWedding from '@/assets/images/samples/wedding.jpg';
import sampleCelebration from '@/assets/images/samples/celebration.jpg';
import sampleSeafood from '@/assets/images/samples/seafood.jpg';
import logoMark from '@/assets/images/logo-mark.png';

export const img = {
  room, garden,
  aFrameExterior, aFrameInterior, aFrameView, cafeFood,
  aerial, poolReflection, poolFront, aFrameRow, breakfastLawn, kayakAerial,
  heroPoster, outroPoster, resortPool,
  logo, logoLight, logoGold, logoMark, aboutSunset, contactDusk,
  sampleYoga, sampleCampfire, sampleSurfing, sampleWedding, sampleCelebration, sampleSeafood,
};

export const site = {
  name: 'Tierra Campsite',
  fullName: 'Tierra Resort & Villas',
  title: 'Tierra Resort & Villas | Luxury Eco-Resort in Coastal Karnataka',
  description:
    'Experience coastal luxury at Tierra Resort & Villas. Premium eco-friendly villas, swimming pool, and serene nature retreat near Padubidri, Karnataka. Book your escape today.',
  footerTagline: 'Experience the art of slow luxury at the Udupi-Mangalore coastal delta.',
  phone: '+91 99869 88887',
  phoneHref: 'tel:+919986988887',
  phoneAlt: '+91 99000 78888',
  phoneAltHref: 'tel:+919900078888',
  landline: '0820-2002887',
  landlineHref: 'tel:+918202002887',
  email: 'tierraresortandvillas@gmail.com',
  whatsapp: '919986988887',
  whatsappText: "Hi! I'm interested in booking a stay at Tierra Resort.",
  address: ['56/1, Hejamadi, Nadsal,', 'Karnataka 574103, India'],
  geo: { lat: 13.1107242, lng: 74.7690135 },
  mapsUrl: 'https://maps.app.goo.gl/4anAVnXQpsoQTtvS6',
  checkIn: '2:00 PM',
  checkOut: '11:00 AM',
  instagram: 'https://www.instagram.com/tierra_campsite/',
  facebook: '#',
};

export const waLink = (text = site.whatsappText) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };
export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Stay', href: '/accommodation' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Weddings & Events', href: '/weddings-events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = [
  { label: 'Stay', href: '/accommodation' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Weddings & Events', href: '/weddings-events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

/* ---------------- Home ---------------- */
export const highlights = [
  { label: 'A-Frame Cottages', icon: 'aframe' },
  { label: 'Riverside Tents', icon: 'tent' },
  { label: 'Luxury Rooms', icon: 'bed' },
  { label: 'Swimming Pool', icon: 'pool' },
  { label: 'Chill Zones', icon: 'sofa' },
  { label: 'Pet-Friendly', icon: 'paw' },
];

export const awaits = [
  { title: 'A-Frame Cottages', icon: 'aframe' },
  { title: 'Riverside Tents', icon: 'tent' },
  { title: 'Luxury Rooms', icon: 'bed' },
  { title: 'Swimming Pool', icon: 'pool' },
  { title: 'Café & Chill Zones', icon: 'cup' },
  { title: 'Pet-Friendly', icon: 'paw' },
  { title: 'Private Parking', icon: 'parking' },
  { title: 'Free WiFi', icon: 'wifi' },
];

/* Real guest reviews: short word-for-word excerpts from Tierra's Google reviews,
   credited to the reviewer as shown on Google. Swap or extend from the Google listing. */
/* What Awaits You: the facts that make Tierra special (shown right after the welcome) */
export const essentials = [
  { icon: 'umbrella', title: 'Walk to the beach', text: 'Just a couple of minutes away' },
  { icon: 'sun', title: 'Blue Flag Beach', text: '3 km from the resort' },
  { icon: 'wave', title: 'Backwater meets sea', text: 'Right at the delta point' },
  { icon: 'pool', title: 'Outdoor pool', text: 'Among palms and lawns' },
  { icon: 'utensils', title: 'Café & coastal kitchen', text: 'Seafood, coastal & all cuisines' },
  { icon: 'cup', title: 'Breakfast included', text: 'Lunch & dinner made to order' },
  { icon: 'fire', title: 'Campfire evenings', text: 'Under open skies' },
  { icon: 'yoga', title: 'Yoga sessions', text: 'Calm mornings by the water' },
  { icon: 'surf', title: 'Surfing', text: 'Surf Club 200 m away' },
  { icon: 'ring', title: 'Destination weddings', text: 'Lawns, pool & backwater' },
  { icon: 'briefcase', title: 'Corporate events', text: 'Day-outs & team retreats' },
  { icon: 'paw', title: 'Pet-friendly', text: 'Bring the whole family' },
];

/* Home bands: short text + labelled photo tiles (image missing = tasteful placeholder until real photos arrive) */
type Tile = { label: string; icon: string; image?: ImageMetadata; href: string; focus?: string };
export const homeStay: Tile[] = [
  { label: 'A-Frame Cottages', icon: 'aframe', image: aFrameExterior, href: '/accommodation#a-frame-cottages' },
  { label: 'Semi A-Frame Cottages', icon: 'tent', image: aFrameRow, href: '/accommodation#semi-a-frame-cottages' },
  { label: 'Luxury Rooms', icon: 'bed', image: poolFront, href: '/accommodation#luxury-rooms' },
];
export const homeDining: Tile[] = [
  { label: 'Café & Coastal Kitchen', icon: 'utensils', image: cafeFood, href: '/experiences#dining' },
  { label: 'Fresh Seafood', icon: 'utensils', image: sampleSeafood, href: '/experiences#dining' },
  { label: 'Breakfast on the Lawn', icon: 'cup', image: breakfastLawn, href: '/experiences#dining' },
];
export const homeActivities: Tile[] = [
  { label: 'Yoga Sessions', icon: 'yoga', image: sampleYoga, href: '/experiences#yoga' },
  { label: 'Campfire Evenings', icon: 'fire', image: sampleCampfire, href: '/experiences#campfire' },
  { label: 'Surfing', icon: 'surf', image: sampleSurfing, href: '/experiences#beach' },
  { label: 'Backwater Kayaking', icon: 'wave', image: kayakAerial, href: '/experiences#backwater', focus: 'object-[20%_50%]' },
];
export const homeEvents: Tile[] = [
  { label: 'Destination Weddings', icon: 'ring', image: sampleWedding, href: '/weddings-events#weddings' },
  { label: 'Celebrations', icon: 'cake', image: sampleCelebration, href: '/weddings-events#celebrations' },
  { label: 'Corporate Events', icon: 'briefcase', image: breakfastLawn, href: '/weddings-events#corporate' },
  { label: 'Photoshoots', icon: 'camera', image: contactDusk, href: '/weddings-events#photoshoots', focus: 'object-[50%_20%]' },
];

export const reviewSummary = {
  rating: 4.8,          // (312×5 + 33×4 + 4×3 + 3×2 + 4×1) / 356
  count: 356,
  url: 'https://maps.google.com/?cid=9988347584529571932',
};
// Add more here (short excerpt + first name and last initial); the moving review band takes any number.
export const reviews = [
  { quote: 'The moment we arrived, the warm hospitality changed everything.', name: 'Ambi N.', from: 'Google review' },
  { quote: 'The room was spotlessly clean, comfortable, and well-maintained.', name: 'Dynita P.', from: 'Google review' },
  { quote: 'The pool was right in front of our room, with a beautiful backwater view just beyond it.', name: 'Akshay M.', from: 'Google review' },
  { quote: '…one of those decisions we were so happy we made.', name: 'Pavana M.', from: 'Google review' },
  { quote: 'The staff were genuinely kind and always happy to help.', name: 'Akshitha D.', from: 'Google review' },
  { quote: 'The luxury rooms are spacious, comfortable, and well-maintained.', name: 'Nagendra K.', from: 'Google review' },
  { quote: 'A perfect blend of comfort and nature.', name: 'Mohan D.', from: 'Google review' },
  { quote: 'A backwater facing property, also 2 mins walk from the beach. Staff here is very friendly.', name: 'Pradeep B.', from: 'Google review' },
  // reviewer wrote in Kannada and English (ಚೈತ್ರ ಕೆ); name shown transliterated
  { quote: 'Best part is super friendly staff, from receptionist to room service team.', name: 'Chaithra K.', from: 'Google review' },
  { quote: 'Extremely well maintained, super attentive staff.', name: 'Rahil S.', from: 'Google review' },
];

/* ---------------- About ---------------- */
export const philosophy = [
  { title: 'Keep it Simple', text: 'No frills, no pretense. Just genuine comfort and warmth.', icon: 'leaf' },
  { title: 'Keep it Warm', text: "Every guest is family. We treat you like we'd want to be treated.", icon: 'heart' },
  { title: 'Keep it Real', text: 'Authentic experiences, honest hospitality, real connections.', icon: 'sparkle' },
  { title: 'Let Nature Speak', text: 'Quiet luxury. The river, the sea, and the sky do the talking.', icon: 'wave' },
];

export const distances = ['Surf Club, 200 m away', 'Mangalore City, 29 km', 'Udupi City, 30 km', 'Blue Flag Beach, 3 km'];

/* ---------------- Accommodation ---------------- */
type Stay = { slug: string; name: string; image: ImageMetadata; extra: { image: ImageMetadata; alt: string }[]; blurb: string; features: string[]; facts: { icon: string; label: string }[]; guests: string; from: string };
export const stays: Stay[] = [
  {
    slug: 'a-frame-cottages',
    // quick facts (from the description); guests and price appear once the resort confirms them
    facts: [{ icon: 'bed', label: 'King bed' }, { icon: 'sparkle', label: 'Air-conditioned' }, { icon: 'pool', label: 'Pool & backwater view' }, { icon: 'sofa', label: 'Private sit-out' }],
    guests: '', // e.g. 'Up to 2 adults + 1 child'
    from: '',   // e.g. '₹6,500'
    name: 'A-Frame Cottages',
    image: aFrameExterior,
    extra: [
      { image: aFrameInterior, alt: 'A-frame cottage interior with loft and floating stairs' },
      { image: aFrameView, alt: 'View from an A-frame cottage to the pool and palms' },
    ],
    blurb:
      'Our signature retreat: elegant wooden A-frame cottages crafted for privacy, comfort, and immersive nature views. Designed with refined minimalism and premium finishes, each cottage offers a serene escape with every detail thoughtfully curated.',
    features: [
      'Fully air-conditioned, luxuriously appointed interiors',
      'Panoramic pool and delta-point backwater views',
      'Exclusive private sit-out for relaxed mornings and quiet evenings',
      'Plush king-size bed for restorative sleep',
      'Close access to landscaped gardens and the pool deck',
    ],
  },
  {
    slug: 'semi-a-frame-cottages',
    // quick facts (from the description); guests and price appear once the resort confirms them
    facts: [{ icon: 'bed', label: 'Queen bed' }, { icon: 'sparkle', label: 'Air-conditioned' }, { icon: 'wave', label: 'Backwater view' }, { icon: 'sofa', label: 'Private sit-out' }],
    guests: '', // e.g. 'Up to 2 adults + 1 child'
    from: '',   // e.g. '₹6,500'
    name: 'Semi A-Frame Cottages',
    image: aFrameRow,
    extra: [],
    blurb:
      'Our semi A-frame cottages offer a refined blend of openness, comfort, and contemporary design, perfect for groups, students, and travellers who enjoy elevated open-air living. Surrounded by calming greenery and soft backwater breezes, these cottages create a relaxed yet elegant atmosphere.',
    features: [
      'Air-conditioned interiors for a cool, comfortable stay',
      'Serene backwater views at the delta point',
      'Private sit-out to unwind amidst nature',
      'Plush queen-size bed',
      'Convenient proximity to beautifully landscaped gardens',
    ],
  },
  {
    slug: 'luxury-rooms',
    // quick facts (from the description); guests and price appear once the resort confirms them
    facts: [{ icon: 'bed', label: 'King bed' }, { icon: 'sparkle', label: 'Air-conditioned' }, { icon: 'pool', label: 'Pool & backwater view' }, { icon: 'sofa', label: 'Private sit-out' }],
    guests: '', // e.g. 'Up to 2 adults + 1 child'
    from: '',   // e.g. '₹6,500'
    name: 'Luxury Rooms',
    image: poolFront,
    extra: [],
    blurb:
      'Our Luxury Rooms are designed for travellers who appreciate generous space, refined comfort, and a seamless connection to the outdoors. Thoughtfully crafted with elegant finishes and calming natural tones, each room offers an elevated living experience surrounded by the beauty of Tierra’s delta landscape.',
    features: [
      'Spacious, air-conditioned interiors for ultimate relaxation',
      'Backwater and pool views that enhance the sense of openness',
      'Private sit-out for serene mornings and unhurried evenings',
      'Plush king-size bed for restful, indulgent sleep',
      'Close proximity to landscaped gardens and the pool deck',
    ],
  },
];

export const addOns = [
  { title: 'Bonfire', text: 'Evening bonfire sessions under the stars', icon: 'fire' },
  { title: 'BBQ', text: 'Barbecue setup with your favorite grills', icon: 'grill' },
  { title: 'Celebration Décor', text: 'Special decorations for your occasions', icon: 'sparkle' },
  { title: 'Candlelight Setups', text: 'Romantic candlelight dinner arrangements', icon: 'candle' },
];

/* ---------------- Experiences ---------------- */
export const curatedMoments = [
  'Stylish poolside lounges and serene chill zones',
  'Cozy café spaces with board games',
  'Elegant bonfire evenings under the open sky',
  'Gourmet BBQ sessions by the delta breeze',
  'Scenic photography trails where the river meets the sea',
  'Intimate celebrations and boutique gatherings',
  'Pet-friendly leisure areas',
];

export const venues = [
  { title: 'Pool & Backwater Function Area', text: 'A sophisticated venue for gatherings with sweeping water views', image: poolReflection },
  { title: 'Dedicated Wedding Area', text: "A picturesque setting for timeless celebrations, framed by nature's grandeur", image: aerial },
];

export const offerings = [
  { title: 'Facilities', text: 'World-class amenities from infinity pools to landscaped gardens for ultimate relaxation.', href: '/experiences', image: poolFront },
  { title: 'Corporate Day-Out', text: 'Perfect backdrop for team building and corporate retreats away from the city.', href: '/weddings-events#corporate', image: breakfastLawn },
  { title: 'Events & Celebrations', text: "Celebrate life's special moments in a breathtaking natural setting.", href: '/weddings-events', image: aboutSunset },
];

/* ---------------- Facilities ---------------- */
export const facilityGroups = [
  {
    title: 'General', text: 'Essential services for your convenience',
    items: [
      { title: 'Private Parking', text: 'Secure parking on premises', icon: 'parking' },
      { title: 'Pet-Friendly', text: 'Your furry friends are welcome', icon: 'paw' },
      { title: 'Housekeeping', text: 'Daily cleaning services', icon: 'broom' },
      { title: 'WiFi', text: 'Stay connected', icon: 'wifi' },
      { title: '24/7 Kids Food Assistance', text: "Round-the-clock kids' meals", icon: 'cup' },
      { title: 'Security', text: '24/7 security on premises', icon: 'shield' },
    ],
  },
  {
    title: 'Rooms & Tents', text: 'Comfortable accommodations for every preference',
    items: [
      { title: 'A-Frame Cottages', text: 'Iconic wooden structures', icon: 'aframe' },
      { title: 'Semi A-Frame Cottages', text: 'Open-air elevated living', icon: 'tent' },
      { title: 'Luxury Rooms', text: 'Spacious and elegant stays', icon: 'bed' },
    ],
  },
  {
    title: 'Wellness & Pool', text: 'Relax and rejuvenate',
    items: [
      { title: 'Outdoor Pool', text: 'Refreshing infinity pool', icon: 'pool' },
      { title: 'Sun Loungers', text: 'Poolside relaxation', icon: 'sun' },
    ],
  },
  {
    title: 'Connectivity', text: 'Stay connected throughout your stay',
    items: [{ title: 'High-Speed WiFi', text: 'Available across the resort', icon: 'wifi' }],
  },
  {
    title: 'Common Areas', text: 'Spaces to explore and unwind',
    items: [
      { title: 'Gardens', text: 'Beautifully landscaped greens', icon: 'leaf' },
      { title: 'Chill-Out Zones', text: 'Relaxed seating areas', icon: 'sofa' },
      { title: 'Nature-Space Backwater Seating', text: 'Scenic delta views', icon: 'wave' },
    ],
  },
];

export const poolList = ['Outdoor swimming pool', 'Comfortable sun loungers', 'Poolside seating area', 'Backwater views'];
export const natureList = ['Delta point viewings', 'Backwater trails', 'Bird watching spots', 'Quiet meditation areas'];

/* ---------------- Corporate ---------------- */
export const corporateOffer = ['Full-day & half-day packages', 'Team activities', 'Buffet meals', 'Private lawn access', 'Pool access', 'Riverside seating'];
export const corporateWhy = ['Natural calm environment', 'Close to Mangalore and Udupi', 'Flexible setups', 'Ideal for bonding & relaxation'];

/* ---------------- Events ---------------- */
export const occasions = [
  { title: 'Birthdays', text: 'Celebrate another year with the river as your backdrop and stars as your ceiling.', icon: 'cake' },
  { title: 'Anniversaries', text: "Mark your milestones in a setting that's as special as your journey together.", icon: 'heart' },
  { title: 'Proposals', text: 'Pop the question in one of the most romantic settings on the coast.', icon: 'ring' },
  { title: 'Small Gatherings', text: 'Intimate get-togethers with friends and family in a beautiful natural setting.', icon: 'users' },
];
export const eventDetails = [
  { title: 'Custom Décor', text: 'Tailored decorations for your theme', icon: 'sparkle' },
  { title: 'Celebration Cakes', text: 'Ordered to your specifications', icon: 'cake' },
  { title: 'Custom Dinners', text: 'Special menus for your occasion', icon: 'utensils' },
  { title: 'Photography Spots', text: 'Picture-perfect backdrops', icon: 'camera' },
];
export const eventVenues = [
  { title: 'Poolside', text: 'Cocktails & celebrations', image: poolReflection },
  { title: 'Backwater Garden', text: 'Ceremonies & dinners', image: kayakAerial },
  { title: 'Bonfire Spot', text: 'Evening gatherings', image: aFrameExterior },
];

/* ---------------- Gallery ---------------- */
// Category order from the current site; categories without photos yet are hidden automatically.
export const galleryCategories = ['Delta Point', 'Backwater', 'A-Frame Cottages', 'Semi A-Frame', 'Luxury Rooms', 'Night Ambience', 'Pool', 'Celebrations'];
export const gallery = [
  { image: aerial, alt: 'Delta Point, where the river meets the sea', tag: 'Delta Point' },
  { image: aFrameRow, alt: 'A-Frame Cottage Exterior', tag: 'A-Frame Cottages' },
  { image: poolReflection, alt: 'Swimming Pool', tag: 'Pool' },
  { image: aboutSunset, alt: 'Sunset over the A-frames and pool', tag: 'Night Ambience' },
  { image: aFrameExterior, alt: 'A-Frame at Dusk', tag: 'Night Ambience' },
  { image: aFrameView, alt: 'Morning Light', tag: 'A-Frame Cottages' },
  // the kayak sits at the far left of this photo: keep it in the crop
  { image: kayakAerial, alt: 'Backwater Views', tag: 'Backwater', focus: 'object-[16%_50%]' },
  { image: poolFront, alt: 'Poolside', tag: 'Pool' },
  { image: aFrameInterior, alt: 'A-Frame Cottage Interior', tag: 'A-Frame Cottages' },
];

/* ---------------- FAQ ---------------- */
export const faqs = [
  { q: 'How far is Tierra Campsite from Blue Flag Beach?', a: 'Tierra Campsite is located just 3 km from Blue Flag Beach, making it perfect for beach lovers and surf enthusiasts.' },
  { q: 'Is WiFi available at the campsite?', a: 'Yes, we provide complimentary high-speed WiFi throughout the property, including all cottages, rooms, and common areas.' },
  { q: 'Can guests use the swimming pool?', a: 'Absolutely! Our outdoor swimming pool is available for all guests. We also have comfortable sun loungers and poolside seating.' },
  { q: 'Do you provide taxi or transport arrangements?', a: "While we don't have in-house transport, we can help arrange taxi services for airport transfers, local sightseeing, or any other travel needs. Just let us know in advance." },
  { q: 'What are the check-in and check-out times?', a: 'Check-in time is 2:00 PM, and check-out time is 11:00 AM. Early check-in or late check-out may be arranged subject to availability. Please contact us in advance.' },
  { q: 'Are meals included?', a: 'Breakfast is included with your stay. Lunch and dinner can be ordered from our in-house chef at any time. Just let our team know.' },
  { q: 'Is Tierra Campsite pet-friendly?', a: 'Yes, we love furry guests! Tierra is a pet-friendly campsite. Please inform us in advance so we can make appropriate arrangements for your companion.' },
  { q: 'Is parking available?', a: 'Yes, we offer free private parking on the premises for all our guests. The parking area is secure and well-maintained.' },
  { q: 'Are all accommodations air-conditioned?', a: 'Yes, all our A-frame cottages, semi A-frames, and luxury rooms are fully air-conditioned to ensure your comfort throughout your stay.' },
];
