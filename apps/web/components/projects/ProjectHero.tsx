import { Badge } from "@/components/ui/Badge";

type Props = {
  title: string;
  description: string;
  status?: string;
  tech?: string[];
};

export function ProjectHero({
  title,
  description,
  status,
  tech = [],
}: Props) {
  return (
    <header className="mb-12">
      <h1 className="text-5xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        {description}
      </p>

    </header>
  );
}