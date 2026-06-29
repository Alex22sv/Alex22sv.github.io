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

  featured?: boolean;

  cover?: string;
}

export interface ContentItem extends Frontmatter {
  slug: string;

  collection: Collection;

  body?: string;

  readingTime?: string;

  featured?: boolean;
}