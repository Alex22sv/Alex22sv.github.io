const principles = [
  {
    title: "Aprendizaje continuo",
    description:
      "La tecnología evoluciona todos los días, y disfruto aprendiendo continuamente nuevas herramientas, lenguajes e ideas.",
  },
  {
    title: "Construir para aprender",
    description:
      "Creo que la mejor forma de aprender es construyendo proyectos reales en lugar de solo leer sobre ellos."
  },
  {
    title: "Documentación Importante",
    description:
      "Escribir sobre lo que construyo me ayuda a mejorar, recordar decisiones y compartir conocimiento con otros.",
  },
  {
    title: "Manténlo Simple",
    description:
      "Soluciones simples y mantenibles suelen superar a las complejas.",
  },
];

export function AboutPhilosophy() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold">
        En lo que creo
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