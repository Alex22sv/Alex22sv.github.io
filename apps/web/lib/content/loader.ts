import fs from "fs";
import path from "path";

import { parseContent } from "./parser";
import type { Collection, ContentItem } from "./types";

const CONTENT_PATH = path.join(process.cwd(), "../../content");

export function getCollection(
  collection: Collection
): ContentItem[] {

  const collectionPath = path.join(
    CONTENT_PATH,
    collection
  );

  const entries = fs
    .readdirSync(collectionPath)
    .filter((entry) => {
      const fullPath = path.join(collectionPath, entry);

      return fs.statSync(fullPath).isDirectory();
    });

  return entries
    .map((entry) => {

      const filepath = path.join(
        collectionPath,
        entry,
        "index.mdx"
      );

      if (!fs.existsSync(filepath)) {
        return null;
      }

      return {
        slug: entry,
        collection,
        ...parseContent(filepath),
      } as ContentItem;

    })
    .filter(Boolean) as ContentItem[];
}

export function getContent(
  collection: Collection,
  slug: string
): ContentItem | null {

  const filepath = path.join(
    CONTENT_PATH,
    collection,
    slug,
    "index.mdx"
  );

  if (!fs.existsSync(filepath)) {
    return null;
  }

  return {
    slug,
    collection,
    ...parseContent(filepath),
  } as ContentItem;
}