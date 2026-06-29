import Link from "next/link";

import { getCollection } from "@/lib/content/loader";

export default function JournalPage() {
  const posts = getCollection("journal");

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Journal
      </h1>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="group block rounded-3xl border border-border bg-background/40 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-background/70"
          >
            <p className="text-sm text-primary">
              {post.date}
              {post.readingTime && ` • ${post.readingTime}`}
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              {post.title}
            </h2>

            <p className="mt-4 text-muted-foreground">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}