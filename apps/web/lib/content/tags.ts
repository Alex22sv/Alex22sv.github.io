import { getAllContent } from "./index";
import { ContentItem } from "./types";

export function getAllTags() {
  const tags = getAllContent().flatMap(
    (post) => post.tags
  );

  return [...new Set(tags)].sort();
}


export function getPostsByTag(
  tag: string
): ContentItem[] {
  return getAllContent().filter((post) =>
    post.tags.includes(tag)
  );
}