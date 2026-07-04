import Link from "next/link";

import { AppButton } from "@/components/ui/AppButton";

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <AppButton asChild>
        <Link href="/projects">
          Explore Projects
        </Link>
      </AppButton>

      <AppButton
        variant="outline"
        asChild
      >
        <Link href="/journal">
          Read Journal
        </Link>
      </AppButton>
    </div>
  );
}