/**
 * Site-wide motion: Lenis smooth scroll + GSAP ScrollTrigger.
 *
 * Markup hooks:
 *   data-split            headline: words slide up from a mask
 *   data-fade             fade + rise when it enters the viewport
 *   data-stagger          children with data-fade animate one after another
 *   .reveal-img           image wrapper wipes open, inner <img> settles from 1.2x
 *   data-parallax="0.2"   moves against the scroll (fraction of its height)
 *   data-draw             SVG: every <path> draws itself in on enter
 *   data-draw-path        single SVG path drawn as you scroll (scrubbed)
 *   data-words            paragraph: words brighten as you scroll through it
 *   data-count="120"      number counts up on enter
 *   data-hscroll          horizontal pinned scroller (desktop only)
 *   data-day              "a day at Tierra" sticky timeline
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const reduced = root.classList.contains('reduced');
const $$ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) =>
  Array.from(scope.querySelectorAll<T>(sel));

/* ---------------- Smooth scroll ---------------- */
let lenis: Lenis | null = null;
if (!reduced) {
  lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  lenis.on('scroll', ScrollTrigger.update);
  // overlays (e.g. the gallery viewer) pause / resume smooth scrolling
  addEventListener('lenis:stop', () => lenis?.stop());
  addEventListener('lenis:start', () => lenis?.start());
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // in-page anchors go through Lenis
  $$<HTMLAnchorElement>('a[href*="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const url = new URL(a.href);
      if (url.pathname !== location.pathname || !url.hash) return;
      const target = document.querySelector(url.hash);
      if (!target) return;
      e.preventDefault();
      lenis!.scrollTo(target as HTMLElement, { offset: -((document.getElementById('site-header')?.offsetHeight ?? 72) + 16) });
    });
  });
}

/* ---------------- Header ---------------- */
const header = document.getElementById('site-header');
if (header) {
  // the header always stays visible; past the top it gains a soft shadow
  const onScroll = () => header.classList.toggle('is-solid', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // desktop dropdown (hover handled in CSS; click for touch + keyboard)
  $$('.nav-drop', header).forEach((drop) => {
    const toggle = drop.querySelector<HTMLButtonElement>('.nav-drop-btn');
    const set = (open: boolean) => { drop.classList.toggle('open', open); toggle?.setAttribute('aria-expanded', String(open)); };
    toggle?.addEventListener('click', () => set(!drop.classList.contains('open')));
    document.addEventListener('click', (e) => { if (!drop.contains(e.target as Node)) set(false); });
    drop.addEventListener('keydown', (e) => { if (e.key === 'Escape') { set(false); toggle?.focus(); } });
  });

  // mobile menu
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    const links = $$('.mm-link', menu);
    const tl = gsap.timeline({ paused: true })
      .set(menu, { visibility: 'visible' })
      .fromTo(menu, { clipPath: 'inset(0 0 100% 0)', opacity: 1 }, { clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'power3.inOut' })
      .from(links, { yPercent: 60, opacity: 0, stagger: 0.05, duration: 0.6, ease: 'power3.out' }, '-=0.45');
    const toggle = (open: boolean) => {
      header.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.setAttribute('aria-hidden', String(!open));
      if (open) { lenis?.stop(); tl.timeScale(1).play(); }
      else { lenis?.start(); tl.timeScale(1.6).reverse(); }
    };
    btn.addEventListener('click', () => toggle(btn.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && header.classList.contains('menu-open') && toggle(false));
  }
}

/* ---------------- Split headlines ---------------- */
function splitWords(el: HTMLElement) {
  // walk text nodes so inline tags like <em> keep their styling
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        (child.textContent || '').split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(' '); return; }
          const outer = document.createElement('span');
          outer.className = 'split-line';
          outer.style.display = 'inline-block';
          const inner = document.createElement('span');
          inner.textContent = part;
          outer.append(inner);
          frag.append(outer);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE && (child as Element).tagName !== 'BR') {
        walk(child);
      }
    });
  };
  walk(el);
  return $$('.split-line > span', el);
}

if (!reduced) {
  /* headlines */
  $$('[data-split]').forEach((el) => {
    const words = splitWords(el);
    const immediate = el.closest('[data-hero]');
    gsap.from(words, {
      yPercent: 110,
      rotate: 4,
      duration: 1.2,
      ease: 'expo.out',
      stagger: 0.06,
      delay: immediate ? 0.35 : 0,
      scrollTrigger: immediate ? undefined : { trigger: el, start: 'top 85%', once: true },
    });
  });

  /* fades */
  const fadeIn = (els: HTMLElement[], trigger: Element, stagger = 0) =>
    gsap.to(els, {
      opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger,
      delay: trigger.closest('[data-hero]') ? 0.9 : 0,
      scrollTrigger: { trigger, start: 'top 88%', once: true },
    });
  $$('[data-stagger]').forEach((group) => fadeIn($$('[data-fade]', group), group, 0.1));
  $$('[data-fade]').filter((el) => !el.closest('[data-stagger]')).forEach((el) => fadeIn([el], el));

  /* image wipes */
  $$('.reveal-img').forEach((wrap) => {
    const img = wrap.querySelector('img');
    const tl = gsap.timeline({ scrollTrigger: { trigger: wrap, start: 'top 85%', once: true } });
    tl.to(wrap, { clipPath: 'inset(0% 0 0 0)', duration: 1.4, ease: 'expo.inOut' });
    if (img) tl.from(img, { scale: 1.25, duration: 1.8, ease: 'expo.out' }, 0.2);
  });

  /* parallax */
  $$('[data-parallax]').forEach((el) => {
    const amt = parseFloat(el.dataset.parallax || '0.15');
    gsap.fromTo(el, { yPercent: -amt * 50 }, {
      yPercent: amt * 50, ease: 'none',
      scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  /* line art draw-in */
  $$<SVGSVGElement>('svg[data-draw]').forEach((svg) => {
    const paths = $$<SVGGeometryElement>('path, circle, rect', svg);
    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
    });
    gsap.to(paths, {
      strokeDashoffset: 0, duration: 2.4, ease: 'power2.inOut', stagger: 0.08,
      delay: parseFloat(svg.dataset.drawDelay || '0'),
      scrollTrigger: { trigger: svg, start: 'top 85%', once: true },
    });
  });

  /* scrubbed single paths (map river) */
  $$<SVGPathElement>('[data-draw-path]').forEach((p) => {
    const len = p.getTotalLength();
    gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, {
      strokeDashoffset: 0, ease: 'none',
      scrollTrigger: { trigger: p.closest('svg'), start: 'top 75%', end: 'center 45%', scrub: 1 },
    });
  });

  /* word-by-word brighten */
  $$('[data-words]').forEach((el) => {
    const words = splitWords(el).map((w) => w.parentElement!);
    gsap.fromTo(words, { opacity: 0.18 }, {
      opacity: 1, ease: 'none', stagger: 0.1,
      scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 55%', scrub: true },
    });
  });

  /* counters */
  $$('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count || '0');
    const obj = { v: 0 };
    gsap.to(obj, {
      v: end, duration: 2, ease: 'power3.out',
      onUpdate: () => { el.textContent = Math.round(obj.v).toString(); },
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });

  /* hero image: slow settle + parallax on scroll */
  $$('[data-hero-media]').forEach((media) => {
    gsap.fromTo(media, { scale: 1.18 }, { scale: 1, duration: 2.6, ease: 'expo.out' });
    gsap.to(media, {
      yPercent: 18, ease: 'none',
      scrollTrigger: { trigger: media.closest('section'), start: 'top top', end: 'bottom top', scrub: true },
    });
  });

  /* plaster portal: photo drifts and settles inside the opening, plaster eases back */
  $$('[data-portal]').forEach((portal) => {
    const photo = portal.querySelector('[data-portal-photo]');
    const plaster = portal.querySelector('[data-portal-plaster]');
    const st = { trigger: portal, start: 'top bottom', end: 'bottom top', scrub: true };
    if (photo) gsap.fromTo(photo, { scale: 1.22, yPercent: -7 }, { scale: 1.02, yPercent: 7, ease: 'none', scrollTrigger: st });
    if (plaster) gsap.fromTo(plaster, { scale: 1.07 }, { scale: 1, ease: 'none', scrollTrigger: { ...st, end: 'center center' } });
  });

  /* horizontal scroller (desktop) */
  const mm = gsap.matchMedia();
  mm.add('(min-width: 1024px)', () => {
    $$('[data-hscroll]').forEach((section) => {
      const track = section.querySelector<HTMLElement>('[data-hscroll-track]');
      if (!track) return;
      const distance = () => track.scrollWidth - window.innerWidth + parseFloat(getComputedStyle(track).paddingLeft);
      gsap.to(track, {
        x: () => -distance(), ease: 'none',
        scrollTrigger: {
          trigger: section, start: 'top top', end: () => `+=${distance()}`,
          pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
        },
      });
      const bar = section.querySelector<HTMLElement>('[data-hscroll-bar]');
      if (bar) gsap.fromTo(bar, { scaleX: 0 }, {
        scaleX: 1, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: () => `+=${distance()}`, scrub: true },
      });
    });
  });
}

/* ---------------- "A day at Tierra" (works with or without motion) ---------------- */
$$('[data-day]').forEach((section) => {
  const steps = $$('[data-day-step]', section);
  const frames = $$('[data-day-frame]', section);
  const clock = section.querySelector<HTMLElement>('[data-day-clock]');
  const setActive = (i: number) => {
    frames.forEach((f, j) => f.classList.toggle('is-active', i === j));
    steps.forEach((s, j) => s.classList.toggle('is-active', i === j));
    if (clock) clock.textContent = steps[i]?.dataset.time || '';
  };
  setActive(0);
  steps.forEach((step, i) => {
    ScrollTrigger.create({
      trigger: step, start: 'top 60%', end: 'bottom 60%',
      onToggle: (self) => self.isActive && setActive(i),
    });
  });
});

/* sticky sub-menus: mark the section currently in view, and keep its link visible */
$$('nav[data-spy]').forEach((nav) => {
  const links = $$<HTMLAnchorElement>('a[href^="#"]', nav);
  const targets = links.map((a) => document.querySelector<HTMLElement>(a.getAttribute('href')!)).filter(Boolean) as HTMLElement[];
  const mark = (id: string) => links.forEach((a) => {
    const on = a.getAttribute('href') === `#${id}`;
    a.classList.toggle('is-current', on);
    if (on) a.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) mark(e.target.id); });
  }, { rootMargin: '-40% 0px -55% 0px' }); // a thin band across the middle of the screen
  targets.forEach((t) => io.observe(t));
});

/* fonts/images can shift layout: recalc once everything has loaded */
window.addEventListener('load', () => ScrollTrigger.refresh());
document.fonts?.ready.then(() => ScrollTrigger.refresh());
