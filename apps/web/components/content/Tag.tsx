import Link from "next/link";

type Props = {
  tag: string;
};

export function Tag({ tag }: Props) {
  return (
    <Link
      href={`/tags/${tag}`}
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-primary/20
        bg-primary/10
        px-3
        py-1
        text-xs
        font-medium
        text-primary
        transition-colors
        hover:bg-primary/20
      "
    >
      #{tag}
    </Link>
  );
}