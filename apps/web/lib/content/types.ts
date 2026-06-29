export type ContentType =
  | "journal"
  | "project"
  | "lab"
  | "gallery";

export interface ContentItem {
  slug: string;

  title: string;

  description: string;

  date: string;

  category: ContentType;

  tags: string[];

  published: boolean;

  cover?: string;
}