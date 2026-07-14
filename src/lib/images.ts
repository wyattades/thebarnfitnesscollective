/**
 * Image registry.
 *
 * Every file in `src/assets/images/` is made available by its filename so that
 * content data files and components can reference an image with a simple string
 * (e.g. "team-zoe.png") instead of an import path. Astro still optimizes each
 * image (resize, compress, modern formats) at build time.
 *
 * To add a new image: drop the file into `src/assets/images/` and reference it
 * by filename. That's it — no import statements to manage.
 */
import type { ImageMetadata } from "astro";

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/*.{jpg,jpeg,png,webp,avif,gif,svg}",
  { eager: true },
);

const byName: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(modules)) {
  const filename = path.split("/").pop()!;
  byName[filename] = mod.default;
}

/** Look up an optimized image by its filename in `src/assets/images/`. */
export function getImageByName(name: string): ImageMetadata {
  const img = byName[name];
  if (!img) {
    throw new Error(
      `Image "${name}" not found in src/assets/images/. Available: ${Object.keys(byName).join(", ")}`,
    );
  }
  return img;
}
