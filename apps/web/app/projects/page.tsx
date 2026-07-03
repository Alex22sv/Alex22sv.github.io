import { getCollection } from "@/lib/content/loader";

import { ProjectList } from "@/components/projects/ProjectList";

export default function ProjectsPage() {

    const projects =
        getCollection("projects");

    return (

        <main className="mx-auto max-w-5xl px-6 py-20">

            <h1 className="text-5xl font-bold">
                Projects
            </h1>

            <p className="mt-4 max-w-2xl text-muted-foreground">
                A collection of software, experiments and long-term projects that I am building and documenting.
            </p>

            <div className="mt-12">

                <ProjectList
                    projects={projects}
                />

            </div>

        </main>

    );

}