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
          title="Agregado recientemente"
          description="Las últimas adiciones a mi biblioteca digital."
        />

        <ContentGrid items={items} />
      </div>

    </Container>
  );
}