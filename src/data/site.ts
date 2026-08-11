/**
 * SITE-WIDE SETTINGS
 * ------------------------------------------------------------------
 * Global facts about the business + the main navigation. Editing a value here
 * updates it everywhere it is used (header, footer, buttons, contact links).
 */

export const site = {
  name: "The Barn Fitness Collective",
  shortName: "The Barn",
  tagline:
    "More than a gym — a community dedicated to functional fitness, aging gracefully, and showing up for each other.",
  location: "Sebastopol, CA",

  address: {
    line1: "6731 Sebastopol Ave, Suite 110",
    line2: "Sebastopol, CA 95472",
  },

  email: "zoe@thebarnfitnesscollective.com",
  coachChrisEmail: "chris@thebarnfitnesscollective.com",

  /** Display phone + the E.164 form used for tel: links and structured data. */
  phone: "(415) 246-3803",
  phoneE164: "+14152463803",

  /**
   * SEO / structured-data facts about the business. These power the LocalBusiness
   * schema and social-share tags. Keep them accurate — they're what Google shows.
   */
  seo: {
    /** Default social-share image (Open Graph / Twitter). 1200×630, in /public. */
    ogImage: "/og-image.jpg",
    priceRange: "$$",
    foundingYear: "2023",
    /** Approximate map coordinates for the Sebastopol studio. Refine if needed. */
    geo: { latitude: 38.4021, longitude: -122.8069 },
  },

  /** The external Glofox booking portal (embedded on /schedule, and offered as
   *  a direct-link fallback there). */
  bookingUrl:
    "https://app.glofox.com/portal/#/branch/691f4a6d9e80973ea40dac4c/classes",

  /** Direct link to book the Recovery Room (sauna + cold plunge) — Glofox
   *  "facilities" booking. Used on the /recovery-room page. */
  recoveryBookingUrl:
    "https://app.glofox.com/portal/#/branch/691f4a6d9e80973ea40dac4c/facilities",

  /** The on-site schedule page that embeds the booking portal. Nav + footer
   *  "Schedule & Book" point here so people stay on the site. */
  scheduleUrl: "/schedule",

  instagram: {
    handle: "@thebarnfitnesscollective",
    url: "https://instagram.com/thebarnfitnesscollective",
  },

  app: {
    ios: "https://apps.apple.com/us/app/barn-fitness-co/id6759301744",
    android:
      "https://play.google.com/store/apps/details?id=ie.zappy.fennec.thebarnfitnesscollec",
  },
} as const;

/**
 * MAIN NAVIGATION (site header).
 * `href` values starting with "/" are internal pages; full URLs open externally.
 * `children` (optional) adds a dropdown of sub-links under that nav item.
 */
export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const mainNav: NavItem[] = [
  { label: "Schedule & Book", href: site.scheduleUrl },
  {
    label: "Programming & Pricing",
    href: "/programming-and-pricing",
    children: [
      { label: "Our Menu", href: "/menu" },
      { label: "HYROX", href: "/hyrox" },
    ],
  },
  { label: "Eat", href: "/eat" },
  { label: "Recovery Room", href: "/recovery-room" },
  { label: "Legends Program", href: "/legends-program" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
  { label: "Mobile App", href: "/mobile-app" },
  { label: "FAQ", href: "/faq" },
];

/** FOOTER link columns. */
export const footerNav = {
  explore: [
    { label: "Programming & Pricing", href: "/programming-and-pricing" },
    { label: "Schedule & Book", href: site.scheduleUrl },
    { label: "Eat", href: "/eat" },
    { label: "Recovery Room", href: "/recovery-room" },
    { label: "Legends Program", href: "/legends-program" },
    { label: "Our Team", href: "/our-team" },
    { label: "Mobile App", href: "/mobile-app" },
  ],
  contact: [
    { label: "Contact Us", href: "/contact" },
    { label: "Email Zoe", href: `mailto:${site.email}` },
    { label: "Remote Coaching (Chris)", href: `mailto:${site.coachChrisEmail}` },
    { label: "Book a Class", href: site.bookingUrl },
  ],
} as const;
