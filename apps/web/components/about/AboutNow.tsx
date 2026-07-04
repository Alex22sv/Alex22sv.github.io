import { Badge } from "@/components/ui/Badge";

const current = [
  "Building this website",
  "Learning Next.js",
  "Improving TypeScript",
  "Reading software architecture books",
  "Developing AURA VINDEX",
];

export function AboutNow() {
  return (
    <section className="py-16">

      <h2 className="text-3xl font-bold">
        What I'm Working On
      </h2>

      <p className="mt-4 max-w-3xl text-muted-foreground">
        These are the things I'm currently focused on.
        This section will evolve over time.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {current.map(item => (

          <Badge
            key={item}
            className="px-4 py-2"
          >
            {item}
          </Badge>

        ))}

      </div>

    </section>
  );
}