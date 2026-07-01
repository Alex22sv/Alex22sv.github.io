import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";

export function parseContent(filepath: string) {
  const source = fs.readFileSync(filepath, "utf8");

  const { data, content } = matter(source);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags || [],
    tech: data.tech || [],
    published: data.published ?? true,
    featured: data.featured ?? false,
    draft: data.draft ?? false,
    status: data.status || null,
    repository: data.repository || null,
    website: data.website || null,
    cover: data.cover || null,
    updated: data.updated || null,
    author: data.author || null,
    series: data.series || null,
    order: data.order || null,
    body: content,
    readingTime:
      data.readingTime ||
      readingTime(content).text,
  };
}