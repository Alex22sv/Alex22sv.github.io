import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { ContentGrid } from "@/components/content/ContentGrid";

import type { ContentItem } from "@/lib/content/types";

interface Props {
  items: ContentItem[];
}

export function RecentlyAdded({
  items,
}: Props) {
  return (
    <Container>
      <div style={{ marginTop: "3rem" }}>
        <SectionHeading
          title="Recently Added"
          description="The latest additions to my digital library."
        />

        <ContentGrid items={items} />
      </div>

    </Container>
  );
}