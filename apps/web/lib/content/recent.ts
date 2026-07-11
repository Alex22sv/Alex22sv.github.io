import { getCollection } from "./loader";
import type { ContentItem } from "./types";

export function getRecentlyAdded(limit = 3): ContentItem[] {
  const collections = [
    ...getCollection("journal"),
    ...getCollection("projects"),
    ...getCollection("library"),
  ];

  return collections
    .filter((item) => item.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? 0).getTime() -
        new Date(a.date ?? 0).getTime()
    )
    .slice(0, limit);
}

export function getRecentlyAddedFilterDraft(limit = 3): ContentItem[] {
  const collections = [
    ...getCollection("journal"),
    ...getCollection("projects"),
    ...getCollection("library"),
  ];

  return collections
    .filter((item) => item.published && !item.draft)
    .sort(
      (a, b) =>
        new Date(b.date ?? 0).getTime() -
        new Date(a.date ?? 0).getTime()
    )
    .slice(0, limit);
}