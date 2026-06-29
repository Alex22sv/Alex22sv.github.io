import { getCollection } from "@/lib/content/loader";

import { sortByDate } from "@/lib/content/sort";

import { ContentCard } from "@/components/content/ContentCard";
import { PageHeader } from "@/components/layout/PageHeader";

export default function JournalPage() {

  const posts =
    sortByDate(
      getCollection("journal")
    );

  return (

    <main className="mx-auto max-w-5xl px-6 py-20">

      <PageHeader
        title="Journal"
        description="Articles, tutorials and reflections about software, technology and learning."
      />

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