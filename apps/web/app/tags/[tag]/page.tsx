import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { ContentCard } from "@/components/content/ContentCard";

import {
    getAllTags,
    getPostsByTag,
} from "@/lib/content/tags";

type Props = {
    params: Promise<{
        tag: string;
    }>;
};

export default async function TagPage({
    params,
}: Props) {
    const { tag } = await params;

    if (!getAllTags().includes(tag)) {
        notFound();
    }

    const posts = getPostsByTag(tag);

    return (
        <main className="mx-auto max-w-5xl px-6 py-20">
            <PageHeader
                title={`#${tag}`}
                description={`${posts.length} artículo(s) encontrado(s).`}
            />

            <div className="mt-10 space-y-6">
                {posts.map((post) => (
                    <ContentCard
                        key={post.slug}
                        post={post}
                    />
                ))}
            </div>
        </main>
    );
}