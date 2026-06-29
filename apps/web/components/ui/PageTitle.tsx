type PageTitleProps = {
  children: React.ReactNode;
};

export function PageTitle({
  children,
}: PageTitleProps) {
  return (
    <h1 className="font-[family-name:var(--font-sora)] text-5xl font-bold tracking-tight">
      {children}
    </h1>
  );
}