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

  /** The Glofox booking portal — used by every "Book" button on the site. */
  bookingUrl:
    "https://app.glofox.com/portal/#/branch/691f4a6d9e80973ea40dac4c/classes",

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
 */
export const mainNav = [
  { label: "Schedule & Book", href: site.bookingUrl },
  { label: "Programming & Pricing", href: "/programming-and-pricing" },
  { label: "Legends Program", href: "/legends-program" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
  { label: "Mobile App", href: "/mobile-app" },
  { label: "FAQ", href: "/faq" },
] as const;

/** FOOTER link columns. */
export const footerNav = {
  explore: [
    { label: "Programming & Pricing", href: "/programming-and-pricing" },
    { label: "Schedule & Book", href: site.bookingUrl },
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
