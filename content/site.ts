// content/site.ts
//
// SINGLE SOURCE OF TRUTH for every site-wide string: address, phone, hours,
// navigation, section copy, CTA labels, form copy, footer/legal. Components
// import from here and hardcode nothing. Anything marked TODO: CLIENT DATA or
// TODO: CLIENT COPY is a placeholder awaiting the owner.

export type SiteContent = {
  name: string;
  tagline: string; // hero positioning line
  description: string; // meta description
  url: string; // canonical origin, feeds metadataBase
  seo: { titleDefault: string; titleTemplate: string };
  a11y: { skipToContent: string; mainNav: string; mobileNav: string };
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    display: string; // one-line render + map queries
  };
  geo: { latitude: number; longitude: number };
  phone: { display: string; e164: string };
  email?: string;
  hours: { days: string; open: string; close: string }[]; // plaza-wide display rows
  openingHours: string[]; // schema.org format for JSON-LD
  assets: {
    logo: string;
    logoAlt: string;
    heroImage: string;
    heroImageAlt: string;
  };
  nav: { label: string; href: `#${string}` }[];
  header: { phoneCtaLabel: string; menuLabel: string; menuTitle: string };
  hero: { primaryCta: string; secondaryCta: string };
  directory: {
    heading: string;
    intro: string;
    filterAll: string;
    labels: {
      suite: string;
      call: string;
      email: string;
      hours: string;
      directions: string;
      website: string;
      details: string;
      close: string;
    };
  };
  about: { heading: string; paragraphs: string[] };
  leasing: {
    heading: string;
    valueProp: string;
    blurb: string;
    submit: string;
  };
  visit: {
    heading: string;
    parkingHeading: string;
    parking: string[];
    hoursHeading: string;
    directionsGoogle: string;
    directionsApple: string;
    mapTitle: string;
  };
  contact: { heading: string; blurb: string; submit: string };
  forms: {
    labels: {
      name: string;
      email: string;
      phone: string;
      message: string;
      spaceNeeded: string;
    };
    placeholders: {
      name: string;
      email: string;
      phone: string;
      message: string;
      spaceNeeded: string;
    };
    optionalHint: string;
    success: { heading: string; body: string };
    errorFallback: string;
    validation: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      messageTooShort: string;
      messageTooLong: string;
      spaceNeededRequired: string;
      rateLimited: string;
    };
  };
  footer: {
    tenantsHeading: string;
    exploreHeading: string;
    visitHeading: string;
    blurb: string;
  };
  // Empty until handles are confirmed — footer renders nothing for [].
  social: { platform: "instagram" | "facebook"; url: string; label: string }[];
  legal: {
    copyright: string;
    links: { label: string; href: string }[];
  };
};

export const site: SiteContent = {
  name: "Richmond Square",
  tagline: "Your neighborhood plaza on San Pablo Avenue — ten local businesses, one friendly stop.",
  description:
    "Richmond Square is a neighborhood retail plaza at 12669 San Pablo Ave, Richmond, CA 94805 — home to ten local businesses, from flowers and fashion to salons and services.",
  url: "https://therichmondsquare.com",
  seo: {
    titleDefault: "Richmond Square — Retail Plaza in Richmond, CA",
    titleTemplate: "%s | Richmond Square",
  },
  a11y: {
    skipToContent: "Skip to content",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
  },
  address: {
    street: "12669 San Pablo Ave",
    city: "Richmond",
    state: "CA",
    zip: "94805",
    display: "12669 San Pablo Ave, Richmond, CA 94805",
  },
  // TODO: CLIENT DATA — coordinates are APPROXIMATE (street-level geocode not
  // verified). Confirm before launch; they feed JSON-LD geo.
  geo: { latitude: 37.958, longitude: -122.332 },
  // TODO: CLIENT DATA — (510) 555-0100 is an obvious placeholder. Replace with
  // the real plaza/leasing phone number (drives the header CTA and footer).
  phone: { display: "(510) 555-0100", e164: "+15105550100" },
  email: undefined, // TODO: CLIENT DATA — general plaza inbox, if one exists
  // TODO: CLIENT DATA — plaza-wide hours below are placeholders; confirm.
  hours: [
    { days: "Monday – Saturday", open: "9:00 AM", close: "7:00 PM" },
    { days: "Sunday", open: "10:00 AM", close: "5:00 PM" },
  ],
  openingHours: ["Mo-Sa 09:00-19:00", "Su 10:00-17:00"],
  assets: {
    // RICH MOND mark, 500x500 PNG with transparent padding. An inverted
    // variant for dark surfaces lives beside it in /brand.
    logo: "/brand/richmond-square-logo.png",
    logoAlt: "Richmond Square",
    // TODO: CLIENT ASSET — hero photo of the plaza, 1920x1080 JPG. Replace the
    // placeholder file at this path.
    heroImage: "/placeholders/hero-1920x1080.svg",
    heroImageAlt: "", // decorative until a real photo of the plaza lands
  },
  nav: [
    { label: "Directory", href: "#directory" },
    { label: "About", href: "#about" },
    { label: "Leasing", href: "#leasing" },
    { label: "Visit", href: "#visit" },
    { label: "Contact", href: "#contact" },
  ],
  header: {
    phoneCtaLabel: "Call us",
    menuLabel: "Open menu",
    menuTitle: "Menu",
  },
  hero: {
    primaryCta: "Browse the businesses",
    secondaryCta: "Leasing inquiries",
  },
  directory: {
    heading: "The businesses",
    intro: "Ten neighbors under one roof — say hi, call ahead, or stop by.",
    filterAll: "All",
    labels: {
      suite: "Suite",
      call: "Call",
      email: "Email",
      hours: "Hours",
      directions: "Directions",
      website: "Visit website",
      details: "Details",
      close: "Close",
    },
  },
  about: {
    heading: "About the Square",
    // TODO: CLIENT COPY — placeholder prose; replace with the plaza's real story.
    paragraphs: [
      "[Placeholder copy] Richmond Square has been a fixture on San Pablo Avenue for years — a small neighborhood plaza where Richmond and El Cerrito residents run their errands, grab a bite, and support local owners.",
      "[Placeholder copy] Free parking on site, step-free access to every storefront, and ten independent businesses that know their regulars by name.",
    ],
  },
  leasing: {
    heading: "Leasing & real estate services",
    valueProp:
      "Looking for retail space, or for a hands-on partner in East Bay real estate? Richmond Square's owner works directly with tenants and clients — no leasing office runaround.",
    // TODO: CLIENT COPY — sharpen the owner's real estate value proposition.
    blurb:
      "[Placeholder copy] From leasing a suite at the Square to buying or selling commercial property in the East Bay, tell us what you need and we'll get back to you within a business day.",
    submit: "Send leasing inquiry",
  },
  visit: {
    heading: "Visit us",
    parkingHeading: "Parking & access",
    // TODO: CLIENT COPY — confirm parking/accessibility notes.
    parking: [
      "[Placeholder] Free on-site parking directly in front of the storefronts.",
      "[Placeholder] Step-free entry to all suites.",
      "[Placeholder] AC Transit stops within a short walk on San Pablo Ave.",
    ],
    hoursHeading: "Plaza hours",
    directionsGoogle: "Directions (Google Maps)",
    directionsApple: "Directions (Apple Maps)",
    mapTitle: "Map showing Richmond Square at 12669 San Pablo Ave, Richmond, CA",
  },
  contact: {
    heading: "Get in touch",
    blurb:
      "Questions about the plaza or one of the businesses? Send a note and we'll point you the right way.",
    submit: "Send message",
  },
  forms: {
    labels: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      spaceNeeded: "Space needed",
    },
    placeholders: {
      name: "Your name",
      email: "you@example.com",
      phone: "(510) 555-0123",
      message: "How can we help?",
      spaceNeeded: "e.g. ~800 sq ft retail, food service, office…",
    },
    optionalHint: "(optional)",
    success: {
      heading: "Message sent",
      body: "Thanks for reaching out — we'll get back to you soon.",
    },
    errorFallback: "Something went wrong sending your message. Please try again, or call us instead.",
    validation: {
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "That email address doesn't look right.",
      messageRequired: "Please enter a message.",
      messageTooShort: "Please tell us a little more (at least 10 characters).",
      messageTooLong: "Please keep your message under 2,000 characters.",
      spaceNeededRequired: "Please describe the space you're looking for.",
      rateLimited: "Too many messages in a short time — please wait a few minutes and try again.",
    },
  },
  footer: {
    tenantsHeading: "The businesses",
    exploreHeading: "Explore",
    visitHeading: "Visit",
    blurb: "A neighborhood retail plaza in Richmond, California.",
  },
  // TODO: CLIENT DATA — e.g. { platform: "instagram", url: "https://instagram.com/…", label: "Instagram" }
  social: [],
  legal: {
    copyright: "© 2026 Richmond Square. All rights reserved.",
    links: [
      // TODO: CLIENT DATA — real privacy policy page/link.
      { label: "Privacy Policy", href: "#" },
    ],
  },
};
