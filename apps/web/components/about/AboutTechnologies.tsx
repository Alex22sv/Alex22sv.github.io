import { Badge } from "@/components/ui/Badge";

const technologies = [
  "TypeScript",
  "Next.js",
  "React",
  "Kotlin",
  "Docker",
  "MongoDB",
  "Node.js",
  "Linux",
  "ESP32",
  "Git",
  "MDX",
  "Tailwind CSS",
];

export function AboutTechnologies() {
  return (
    <section className="py-16">

      <h2 className="text-3xl font-bold">
        Technologies I Enjoy
      </h2>

      <p className="mt-4 max-w-3xl text-muted-foreground">
        These are some of the technologies I currently enjoy working with.
        The list changes over time as I continue learning.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            className="px-4 py-2 text-sm"
          >
            {tech}
          </Badge>
        ))}
      </div>

    </section>
  );
}