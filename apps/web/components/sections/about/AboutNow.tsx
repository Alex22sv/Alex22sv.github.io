import { Badge } from "@/components/ui/Badge";

const current = [
  "Programando este sitio web",
  "Aprendiendo Next.js",
  "Mejorando TypeScript",
  "Leyendo libros de arquitectura de software",
  "Desarrollando AURA VINDEX",
];

export function AboutNow() {
  return (
    <section className="py-16">

      <h2 className="text-3xl font-bold">
        Actualmente
      </h2>

      <p className="mt-4 max-w-3xl text-muted-foreground">
        Estas son las cosas en las que actualmente me enfoco.
        Esta sección evolucionará con el tiempo.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {current.map(item => (

          <Badge
            key={item}
            className="px-4 py-2"
          >
            {item}
          </Badge>

        ))}

      </div>

    </section>
  );
}