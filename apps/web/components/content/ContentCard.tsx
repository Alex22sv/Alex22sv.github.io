import Link from "next/link";

import { ContentItem } from "@/lib/content/types";
import { Tag } from "./Tag";

export function ContentCard({
    post,
}: {
    post: ContentItem;
}) {

    return (

        <article className="rounded-2xl border p-6 transition-all hover:border-primary/40 hover:shadow-lg">

            <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {post.collection}
            </p>

            <Link href={`/journal/${post.slug}`}>
                <h2 className="mt-2 text-2xl font-bold hover:text-primary transition-colors">
                    {post.title}
                </h2>
            </Link>

            <p className="mt-4 text-muted-foreground">
                {post.description}
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                    <Tag
                        key={tag}
                        tag={tag}
                    />
                ))}
            </div>

        </article>
    );

}