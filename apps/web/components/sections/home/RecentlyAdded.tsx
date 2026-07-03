import { Container } from "@/components/ui/Container";

import { SectionHeading } from "@/components/ui/SectionHeading";

import { ContentCard } from "@/components/common/ContentCard";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function RecentlyAdded() {

    return (

        <Container>

            <SectionHeading

                title="Recently Added"

                description="The latest additions to my digital library."

            />

            <div className="grid gap-8 md:grid-cols-2" style={{ marginBottom: '2rem' }}>

                <ContentCard

                    title="My first article"

                    description="Coming soon."

                    href="#"

                    category="Journal"

                />

                <ProjectCard
                    project={{
                        title: "My first project",
                        description: "Coming soon.",
                        slug: "my-first-project",
                        status: "In Progress",
                        tech: ["React", "TypeScript"],
                        collection: "projects",
                        body: "",
                        date: new Date().toISOString(),
                        tags: [],
                        published: true,
                    }}
                />

            </div>

        </Container>

    );

}