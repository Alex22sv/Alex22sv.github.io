import type { ContentItem } from "@/lib/content/types";

import { ContentPreviewCard } from "./ContentPreviewCard";

interface Props {
  items: ContentItem[];
}

export function ContentGrid({
  items,
}: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <ContentPreviewCard
          key={`${item.collection}-${item.slug}`}
          item={item}
        />
      ))}
    </div>
  );
}