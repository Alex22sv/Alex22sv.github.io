import { getCollection } from "./loader";
import { Collection, ContentItem } from "./types";

export type AdjacentContent = {
  previous?: ContentItem;
  next?: ContentItem;
};

export function getAdjacentContent(
  collection: Collection,
  slug: string,
): AdjacentContent {
  const items = getCollection(collection);
  const index = items.findIndex(
      item => item.slug === slug
    );
  if (index === -1) return {};
  return {
    previous:
      index > 0
        ? items[index - 1]
        : undefined,
    next:
      index < items.length - 1
        ? items[index + 1]
        : undefined,
  };
}