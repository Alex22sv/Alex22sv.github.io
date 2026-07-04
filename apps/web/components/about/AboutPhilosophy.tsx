const principles = [
  {
    title: "Always Learning",
    description:
      "Technology evolves every day, and I enjoy continuously learning new tools, languages and ideas.",
  },
  {
    title: "Build to Understand",
    description:
      "I believe the best way to learn is by building real projects instead of only reading about them.",
  },
  {
    title: "Documentation Matters",
    description:
      "Writing about what I build helps me improve, remember decisions and share knowledge with others.",
  },
  {
    title: "Keep It Simple",
    description:
      "Simple, maintainable solutions usually outlive complex ones.",
  },
];

export function AboutPhilosophy() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold">
        What I Believe
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {principles.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border bg-card p-6"
          >
            <h3 className="text-xl font-semibold text-primary">
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