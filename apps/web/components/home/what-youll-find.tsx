const sections = [
  {
    title: "Journal",
    description:
      "Technical articles, thoughts and long-form documentation.",
  },
  {
    title: "Projects",
    description:
      "Software, experiments and engineering projects.",
  },
  {
    title: "Library",
    description:
      "Books, notes and future reading logs.",
  },
];

export function WhatYouWillFind() {
  return (
    <section className="py-20">

      <h2 className="text-3xl font-bold">
        What you'll find here
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        {sections.map((section) => (

          <article
            key={section.title}
            className="rounded-xl border p-6"
          >
            <h3 className="text-xl font-semibold">
              {section.title}
            </h3>

            <p className="mt-3 text-muted-foreground">
              {section.description}
            </p>
          </article>

        ))}

      </div>

    </section>
  );
}