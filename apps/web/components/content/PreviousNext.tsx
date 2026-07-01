import Link from "next/link";

import { ContentItem } from "@/lib/content/types";

type Props = {
  previous?: ContentItem;
  next?: ContentItem;
};

export function PreviousNext({
  previous,
  next,
}: Props) {
  return (
    <div className="mt-20 grid gap-6 md:grid-cols-2">

      {previous ? (
        <Link
          href={`/${previous.collection}/${previous.slug}`}
          className="rounded-xl border p-6 transition hover:border-primary"
        >
          <p className="text-sm text-muted-foreground">
            ← Previous
          </p>

          <h3 className="mt-2 font-semibold">
            {previous.title}
          </h3>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/${next.collection}/${next.slug}`}
          className="rounded-xl border p-6 text-right transition hover:border-primary"
        >
          <p className="text-sm text-muted-foreground">
            Next →
          </p>

          <h3 className="mt-2 font-semibold">
            {next.title}
          </h3>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}