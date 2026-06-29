export function HeroStats() {
  const stats = [
    {
      label: "Projects",
      value: 0,
    },
    {
      label: "Articles",
      value: 0,
    },
    {
      label: "Technologies",
      value: 12,
    },
    {
      label: "Experiments",
      value: 3,
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
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