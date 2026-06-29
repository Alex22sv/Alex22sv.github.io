import { Container } from "@/components/ui/Container";

import { SectionHeading } from "@/components/ui/SectionHeading";

import { ContentCard } from "@/components/common/ContentCard";

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

                <ContentCard

                    title="First Project"

                    description="Coming soon."

                    href="#"

                    category="Project"

                />

            </div>

        </Container>

    );

}