# Ravi Trading Co. — Business Portfolio Website

A 10-page responsive business portfolio site built with React + Vite + Tailwind CSS (v4), featuring
light/dark mode and four product divisions:

1. Pet Supplies
2. Kids Garment
3. Offset Printing Ink
4. Mobile Parts & Accessories

## Pages (10)

1. Home (`/`)
2. About (`/about`)
3. Pet Supplies (`/divisions/pet-supplies`)
4. Kids Garment (`/divisions/kids-garment`)
5. Offset Printing Ink (`/divisions/offset-printing-ink`)
6. Mobile Parts & Accessories (`/divisions/mobile-parts`)
7. Global Reach (`/global-reach`)
8. Quality & Compliance (`/quality`)
9. Reviews / Testimonials (`/testimonials`)
10. Contact (`/contact`)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Stack

- React 18 + Vite
- Tailwind CSS v4 (via @tailwindcss/vite)
- React Router v7 for routing
- lucide-react for icons
- Fraunces (display) + Work Sans (body) + IBM Plex Mono (utility) via Google Fonts

## Design notes

- Theme: a "card catalog / ledger" identity - each division has an index code (DIV.01-04),
  a dedicated accent color, and appears as a tabbed index card on the homepage hero.
- Light/dark mode is toggled from the navbar, persisted to localStorage, and respects the
  visitor's OS preference on first visit.
- Fully responsive from small mobile widths up through desktop, with a dedicated mobile menu.
- Colors, type scale, and spacing are defined as design tokens in src/index.css under @theme.

## Editing content

- Division content (stats, product lines, process steps) lives in src/data/divisions.js -
  edit this one file to update all four division pages and every place they're referenced.
- Company details (name, address, phone, email) appear in src/components/Navbar.jsx,
  src/components/Footer.jsx, and src/pages/Contact.jsx.
- The contact form in src/pages/Contact.jsx is a front-end only demo; wire up handleSubmit
  to your email service or backend endpoint of choice to make it functional.
