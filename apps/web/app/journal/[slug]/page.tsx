import { notFound } from "next/navigation";

import { getContent } from "@/lib/content/loader";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { MDX } from "@/components/mdx/MDX";

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

    return (
        <ArticleLayout
            title={post.title}
            description={post.description}
            date={post.date}
            readingTime={post.readingTime ?? ""}
            tags={post.tags}
        >
            <MDX source={post.body ?? ""} />
        </ArticleLayout>
    );
}