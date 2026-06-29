import fs from "fs";
import path from "path";

import { parseContent } from "./parser";

export function getCollection(collection: string) {
  const directory = path.join(
    process.cwd(),
    "./content",
    collection
  );

  const files = fs.readdirSync(directory);

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),

    collection,

    ...parseContent(
      path.join(directory, file)
    ),
  }));
}