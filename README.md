# ZVDW Design Works — Portfolio

A refined, single-page portfolio for **ZVDW Design Works**, an architecture and design practice based in Lahore, Pakistan. The site presents services, project categories, client testimonials, and contact information in a cinematic, editorial layout built for performance and easy content updates.

**Live stack:** React 19 · Vite 8 · Tailwind CSS 3 · Framer Motion · GSAP ScrollTrigger

---

## Features

- **Pinned hero** with GSAP scroll-driven image transitions and rotating service tagline
- **Project gallery** with focus-on-hover interaction and detail overlay
- **Scroll-reveal animations** via Framer Motion and intersection observers
- **Fully responsive** layout from mobile through desktop
- **Centralized content** — all copy, images, and contact details live in one file
- **Accessible navigation** with smooth scroll and active section highlighting

---

## Quick Start

```bash
cd architecture-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production build

```bash
npm run build
npm run preview
```

The optimized output is written to `architecture-portfolio/dist/`.

---

## Project Structure

```
architecture-portfolio/
├── public/                  # Static assets (favicon, etc.)
├── src/
│   ├── assets/              # Logo and bundled images
│   ├── components/          # UI sections and layout
│   │   └── icons/           # Custom SVG icon sets
│   ├── data/
│   │   └── content.js       # ← All site content (edit here)
│   ├── utils/
│   │   └── animations.js    # Shared Framer Motion variants
│   ├── App.jsx              # Page composition
│   ├── index.css            # Global styles & Tailwind imports
│   └── main.jsx             # Entry point
├── index.html
├── tailwind.config.js       # Brand colors & typography
└── vite.config.js
```

---

## Editing Content

All text, links, images, and section data are defined in:

```
src/data/content.js
```

| Export | Purpose |
|--------|---------|
| `firm` | Name, tagline, phone, email, address, map embed, social links |
| `navLinks` | Navigation labels and scroll targets |
| `heroSlides` | Hero background images and rotating tagline words |
| `whyUs` | Value proposition grid |
| `projects` | Project category cards (title, image, description) |
| `services` | Service offerings with icon keys |
| `testimonials` | Client quotes |
| `stats` | Animated counters |
| `story` | About and “What We Do” copy |
| `principal` | Principal architect name, role, portrait |
| `storyImages` | Images for the Our Story section |

Replace project category images by updating files in `public/images/projects/` (or change the `img` path on each entry in `projects`).

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `arch-black` | `#0A0A0A` | Primary background |
| `arch-gold` | `#C9A84C` | Accents, links, highlights |
| `arch-cream` | `#F5F0E8` | Light section backgrounds |
| `arch-text` | `#E8E0D0` | Body text on dark surfaces |

**Typography:** Cormorant Garamond (display) · DM Sans (body) · Space Grotesk (labels)

---

## Deployment

This is a static Vite SPA. Deploy `dist/` to any static host:

- **Vercel / Netlify** — set build command to `npm run build` and output directory to `dist`, with root set to `architecture-portfolio`
- **GitHub Pages** — run `npm run build` and publish the `dist` folder
- **Custom server** — serve `dist/index.html` with fallback routing for client-side navigation

Ensure environment-specific URLs (social links, map embed) are updated in `content.js` before going live.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check and produce production bundle |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

---

## Credits

- **Client:** [ZVDW Design Works](https://zvdw.site)
- **Design & Development:** [TechMalba](https://techmalba.com)

---

## License

Proprietary. All rights reserved by ZVDW Design Works. Source code is provided for client use and maintenance unless otherwise agreed.
