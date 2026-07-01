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
    published: data.published || false,
    status: data.status || null,
    repository: data.repository || null,
    website: data.website || null,
    featured: data.featured || false,
    cover: data.cover || null,
    updated: data.updated || null,
    author: data.author || null,
    draft: data.draft || false,
    series: data.series || null,
    order: data.order || null,
    body: content,
    readingTime: readingTime(content).text,
  };
}