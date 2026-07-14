/**
 * PRICING PLANS — the cards in the "Find your fit" section.
 * Set `featured: true` on ONE plan to highlight it with the coral border +
 * "Most Popular" badge.
 */
import { site } from "./site";

export interface Plan {
  label: string; // small stamp above the name
  name: string;
  price: string; // number only, "$" is added automatically
  freq: string; // e.g. "per month"
  features: string[];
  cta: string; // button text
  link: string;
  featured?: boolean;
  badge?: string; // badge text when featured (default "Most Popular")
}

export const plans: Plan[] = [
  {
    label: "Drop In",
    name: "Single Class",
    price: "25",
    freq: "per class",
    features: ["Any single class", "No commitment"],
    cta: "Book a Drop-In",
    link: site.bookingUrl,
  },
  {
    label: "Class Pack",
    name: "10-Class Pack",
    price: "199",
    freq: "per pack · $19.90/class",
    features: ["10 classes, use anytime", "Any class type", "Expires in 6 months"],
    cta: "Get the Pack",
    link: site.bookingUrl,
  },
  {
    label: "Membership",
    name: "2x / Week",
    price: "149",
    freq: "per month",
    features: [
      "8 classes per month",
      "All class types included",
      "App access & booking",
      "Cancel anytime",
    ],
    cta: "Start Membership",
    link: site.bookingUrl,
    featured: true,
    badge: "Most Popular",
  },
  {
    label: "Membership",
    name: "Unlimited",
    price: "199",
    freq: "per month",
    features: [
      "Unlimited classes",
      "All class types included",
      "App access & booking",
      "Priority booking",
      "Cancel anytime",
    ],
    cta: "Go Unlimited",
    link: site.bookingUrl,
  },
];
