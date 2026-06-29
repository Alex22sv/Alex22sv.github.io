type Props = {
  title: string;

  description: string;
};

export function PageHeader({
  title,
  description,
}: Props) {
  return (
    <header className="mb-16">
      <h1 className="text-5xl font-bold">
        {title}
      </h1>

      <p className="mt-6 max-w-2xl text-muted-foreground">
        {description}
      </p>
    </header>
  );
}