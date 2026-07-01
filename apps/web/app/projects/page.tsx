import { getCollection } from "@/lib/content/loader";

import { sortByDate } from "@/lib/content/sort";

import { ContentCard } from "@/components/content/ContentCard";
import { PageHeader } from "@/components/layout/PageHeader";

export default function ProjectsPage() {

    const projects = getCollection("projects");

    return (

        <main className="mx-auto max-w-5xl px-6 py-20">

            <PageHeader
                title="Projects"
                description="A collection of my personal and professional projects."
            />

            <div className="mt-10 space-y-6">

                {projects.map(project =>

                    <ContentCard
                        key={project.slug}
                        post={project}
                    />

                )}

            </div>

        </main>

    );

}