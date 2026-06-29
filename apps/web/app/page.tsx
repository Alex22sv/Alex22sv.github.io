import { Container } from "@/components/ui/Container";
import { PageTitle } from "@/components/ui/PageTitle";
import { Section } from "@/components/ui/Section";

export default function HomePage() {
  return (
    <Section>
      <Container>
        <PageTitle>
          Welcome to my digital space.
        </PageTitle>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A place where I share projects,
          ideas, articles and everything
          I build.
        </p>
      </Container>
    </Section>
  );
}