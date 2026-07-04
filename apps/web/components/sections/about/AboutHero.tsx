import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutHero() {
  return (
    <section className="py-20">

      <p className="text-primary font-medium">
        Acerca de mí
      </p>

      <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
        Aquí está alguien apasionado por
        aprender, construir y documentar.
      </h1>

      <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-8">
        Hola, soy Alex.
        Soy un desarrollador de software que disfruta
        creando software, experimentando con tecnología
        y documentando todo lo que aprendo.
      </p>

      <div className="mt-10 flex gap-4">

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-primary-foreground transition hover:opacity-90"
        >
          Ver Proyectos

          <ArrowRight size={18} />

        </Link>

        <Link
          href="/journal"
          className="rounded-lg border px-5 py-3 transition hover:bg-accent"
        >
          Leer Diario
        </Link>

      </div>

    </section>
  );
}