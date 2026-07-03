import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t">

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">

        <div>

          <h2 className="text-xl font-bold">
            {siteConfig.name}
          </h2>

          <p className="mt-2 text-muted-foreground">
            {siteConfig.title}
          </p>

        </div>

        <nav className="flex flex-col gap-2">

          <Link href="/">
            Home
          </Link>

          <Link href="/journal">
            Journal
          </Link>

          <Link href="/projects">
            Projects
          </Link>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </nav>

      </div>

      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        {siteConfig.copyright}
      </div>

    </footer>
  );
}