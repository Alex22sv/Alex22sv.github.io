import { notFound } from "next/navigation";

import { getContent } from "@/lib/content/loader";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { MDX } from "@/components/mdx/MDX";
import { extractToc } from "@/lib/content/toc";
import { TableOfContents } from "@/components/content/TableOfContents";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function JournalPost({
    params,
}: Props) {
    const { slug } = await params;

    const post = getContent("journal", slug);

    if (!post) {
        notFound();
    }
    const toc = extractToc(post.body ?? "");
    return (
        <ArticleLayout
            title={post.title}
            description={post.description}
            date={post.date}
            readingTime={post.readingTime ?? ""}
            tags={post.tags}
            toc={<TableOfContents items={toc} />}
        >
            <MDX source={post.body ?? ""} />
        </ArticleLayout>
    );
}