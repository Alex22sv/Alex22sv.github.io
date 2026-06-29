import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personal.name}
        </p>
      </div>
    </footer>
  );
}