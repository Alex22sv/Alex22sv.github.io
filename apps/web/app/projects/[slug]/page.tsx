import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/content/ArticlePage";
import { getContent } from "@/lib/content/loader";
import { createArticleMetadata } from "@/lib/content/metadata";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { slug } = await params;

    const post = getContent("projects", slug);

    if (!post) {
        return {};
    }

    return createArticleMetadata(post);
}

export default async function ProjectsPost({
    params,
}: Props) {
    const { slug } = await params;

    const post = getContent("projects", slug);

    if (!post) {
        notFound();
    }

    return <ArticlePage post={post} />;
}