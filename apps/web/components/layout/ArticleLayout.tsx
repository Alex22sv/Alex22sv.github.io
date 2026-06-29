import { Tag } from "@/components/content/Tag";

type Props = {
    children: React.ReactNode;
    title: string;
    description: string;
    date: string;
    readingTime: string;
    tags: string[];
    toc?: React.ReactNode;
};

export function ArticleLayout({
    children,
    title,
    description,
    date,
    readingTime,
    tags,
    toc,
}: Props) {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            <p className="text-sm text-primary">
                {date} • {readingTime}
            </p>

            <h1 className="mt-6 text-5xl font-bold">
                {title}
            </h1>

            <p className="mt-6 text-xl text-muted-foreground">
                {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                ))}
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
                <article>
                    {children}
                </article>

                <aside className="hidden lg:block">
                    {toc}
                </aside>
            </div>
        </main>
    );
}