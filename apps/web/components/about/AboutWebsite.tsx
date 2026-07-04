import Link from "next/link";

export function AboutWebsite() {
  return (
    <section className="py-16">

      <h2 className="text-3xl font-bold">
        This Website
      </h2>

      <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-muted-foreground">

        <p>
          This website is much more than a portfolio.
          It is my personal digital home: a place where I document
          projects, write technical articles, organize knowledge
          and share what I learn.
        </p>

        <p>
          Everything here is built from scratch using modern web
          technologies. Every feature is also an opportunity to
          learn something new.
        </p>

        <p>
          My long-term goal is to transform this site into a
          complete personal ecosystem that includes projects,
          journals, books, notes and many other tools I use
          every day.
        </p>

      </div>

      <div className="mt-10">
        <Link
          href="/projects"
          className="font-medium text-primary hover:underline"
        >
          Explore the projects →
        </Link>
      </div>

    </section>
  );
}