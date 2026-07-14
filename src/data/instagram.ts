/**
 * INSTAGRAM GRID — the photos shown in the "More than a gym, a collective"
 * section on the home page. These are real posts from @thebarnfitnesscollective,
 * saved locally (a snapshot) so the site stays fast and never depends on a live
 * Instagram feed that could break.
 *
 * To refresh: download new square-ish photos into src/assets/images/ and update
 * this list (filename + a short alt describing the photo). Whole grid links out
 * to the Instagram profile.
 */
export interface InstaPost {
  image: string; // filename in src/assets/images/
  alt: string;
}

export const instaPosts: InstaPost[] = [
  { image: "insta-01.jpg", alt: "A member training at The Barn" },
  { image: "insta-04.jpg", alt: "Coaching on the gym floor" },
  { image: "insta-06.jpg", alt: "Pride workout at The Barn" },
  { image: "insta-08.jpg", alt: "Members working out together" },
  { image: "insta-05.jpg", alt: "Kickboxing with Coach Jon" },
  { image: "insta-03.jpg", alt: "The Barn weekly class schedule" },
];
