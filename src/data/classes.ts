/**
 * CLASS OFFERINGS — the "What We Offer" cards on the home page.
 * Each entry becomes one card. `icon` is the short stamp shown faintly in the
 * corner. `link` defaults to booking; override for special items.
 * `accent` cycles the card's background gradient (c1–c4).
 */
import { site } from "./site";

export interface Offer {
  tag: string; // e.g. "Mon · Wed"
  name: string;
  description: string;
  icon: string; // 2–3 char corner stamp
  accent: "c1" | "c2" | "c3" | "c4";
  link: string;
  linkLabel: string;
}

export const offers: Offer[] = [
  {
    tag: "Mon · Wed",
    name: "Body Armor",
    description:
      "Strength, bodybuilding & mobility. Build a resilient body from the inside out.",
    icon: "BA",
    accent: "c1",
    link: site.bookingUrl,
    linkLabel: "Book Now →",
  },
  {
    tag: "Tue",
    name: "Build + Blast",
    description:
      "Compound lifts paired with HIIT conditioning for strength and cardio gains.",
    icon: "B+",
    accent: "c2",
    link: site.bookingUrl,
    linkLabel: "Book Now →",
  },
  {
    tag: "Thu",
    name: "Build + Endurance",
    description:
      "Compound lifts plus sustained conditioning. Strength meets stamina.",
    icon: "BE",
    accent: "c3",
    link: site.bookingUrl,
    linkLabel: "Book Now →",
  },
  {
    tag: "Fri",
    name: "Pump Party",
    description:
      "Pure strength & muscle building. Bumping tunes, big lifts, good vibes.",
    icon: "PP",
    accent: "c1",
    link: site.bookingUrl,
    linkLabel: "Book Now →",
  },
  {
    tag: "Sat",
    name: "Hybrid Hustle",
    description:
      "The weekend warrior workout. Mix of everything that makes The Barn great.",
    icon: "HH",
    accent: "c2",
    link: site.bookingUrl,
    linkLabel: "Book Now →",
  },
  {
    tag: "Legends Class",
    name: "Legends Program",
    description: "Purpose-built programming for members 55+. Strong at any age.",
    icon: "55+",
    accent: "c4",
    link: "/legends-program",
    linkLabel: "Learn More →",
  },
  {
    tag: "1-on-1",
    name: "Personal Training",
    description: "Individualized coaching tailored to your goals and timeline.",
    icon: "PT",
    accent: "c3",
    link: `mailto:${site.email}`,
    linkLabel: "Inquire →",
  },
  {
    tag: "Recovery",
    name: "Massage Therapy",
    description:
      "Deep tissue bodywork by J. Dunivan, RN. 20, 40, or 60-min sessions.",
    icon: "MW",
    accent: "c1",
    link: site.bookingUrl,
    linkLabel: "Book Now →",
  },
];

/**
 * WEEKLY SCHEDULE strip. `accent` sets the top border color.
 */
export interface ScheduleDay {
  day: string;
  className: string;
  meta: string; // supports a "·"-separated summary; use \n for two lines
  accent: "rust" | "teal" | "coral";
}

export const schedule: ScheduleDay[] = [
  {
    day: "Monday",
    className: "Body Armor",
    meta: "Strength · Bodybuilding · Mobility\nMultiple time slots",
    accent: "rust",
  },
  {
    day: "Tuesday",
    className: "Build + Blast",
    meta: "Compound Lifts · HIIT\nMultiple time slots",
    accent: "teal",
  },
  {
    day: "Wednesday",
    className: "Body Armor",
    meta: "Strength · Bodybuilding · Mobility\nMultiple time slots",
    accent: "rust",
  },
  {
    day: "Thursday",
    className: "Build + Endurance",
    meta: "Compound Lifts · Conditioning\nMultiple time slots",
    accent: "teal",
  },
  {
    day: "Friday",
    className: "Pump Party",
    meta: "Strength · Muscle Building\nMultiple time slots",
    accent: "coral",
  },
  {
    day: "Saturday",
    className: "Hybrid Hustle",
    meta: "Mixed Modalities\nMorning sessions",
    accent: "rust",
  },
];
