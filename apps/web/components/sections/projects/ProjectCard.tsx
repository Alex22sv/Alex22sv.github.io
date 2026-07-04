import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { ContentItem } from "@/lib/content/types";

type Props = {
  project: ContentItem;
};

export function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">
            {project.title}
          </h2>

          <p className="mt-2 text-muted-foreground">
            {project.description}
          </p>
        </div>

        {project.status && (
          <Badge>
            {project.status}
          </Badge>
        )}
      </div>

      {project.tech && project.tech.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
            >
              {tech}
            </Badge>
          ))}
        </div>
      )}

      <div className="mt-8 inline-flex items-center gap-2 text-primary">
        Ver proyecto

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}