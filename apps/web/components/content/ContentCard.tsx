import Link from "next/link";

import { ContentItem } from "@/lib/content/types";

export function ContentCard({
    post,
}: {
    post: ContentItem;
}) {

    return (

        <Link
            href={`/journal/${post.slug}`}
            className="
                group
                block
                rounded-3xl
                border
                border-border
                bg-background/40
                p-6
                transition-all
                hover:-translate-y-1
                hover:border-primary/50
                "
        >

            <p className="text-sm text-primary">

                {post.date}

                {post.readingTime &&
                    ` • ${post.readingTime}`}

            </p>

            <h2 className="mt-3 text-2xl font-semibold">

                {post.title}

            </h2>

            <p className="mt-4 text-muted-foreground">

                {post.description}

            </p>

        </Link>

    );

}