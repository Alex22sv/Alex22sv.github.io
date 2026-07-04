import Link from "next/link";
import { collections } from "@/config/collections";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Collections() {
  return (
    <Container>
      <SectionHeading
        title="Explora la Biblioteca"
        description="Navega por las principales colecciones de mi biblioteca digital."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        {collections.map((collection) => {
          const Icon = collection.icon;

          return (
            <Link
              key={collection.slug}
              href={`/${collection.slug}`}
              className="group rounded-3xl border border-border bg-background/40 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-background/70"
            >
              <Icon className="h-8 w-8 text-primary" />

              <h3 className="mt-6 text-xl font-semibold">
                {collection.name}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground">
                {collection.description}
              </p>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}