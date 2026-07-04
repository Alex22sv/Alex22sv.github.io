import Link from "next/link";

export function AboutWebsite() {
  return (
    <section className="py-16">

      <h2 className="text-3xl font-bold">
        Este sitio web
      </h2>

      <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-muted-foreground">

        <p>
          Este sitio web es mucho más que un portafolio.
          Es mi hogar digital personal: un lugar donde documentar
          proyectos, escribir artículos técnicos, organizar conocimiento
          y compartir lo que aprendo.
        </p>

        <p>
          Todo aquí es construido desde cero utilizando tecnologías web modernas.
          Cada característica también es una oportunidad para aprender algo nuevo.
        </p>

        <p>
          Mi objetivo a largo plazo es transformar este sitio en un
          ecosistema personal completo que incluya proyectos,
          diarios, libros, notas y muchas otras herramientas que uso
          todos los días.
        </p>

      </div>

      <div className="mt-10">
        <Link
          href="/projects"
          className="font-medium text-primary hover:underline"
        >
          Explorar los proyectos →
        </Link>
      </div>

    </section>
  );
}