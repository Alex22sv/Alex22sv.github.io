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
    <div className="
        rounded-3xl
        border
        border-border
        bg-background/30
        p-6
        backdrop-blur-md
        transition
        hover:border-primary/40
        hover:translate-y-[-4px]
    "
    style={{ marginBottom: '2rem' }}>
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