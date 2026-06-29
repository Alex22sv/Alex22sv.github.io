import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-bold text-xl">
          Alex22sv
        </Link>

        <nav className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}