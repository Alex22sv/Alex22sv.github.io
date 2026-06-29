import { getCollection } from "@/lib/content/loader";

import { sortByDate } from "@/lib/content/sort";

import { ContentCard } from "@/components/content/ContentCard";

export default function JournalPage() {

  const posts =
    sortByDate(
      getCollection("journal")
    );

  return (

    <main className="mx-auto max-w-5xl px-6 py-20">

      <h1 className="text-5xl font-bold">
        Journal
      </h1>

      <div className="mt-10 space-y-6">

        {posts.map(post =>

          <ContentCard
            key={post.slug}
            post={post}
          />

        )}

      </div>

    </main>

  );

}