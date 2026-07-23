import Link from "next/link";
import { Mail, Terminal, UserRound } from "lucide-react";

export function AboutContact() {
  return (
    <section className="py-20">

      <h2 className="text-3xl font-bold">
        Contacto
      </h2>

      <p className="mt-4 max-w-2xl text-muted-foreground">
        Si quieres colaborar, discutir ideas o simplemente
        decir hola, no dudes en contactarme.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">

        <Link
          href="https://github.com/Alex22sv"
          target="_blank"
          className="rounded-xl border p-6 transition hover:border-primary"
        >
          <Terminal className="mb-4" />

          <h3 className="font-semibold">
            GitHub
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Proyectos de código abierto y experimentos.
          </p>

        </Link>

        <Link
          href="mailto:ae22mp@gmail.com"
          className="rounded-xl border p-6 transition hover:border-primary"
        >
          <Mail className="mb-4" />

          <h3 className="font-semibold">
            Correo Electrónico
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Hablemos.
          </p>

        </Link>

        <Link
          href="#"
          className="rounded-xl border p-6 opacity-60"
        >
          <UserRound className="mb-4" />

          <h3 className="font-semibold">
            LinkedIn
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Muy pronto.
          </p>

        </Link>

      </div>

    </section>
  );
}