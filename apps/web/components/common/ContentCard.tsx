import Link from "next/link";

type Props = {
    title: string;
    description: string;
    href: string;
    category: string;
};

export function ContentCard({
    title,
    description,
    href,
    category,
}: Props) {

    return (
        <Link
            href={href}
            className="group block rounded-3xl border border-border bg-background/40 p-6 transition hover:border-primary/40 hover:bg-background/70"
        >
            <p className="text-sm text-primary">
                {category}
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
                {title}
            </h3>
            <p className="mt-4 text-muted-foreground">
                {description}
            </p>
        </Link>
    );
}