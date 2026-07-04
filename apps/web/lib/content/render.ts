import { compileMDX } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

import { useMDXComponents } from "@/components/mdx/MDXComponents";

export async function renderMDX(source: string) {
  const result = await compileMDX({
    source,

    components: useMDXComponents(),

    options: {
      parseFrontmatter: false,

      mdxOptions: {
        remarkPlugins: [remarkGfm],

        rehypePlugins: [
          rehypeSlug,

          rehypeAutolinkHeadings,

          [
            rehypePrettyCode,
            {
              theme: "github-dark",
            },
          ],
        ],
      },
    },
  });

  return result.content;
}