import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-sora)] text-xl font-bold"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}