import { getCollection } from "@/lib/content/loader";
import { ContentCard } from "@/components/content/ContentCard";
import { PageHeader } from "@/components/layout/PageHeader";

export default function JournalPage() {

  const posts = getCollection("journal").sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (

    <main className="mx-auto max-w-5xl px-6 py-20">

      <PageHeader
        title="Diario"
        description="Artículos, tutoriales, reseñas y reflexiones sobre software, tecnología, libros y aprendizaje."
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