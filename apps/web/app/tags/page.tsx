import { PageHeader } from "@/components/layout/PageHeader";
import { Tag } from "@/components/content/Tag";
import { getAllTags } from "@/lib/content/tags";

export default function TagsPage() {
    const tags = getAllTags();

    return (
        <main className="mx-auto max-w-5xl px-6 py-20">
            <PageHeader
                title="Tags"
                description="Browse the library by topic."
            />

            <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                    <Tag
                        key={tag}
                        tag={tag}
                    />
                ))}
            </div>
        </main>
    );
}