import { ContentItem } from "@/lib/content/types";

import { extractToc } from "@/lib/content/toc";

import { TableOfContents } from "./TableOfContents";

import { ArticleLayout } from "../layout/ArticleLayout";

import { MDXRenderer } from "../mdx/MDXRenderer";

type Props = {
    post: ContentItem;
};

export function ArticlePage({
    post,
}: Props) {

    const toc =
        extractToc(post.body ?? "");

    return (

        <ArticleLayout
            title={post.title}
            description={post.description}
            date={post.date}
            readingTime={post.readingTime ?? ""}
            tags={post.tags}
            toc={
                <TableOfContents
                    items={toc}
                />
            }
        >

            <MDXRenderer
                source={post.body ?? ""}
            />

        </ArticleLayout>

    );

}