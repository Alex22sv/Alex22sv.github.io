const timeline = [
  {
    year: "2024",
    title: "AURA VINDEX",
    description:
      "Empecé a construir un ecosistema de biblioteca digital con Android, Kotlin y MongoDB.",
  },
  {
    year: "2025",
    title: "SPARK",
    description:
      "Construí un oxímetro de pulso embebido usando ESP32 y MAX30102.",
  },
  {
    year: "2026",
    title: "Personal Digital Library",
    description:
      "Empecé a construir una biblioteca digital personal.",
  },
];

export function AboutTimeline() {
  return (
    <section className="py-16">

      <h2 className="text-3xl font-bold">
        Línea de tiempo
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