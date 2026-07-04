interface HeroStatsProps {
  projects: number;
  articles: number;
  technologies: number;
  experiments: number;
}

export function HeroStats({
  projects,
  articles,
  technologies,
  experiments,
}: HeroStatsProps) {
  const stats = [
    {
      label: "Projects",
      value: projects,
    },
    {
      label: "Articles",
      value: articles,
    },
    {
      label: "Technologies",
      value: technologies,
    },
    {
      label: "Experiments",
      value: experiments,
    },
  ];

  return (
    <div
      className="
        grid
        gap-4
        sm:grid-cols-2
        lg:grid-cols-4
        rounded-3xl
        border
        border-border
        bg-background/30
        p-6
        backdrop-blur-md
        transition
        hover:border-primary/40
      "
      style={{ marginBottom: "2rem" }}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-border bg-background/40 p-6 backdrop-blur"
        >
          <p className="text-3xl font-bold">{stat.value}</p>

          <p className="mt-2 text-sm text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}