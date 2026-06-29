type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function BlogPost({
    params,
}: Props) {
    const { slug } = await params;

    return (
        <main className="mx-auto max-w-4xl px-6 py-24">
            <h1>{slug}</h1>
        </main>
    );
}