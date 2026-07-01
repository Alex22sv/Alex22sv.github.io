import { getCollection } from "./loader";
import { ContentItem } from "./types";

export function getRelatedPosts(
  current: ContentItem,
  limit = 3,
): ContentItem[] {

  return getCollection("journal")

    .filter((post) => {

      if (post.slug === current.slug) {
        return false;
      }

      return post.tags.some((tag) =>
        current.tags.includes(tag),
      );

    })

    .sort((a, b) => {

      const scoreA =
        a.tags.filter(tag => current.tags.includes(tag)).length;

      const scoreB =
        b.tags.filter(tag => current.tags.includes(tag)).length;

      return scoreB - scoreA;

    })

    .slice(0, limit);

}