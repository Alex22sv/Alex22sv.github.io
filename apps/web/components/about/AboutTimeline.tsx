const timeline = [
  {
    year: "2024",
    title: "AURA VINDEX",
    description:
      "Started building a digital library ecosystem with Android, Kotlin and MongoDB.",
  },
  {
    year: "2025",
    title: "SPARK",
    description:
      "Built an embedded pulse oximeter using ESP32 and MAX30102.",
  },
  {
    year: "2026",
    title: "Personal Digital Library",
    description:
      "Started creating this website as my personal digital home.",
  },
];

export function AboutTimeline() {
  return (
    <section className="py-16">

      <h2 className="text-3xl font-bold">
        Current Journey
      </h2>

      <div className="mt-10 space-y-8">

        {timeline.map((item) => (

          <article
            key={item.year}
            className="relative border-l pl-8"
          >
            <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary" />

            <span className="text-sm font-medium text-primary">
              {item.year}
            </span>

            <h3 className="mt-2 text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              {item.description}
            </p>

          </article>

        ))}

      </div>

    </section>
  );
}