import { getCollection } from "./loader";
import { ContentItem } from "./types";

export type AdjacentPosts = {
  previous?: ContentItem;
  next?: ContentItem;
};

export function getAdjacentPosts(slug: string): AdjacentPosts {
  const posts = getCollection("journal");

  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return {};
  }

  return {
    previous: index > 0 ? posts[index - 1] : undefined,
    next: index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}