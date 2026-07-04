type Props = {
  title: string;

  description: string;
};

export function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-3xl border border-dashed p-12 text-center">
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-4 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}