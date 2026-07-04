type Props = {
  children: React.ReactNode;
};

export function Callout({
  children,
}: Props) {
  return (
    <div className="my-8 rounded-2xl border border-primary/30 bg-primary/10 p-6">
      {children}
    </div>
  );
}