# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev     # next dev
npm run build   # next build
npm run start   # serve the production build
npm run lint    # eslint (flat config; takes no path arg by default)
```

No test framework is installed — there is nothing to run for tests.

## Stack

Next.js 16 App Router · React 19 · TypeScript (strict, `@/*` → repo root) · Tailwind v4 (CSS-first, no `tailwind.config`) · shadcn `base-luma` style · Framer Motion · Resend (dependency only, not yet wired).

## What this is

A single-page marketing site for Richmond Square, a retail plaza at 12669 San Pablo Ave, Richmond CA, with ten tenants. Navigation is anchor-based (`#directory`, `#about`, `#leasing`, `#visit`, `#contact`) — there are no sub-routes.

**Current state:** the content layer, design tokens, and layout chrome (header/footer/motion provider) are built; `app/page.tsx` is still the untouched `create-next-app` scaffold. The sections that `site.nav` links to do not exist yet, and neither does the contact/leasing form handler. Assume a section is unbuilt rather than missing until you have grepped for it.

## Architecture

### Content is the single source of truth

`content/site.ts` and `content/businesses.ts` hold every user-visible string and all tenant data. **Components import from there and hardcode nothing** — not copy, not the address, not the phone number, not aria-labels. `site` is typed by the exported `SiteContent` type, so adding copy means extending that type first.

- `content/site.ts` — address, geo, phone, hours, nav, per-section headings/CTAs, all form labels/placeholders/validation strings, footer, legal, social.
- `content/businesses.ts` — the tenant list, transcribed verbatim from the owner's sheet. Card rendering is data-driven: a business with `website` gets the external-link card, one without gets the expand-in-place card. Filling in a field (`email`, `hours`, `instagram`) lights it up everywhere at once — cards, footer, JSON-LD.

`TODO: CLIENT DATA` / `TODO: CLIENT COPY` / `[Placeholder]` mark values still awaiting the owner. Never invent a real-world value (hours, coordinates, a tenant's description) to clear one — leave the marker and flag it.

Known gap: `site.assets.heroImage` points at `/placeholders/hero-1920x1080.svg`, which does not exist in `public/`.

### UI primitives are Base UI, not Radix

`components/ui/*` wraps `@base-ui/react`. shadcn muscle memory will produce wrong code here:

- Polymorphism is `render={<a href="…" />}`, **not** `asChild`. On `Button`, pair it with `nativeButton={false}` when rendering a non-button element.
- Prop types come off the primitive namespace (`SheetPrimitive.Root.Props`), not `React.ComponentProps<typeof …>`.
- Names differ from Radix — e.g. `Dialog.Backdrop`, not `Dialog.Overlay`.
- Icon spacing on buttons is driven by `data-icon="inline-start|inline-end"` on the icon, which the `buttonVariants` size classes key off.
- `lucide-react` v1 dropped brand icons; the footer uses neutral stand-ins for social.

### Theming

All tokens live in `app/globals.css`: `:root` defines the palette, `@theme inline` maps it to Tailwind utilities. The palette is a stark monochrome matched to the RICH MOND logo, with AA contrast ratios noted inline — retune the brand there, not in components. **The site ships light-only**; the `.dark` block is a kept-but-unused hook and there is no theme toggle, so don't add `dark:` variants to new work.

Fonts are wired in `app/layout.tsx`: Figtree → `--font-sans`, Fraunces → `--font-display`, which `@theme` exposes as `font-heading` and the base layer applies to `h1`–`h4` automatically.

### Conventions the existing code holds to

- **Tap targets ≥ 44px** — `h-11` / `size-11` on interactive elements, including footer links.
- **Motion is opt-out-aware** — `MotionProvider` sets `MotionConfig reducedMotion="user"` globally, and smooth anchor scrolling is gated behind `prefers-reduced-motion: no-preference`. Use Framer Motion components rather than raw CSS transitions for anything transform-based.
- **Accessibility strings come from `site.a11y`** and the skip link in `layout.tsx` targets `#main` — a new page body must carry `id="main"` (and `id="top"` for the logo link).
- `lib/maps.ts` builds map URLs as pure functions over an address string, using a keyless Google embed. The address stays in `content/site.ts` only.

### Contact forms

`.env.example` declares `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (the sender domain must be verified in Resend). The copy, validation messages, and rate-limit string are already written in `site.forms`; the server action or route handler that consumes them is not built yet.
