import { ContentItem } from "@/lib/content/types";

import { ProjectCard } from "./ProjectCard";

type Props = {
  projects: ContentItem[];
};

export function ProjectList({
  projects,
}: Props) {

  return (

    <div className="space-y-8">

      {projects.map((project) => (

        <ProjectCard
          key={project.slug}
          project={project}
        />

      ))}

    </div>

  );

}