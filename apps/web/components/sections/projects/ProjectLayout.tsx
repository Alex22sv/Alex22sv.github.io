import { Tag } from "@/components/content/Tag";

type Props = {
    children: React.ReactNode;
    title: string;
    description: string;
    date: string;
    readingTime?: string;
    updated?: string;
    author?: string;
    cover?: string;
    tags: string[];
    toc?: React.ReactNode;
};

export function ProjectLayout({
    children,
    title,
    description,
    date,
    readingTime,
    updated,
    author,
    cover,
    tags,
    toc,
}: Props) {
    return (
        <main className="mx-auto max-w-5xl px-6 py-20">
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">

                <span>{date}</span>

                {updated && (
                    <>
                        <span>•</span>
                        <span>Actualizado {updated}</span>
                    </>
                )}

                {readingTime && (
                    <>
                        <span>•</span>
                        <span>{readingTime}</span>
                    </>
                )}

                {author && (
                    <>
                        <span>•</span>
                        <span>{author}</span>
                    </>
                )}

            </div>
            {cover && (
                <img
                    src={cover}
                    alt={title}
                    className="mb-10 w-full rounded-2xl border object-cover"
                />
            )}
            <h1 className="mt-6 text-5xl font-bold">
                {title}
            </h1>

            <p className="mt-6 text-xl text-muted-foreground">
                {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2" style={{ marginBottom: "1rem" }}>
                {tags.map((tag) => (
                    <Tag key={tag} tag={tag} />
                ))}
            </div>
            
            {toc && (
                <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
                    <article>
                        {children}
                    </article>

                    <aside className="hidden lg:block">
                        {toc}
                    </aside>
                </div>
            )}
            {!toc && (
                <article>
                    {children}
                </article>
            )}
        </main>
        
    );
}