// content/businesses.ts
//
// SINGLE SOURCE OF TRUTH for tenant data. Transcribed verbatim from the
// owner's tenant sheet (Unit / Name / Phone Number) and signed off 2026-07-25.
// Do not edit names or phone numbers without re-checking the original sheet.
//
// email / website / instagram / hours are not yet available from the client —
// they stay undefined until the data arrives. Card behavior is data-driven:
// a business with `website` renders the external-link card; without one it
// renders the expand-in-place card. Filling in a field here is all it takes
// to light it up across the site (cards, JSON-LD, footer).

export const BUSINESS_CATEGORIES = [
  "Food & Drink",
  "Beauty & Wellness",
  "Retail",
  "Services",
  "Legal",
] as const;

export type BusinessCategory = (typeof BUSINESS_CATEGORIES)[number];

export type Business = {
  slug: string;
  name: string;
  category: BusinessCategory;
  description: string; // 1–2 sentences
  suite?: string;
  phone?: string; // verbatim from the tenant sheet — normalize for tel: links at render only
  email?: string;
  website?: string; // presence of this drives the card behavior
  instagram?: string; // full URL once provided
  hours?: { days: string; open: string; close: string }[];
  logo?: string; // placeholder path
  image?: string; // placeholder path
};

// TODO: CLIENT COPY — every description below is placeholder copy written to
// state nothing beyond what the business name itself says. Replace each with
// 1–2 tenant-approved sentences.
export const businesses: Business[] = [
  {
    slug: "areli-flowers",
    name: "Areli Flowers",
    category: "Retail",
    description:
      "Fresh flowers and arrangements for every occasion, right on San Pablo Avenue.",
    suite: "101",
    phone: "(510)872-1098", // contact on sheet: Areli
  },
  {
    slug: "soulful-hands",
    name: "Soulful Hands",
    // PROVISIONAL category — business type not stated on the sheet.
    category: "Beauty & Wellness",
    description: "A welcoming neighborhood spot in Suite 102B — details coming soon.",
    suite: "102B",
    phone: "(510)501-4037", // contact on sheet: Tyler (primary, per owner review)
    // Second number on sheet — Alexis: (510)717-0422.
  },
  {
    slug: "ff-fashion-suits",
    name: "FF Fashion Suits",
    category: "Retail",
    description: "Suits and fashion for a sharp look, in the heart of Richmond Square.",
    suite: "102",
    phone: "(510)599-4405",
  },
  {
    slug: "dos-bros",
    name: "Dos Bros",
    // PROVISIONAL category — business type not stated on the sheet.
    category: "Food & Drink",
    description: "A Richmond Square favorite in Suite 103 — details coming soon.",
    suite: "103",
    phone: "(510)375-1967", // contact on sheet: Jose
  },
  {
    slug: "maribels-hair-salon",
    name: "Maribel's Hair salon", // capitalization as on sheet
    category: "Beauty & Wellness",
    description: "Hair care and styling from a neighborhood salon on San Pablo Avenue.",
    suite: "104",
    phone: "(510)837-0431",
  },
  {
    slug: "phone-repair",
    name: "Phone Repair",
    category: "Services",
    description: "Phone repair and service in Suite 102C.",
    suite: "102C",
    phone: "(865)591-1423", // verbatim from sheet — (865) is a TN area code; owner to double-check
  },
  {
    slug: "amazonia-acai-sf",
    name: "Amazonia Acai SF",
    category: "Food & Drink",
    description: "Acai bowls and more in Suite 105.",
    suite: "105",
    phone: "(415)240-3875", // contact on sheet: Wonderson
  },
  {
    slug: "salvadorian-attorney",
    name: "Salvadorian Attorney", // verbatim from sheet — may be a descriptor; confirm firm name with owner
    category: "Legal",
    description: "Attorney services for the community in Suite 106.",
    suite: "106",
    phone: "(510)230-5891", // contact on sheet: Delmi
  },
  {
    slug: "front-line-roofing",
    name: "Front line Roofing", // capitalization as on sheet
    category: "Services",
    description: "Roofing services based at Richmond Square.",
    suite: "107",
    // No phone on the sheet — owner to provide.
  },
  {
    slug: "33-wrap",
    name: "33 Wrap -", // verbatim from sheet incl. trailing dash — may be cut off; confirm with owner
    // PROVISIONAL category — business type not stated on the sheet.
    category: "Food & Drink",
    description: "Located in Suite 108 — details coming soon.",
    suite: "108",
    phone: "(415)410-5213", // contact on sheet: Paulo
  },
];
