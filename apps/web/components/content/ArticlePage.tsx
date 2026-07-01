import Link from "next/link";
import { ContentItem } from "@/lib/content/types";
import { extractToc } from "@/lib/content/toc";
import { TableOfContents } from "./TableOfContents";
import { ArticleLayout } from "../layout/ArticleLayout";
import { MDXRenderer } from "../mdx/MDXRenderer";
import { getAdjacentPosts } from "@/lib/content/navigation";
import { getRelatedPosts } from "@/lib/content/related";
import { PreviousNext } from "./PreviousNext";
import { RelatedArticles } from "./RelatedArticles";

type Props = {
    post: ContentItem;
};

export function ArticlePage({
    post,
}: Props) {

    const toc = extractToc(post.body ?? "");
    const navigation = getAdjacentPosts(post.slug);
    const related = getRelatedPosts(post);

    return (
        <ArticleLayout
            title={post.title}
            description={post.description}
            date={post.date}
            readingTime={post.readingTime ?? ""}
            updated={post.updated}
            author={post.author}
            tags={post.tags}
            cover={post.cover}
            toc={
                <TableOfContents
                    items={toc}
                />
            }
        >
            <Link
                href="/journal"
                className="mb-10 inline-flex text-sm text-primary hover:underline"
            >
                ← Back to Journal
            </Link>
            <MDXRenderer
                source={post.body ?? ""}
            />
            <PreviousNext
                previous={navigation.previous}
                next={navigation.next}
            />
            <RelatedArticles
                posts={related}
            />
        </ArticleLayout>

    );

}