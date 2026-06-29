import Link from "next/link";

import { TocItem } from "@/types/toc";

export function TableOfContents({
  items,
}: {
  items: TocItem[];
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="rounded-2xl border p-6">
      <h2 className="mb-4 font-semibold">
        On this page
      </h2>

      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className={
                item.level === 3
                  ? "ml-4"
                  : ""
              }
            >
              <Link
                href={`#${item.id}`}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}