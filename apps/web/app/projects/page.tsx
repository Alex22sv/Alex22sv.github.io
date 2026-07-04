import { getCollection } from "@/lib/content/loader";

import { ProjectList } from "@/components/sections/projects/ProjectList";

export default function ProjectsPage() {

    // Fetch all projects from the content directory
    // Order by the "date" field in descending order
    const projects = getCollection("projects").sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });

    return (

        <main className="mx-auto max-w-5xl px-6 py-20">

            <h1 className="text-5xl font-bold">
                Proyectos
            </h1>

            <p className="mt-4 max-w-2xl text-muted-foreground">
                Una colección de software, experimentos y proyectos a largo plazo que estoy construyendo y documentando.
            </p>

            <div className="mt-12">

                <ProjectList
                    projects={projects}
                />

            </div>

        </main>

    );

}