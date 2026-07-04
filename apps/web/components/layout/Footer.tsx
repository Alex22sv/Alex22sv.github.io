import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.author}
        </p>
      </div>
    </footer>
  );
}