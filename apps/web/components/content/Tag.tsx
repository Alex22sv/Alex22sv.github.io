type Props = {
  label: string;
};

export function Tag({ label }: Props) {
  return (
    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
      #{label}
    </span>
  );
}