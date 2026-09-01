# Assets

## Overview

In **July 2026**, I requested that each of the businesses at Richmond Square give
any assets or information, websites.

This directory holds the **intake record**: each tenant's `description.md` is the
raw information they sent, kept verbatim so the original wording, phone numbers,
and spellings stay reviewable. Nothing here is served by the site.

## Where the images went

The images tenants supplied are web assets, so they live under `public/` and are
served at the matching URL path. Folder names there use the tenant's `slug` from
`content/businesses.ts` so wiring up `logo` / `image` is a direct lookup.

| Intake folder            | Tenant slug      | Served from                     |
| ------------------------ | ---------------- | ------------------------------- |
| `assets/arelys_flowers/` | `areli-flowers`  | `public/businesses/areli-flowers/`  |
| `assets/dosbros/`        | `dos-bros`       | `public/businesses/dos-bros/`       |
| `assets/soulful_hands/`  | `soulful-hands`  | `public/businesses/soulful-hands/`  |

Each tenant folder has its logo at `logo.png`; remaining files keep their
descriptive names in kebab-case.

If a slug changes in `content/businesses.ts`, rename the `public/businesses/`
folder to match.

## TODO: CLIENT DATA — discrepancies to resolve before transcribing

The intake files disagree with the signed-off tenant sheet in a few places. The
sheet values in `content/businesses.ts` stand until the owner confirms:

- **Name** — the sheet has `Areli Flowers`; the tenant's own materials spell it
  **Arely's Flowers Plants & Gifts**. The slug is user-visible, so confirm before
  renaming.
- **Phone (Areli Flowers)** — intake `(510) 932-1724` vs. sheet `(510)872-1098`.
- **Phone (Soulful Hands)** — intake `(510) 255-1188` vs. sheet `(510)501-4037`
  (noted on the sheet as Tyler's, primary per owner review).
- **Soulful Hands DBA** — trades as "Soulful Hands / Blackpearl Skinstudio", and
  the booking site is under the Blackpearl name. Needs an owner decision on how
  it should be presented.
