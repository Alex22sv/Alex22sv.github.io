import { ContentItem } from "@/lib/content/types";

import { ContentCard } from "./ContentCard";

type Props = {
  posts: ContentItem[];
};

export function RelatedArticles({
  posts,
}: Props) {

  if (!posts.length) {
    return null;
  }

  return (

    <section className="mt-20">

      <h2 className="mb-6 text-2xl font-bold">
        Artículos Relacionados
      </h2>

      <div className="space-y-6">

        {posts.map((post) => (

          <ContentCard
            key={post.slug}
            post={post}
          />

        ))}

      </div>

    </section>

  );

}