import { getJournalPosts } from "@/lib/content/loader";

export default function JournalPage() {
  const posts = getJournalPosts();

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Journal
      </h1>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="rounded-2xl border p-6"
          >
            <h2 className="text-2xl font-semibold">
              {post.title}
            </h2>

            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}