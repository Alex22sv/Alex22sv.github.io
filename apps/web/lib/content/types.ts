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
  collection: Collection;
  slug: string;
  title: string;
  description: string;
  body: string;
  date: string;
  updated?: string;
  author?: string;
  readingTime?: string;
  tags: string[];
  cover?: string;
  featured?: boolean;
  draft?: boolean;
  series?: string;
  order?: number;
  status?: string;
  repository?: string;
  website?: string;
  tech?: string[];
}