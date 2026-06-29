export type Collection =
  | "journal"
  | "projects"
  | "lab"
  | "gallery";

export interface Frontmatter {
  title: string;

  description: string;

  date: string;

  tags: string[];

  published: boolean;

  cover?: string;
}

export interface ContentItem extends Frontmatter {
  slug: string;

  collection: Collection;

  readingTime?: string;

  body?: string;
}