type Props = {
  children: React.ReactNode;

  title: string;

  description: string;

  date: string;

  readingTime: string;
};

export function ArticleLayout({
  children,

  title,

  description,

  date,

  readingTime,
}: Props) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">

      <p className="text-primary">
        {date} • {readingTime}
      </p>

      <h1 className="mt-6 text-6xl font-bold">
        {title}
      </h1>

      <p className="mt-6 text-xl text-muted-foreground">
        {description}
      </p>

      <article className="prose prose-invert mt-20 max-w-none">
        {children}
      </article>

    </main>
  );
}