import Link from "next/link";
import { Mail, Terminal, UserRound } from "lucide-react";

export function AboutContact() {
  return (
    <section className="py-20">

      <h2 className="text-3xl font-bold">
        Contact
      </h2>

      <p className="mt-4 max-w-2xl text-muted-foreground">
        If you'd like to collaborate, discuss ideas or simply
        say hello, feel free to reach out.
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
            Open-source projects and experiments.
          </p>

        </Link>

        <Link
          href="mailto:your@email.com"
          className="rounded-xl border p-6 transition hover:border-primary"
        >
          <Mail className="mb-4" />

          <h3 className="font-semibold">
            Email
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Let's talk.
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
            Coming soon.
          </p>

        </Link>

      </div>

    </section>
  );
}