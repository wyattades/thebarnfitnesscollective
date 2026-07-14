import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// The public URL of the live site. Update this if the domain ever changes.
const SITE = "https://www.thebarnfitnesscollective.com";

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  image: {
    // Allow optimizing images we still hotlink from the old Squarespace CDN, if any.
    domains: ["images.squarespace-cdn.com"],
  },
});
