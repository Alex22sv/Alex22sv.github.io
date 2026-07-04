type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="font-[family-name:var(--font-sora)] text-4xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}