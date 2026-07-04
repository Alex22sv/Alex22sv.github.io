import fs from "fs";
import path from "path";

import type { Collection } from "./types";

const CONTENT_PATH = path.join(
  process.cwd(),
  "../../content"
);

const IMAGE_EXTENSIONS = [
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".svg",
];

export function getGallery(
  collection: Collection,
  slug: string,
) {
  const galleryPath = path.join(
    CONTENT_PATH,
    collection,
    slug,
    "gallery",
  );

  if (!fs.existsSync(galleryPath)) {
    return [];
  }

  return fs
    .readdirSync(galleryPath)
    .filter(file =>
      IMAGE_EXTENSIONS.some(ext =>
        file.endsWith(ext)
      )
    )
    .sort();
}