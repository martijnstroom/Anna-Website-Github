# Anna Wittich — site (v1)

Implementation of the Stitch "Best for now" mockup (Architectural Editorial — Refined Proportions).

Source design + plan:

- `../stitch-extraction-anna-wittich.md`
- `../stitch-implementation-plan-anna-wittich.md`

## Stack

Next.js 15 App Router · TypeScript · Tailwind CSS 3 · `next/font/google` (Bebas Neue + Hanken Grotesk). No animation library — pure CSS + a small IntersectionObserver hook.

## Run locally

```bash
cd "Other/Prive/site"
npm install
npm run dev
# → http://localhost:3000
```

## Editing content

All copy, hrefs, image paths, and labels live in [`content/site.ts`](./content/site.ts). English is filled; German is a stub structure (toggle works, copy reads English until translated).

## TODOs (v1 known)

- **Form provider** — `app/api/contact/route.ts` is a no-op logger.
- **DE copy** — German strings in `content/site.ts` are stubbed.
- **Hero photo licensing** — currently using `WhatsApp Image 2025-12-03 at 13.34.43.jpeg` from `Anna Website/Original Pictures`. Confirm rights or swap before launch.
- **Press wordmarks** — kept as text per the mockup. Swap to real SVG logos if/when licensed.
- **OG image / favicon** — not yet added.
- **Publications targets** — links go to `#`.
