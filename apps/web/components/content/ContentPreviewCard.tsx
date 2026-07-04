import Link from "next/link";

import type { ContentItem } from "@/lib/content/types";

import { ContentBadge } from "./ContentBadge";
import { ContentMetadata } from "./ContentMetadata";

interface Props {
  item: ContentItem;
}

export function ContentPreviewCard({
  item,
}: Props) {
  return (
    <Link
      href={`/${item.collection}/${item.slug}`}
      className="
        group
        block
        rounded-3xl
        border
        bg-card
        p-6
        transition-all
        hover:-translate-y-1
        hover:border-primary/50
      "
    >
      <ContentBadge collection={item.collection} />

      <h2 className="mt-6 text-2xl font-semibold transition-colors text-primary">
        {item.title}
      </h2>

      <p className="mt-4 leading-7 text-muted-foreground">
        {item.description}
      </p>

      <ContentMetadata
        date={item.date}
        readingTime={item.readingTime}
      />
    </Link>
  );
}