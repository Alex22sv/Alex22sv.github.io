import { TocItem } from "@/types/toc";

export function extractToc(
  markdown: string
): TocItem[] {
  const headings = markdown.matchAll(
    /^(#{2,3})\s+(.*)$/gm
  );

  return [...headings].map((match) => ({
    level: match[1].length,

    text: match[2],

    id: match[2]
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-"),
  }));
}