import fs from "fs";
import path from "path";

import { parseContent } from "./parser";
import type { Collection, ContentItem } from "./types";

const CONTENT_PATH = path.join(process.cwd(), "../../content");

export function getCollection(collection: Collection): ContentItem[] {
  const directory = path.join(CONTENT_PATH, collection);

  const files = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"));

  const contentItems = files.map((file) => ({
    slug: file.replace(".mdx", ""),
    collection,
    ...parseContent(path.join(directory, file)),
  })) as ContentItem[];
  return contentItems;
}

export function getContent(
  collection: Collection,
  slug: string
): ContentItem | null {
  const filepath = path.join(
    CONTENT_PATH,
    collection,
    `${slug}.mdx`
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