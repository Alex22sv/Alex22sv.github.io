import { compileMDX } from "next-mdx-remote/rsc";

export async function renderMDX(source: string) {
  return compileMDX({
    source,
    options: {
      parseFrontmatter: false,
    },
  });
}