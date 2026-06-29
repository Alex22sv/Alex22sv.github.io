import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getJournalPosts() {
  const directory = path.join(process.cwd(), "./content/journal/");

  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const source = fs.readFileSync(
      path.join(directory, file),
      "utf8"
    );

    const { data } = matter(source);

    return {
        slug: file.replace(".mdx", ""),
        title: data.title,
        description: data.description,
        date: data.date,
        category: "journal",
        tags: data.tags || [],
        published: data.published || false,
        cover: data.cover || null,
    };
  });
}