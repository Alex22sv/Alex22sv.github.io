import { getCollection } from "./loader";
import { Collection, ContentItem } from "./types";

export function getRelatedContent(
  collection: Collection,
  current: ContentItem,
  limit = 3,
): ContentItem[] {

  return getCollection(collection)
    .filter(item => {
      if (item.slug === current.slug) return false;
      return item.tags.some(tag =>
        current.tags.includes(tag)
      );
    })
    .sort((a, b) => {
      const scoreA =
        a.tags.filter(tag =>
          current.tags.includes(tag)
        ).length;
      const scoreB =
        b.tags.filter(tag =>
          current.tags.includes(tag)
        ).length;
      return scoreB - scoreA;
    })
    .slice(0, limit);
}