# therichmondsquare.com

The marketing site for **Richmond Square**, a retail plaza at 12669 San Pablo Ave,
Richmond, CA, home to nine local businesses.

It is a single page. Navigation is anchor-based (`#directory`, `#about`,
`#leasing`, `#visit`, `#contact`) — there are no sub-routes.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (flat config; takes no path arg by default)
```

No test framework is installed — there is nothing to run for tests.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) · React 19 |
| Language | TypeScript, strict, `@/*` → repo root |
| Styling | Tailwind v4, CSS-first (no `tailwind.config`) |
| Components | shadcn `base-luma` style over [Base UI](https://base-ui.com) |
| Motion | Framer Motion |
| Email | Resend (dependency only — not yet wired) |

## Project layout

```
app/            layout, globals.css (design tokens), page.tsx
components/
  layout/       site-header, site-footer
  motion/       motion-provider
  sections/     directory-section, owner-promo
  ui/           Base UI primitives (button, card, sheet, field, …)
content/
  site.ts       every user-visible string + address, geo, phone, hours, nav
  businesses.ts the tenant list
lib/            maps.ts, phone.ts, utils.ts
public/brand/   logo assets
```

## Content is the single source of truth

`content/site.ts` and `content/businesses.ts` hold every user-visible string and
all tenant data. **Components import from there and hardcode nothing** — not
copy, not the address, not the phone number, not aria-labels. `site` is typed by
the exported `SiteContent` type, so adding copy means extending that type first.

Tenant records carry optional `website`, `email`, `instagram`, and `hours`
fields. Filling one in lights it up everywhere at once — directory cards, the
footer, and the JSON-LD.

`TODO: CLIENT DATA` / `TODO: CLIENT COPY` / `[Placeholder]` mark values still
awaiting the owner. **Never invent a real-world value** (hours, coordinates, a
tenant's description) to clear one — leave the marker and flag it.

## UI primitives are Base UI, not Radix

`components/ui/*` wraps `@base-ui/react`. shadcn muscle memory will produce
wrong code here:

- Polymorphism is `render={<a href="…" />}`, **not** `asChild`. On `Button`,
  pair it with `nativeButton={false}` when rendering a non-button element.
- Prop types come off the primitive namespace (`SheetPrimitive.Root.Props`), not
  `React.ComponentProps<typeof …>`.
- Names differ from Radix — e.g. `Dialog.Backdrop`, not `Dialog.Overlay`.
- Icon spacing on buttons is driven by `data-icon="inline-start|inline-end"` on
  the icon, which the `buttonVariants` size classes key off.
- `lucide-react` v1 dropped brand icons; the footer uses neutral stand-ins for
  social.

## Theming

All tokens live in `app/globals.css`: `:root` defines the palette, `@theme
inline` maps it to Tailwind utilities. The palette is a stark monochrome matched
to the RICH MOND logo, with AA contrast ratios noted inline — retune the brand
there, not in components.

**The site ships light-only.** The `.dark` block is a kept-but-unused hook and
there is no theme toggle, so don't add `dark:` variants to new work.

Fonts are wired in `app/layout.tsx`: Figtree → `--font-sans`, Fraunces →
`--font-display`, which `@theme` exposes as `font-heading` and the base layer
applies to `h1`–`h4` automatically.

## Conventions

- **Tap targets ≥ 44px** — `h-11` / `size-11` on interactive elements, including
  footer links.
- **Motion is opt-out-aware** — `MotionProvider` sets `MotionConfig
  reducedMotion="user"` globally, and smooth anchor scrolling is gated behind
  `prefers-reduced-motion: no-preference`. Prefer Framer Motion components over
  raw CSS transitions for anything transform-based.
- **Accessibility strings come from `site.a11y`**, and the skip link in
  `layout.tsx` targets `#main` — a new page body must carry `id="main"` (and
  `id="top"` for the logo link).
- `lib/maps.ts` builds map URLs as pure functions over an address string, using a
  keyless Google embed. The address stays in `content/site.ts` only.

## Environment

Copy `.env.example` to `.env.local` and fill it in. Never commit real values.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Where inquiry emails are delivered (the owner's inbox) |
| `CONTACT_FROM_EMAIL` | Verified sender address — the domain must be verified in Resend before production sends will work |

## Current state

Built: the content layer, design tokens, layout chrome (header / footer / motion
provider), the `#directory` section (3×3 grid of expand-in-place cards), and the
owner-promo banner.

Not built yet:

- The `#about`, `#leasing`, `#visit`, and `#contact` sections that `site.nav`
  links to — the copy, form labels, and validation strings are already written
  in `content/site.ts`, but the sections themselves do not exist.
- The contact/leasing form handler (server action or route handler) that would
  consume `site.forms` and Resend.
- `site.assets.heroImage` points at `/placeholders/hero-1920x1080.svg`, which is
  not present in `public/`.

Assume a section is unbuilt rather than missing until you have grepped for it.

## Working on this repo with an agent

`CLAUDE.md` and `AGENTS.md` carry the operating instructions. The short version:
this is Next.js **16**, which has breaking changes from what most models were
trained on — read the relevant guide in `node_modules/next/dist/docs/` before
writing code.

## License

MIT — see [LICENSE](LICENSE).
