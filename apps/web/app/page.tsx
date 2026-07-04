import { Hero } from "@/components/sections/home/Hero";
import { Collections } from "@/components/sections/home/Collections";
import { RecentlyAdded } from "@/components/sections/home/RecentlyAdded";
import { getSiteStats } from "@/lib/content/stats";
import { getRecentlyAdded } from "@/lib/content/recent";

export default function HomePage() {
  const stats = getSiteStats();
  const recent = getRecentlyAdded();
  return (
    <>
      <Hero stats={stats} />
      <Collections />
      <RecentlyAdded items={recent} />
    </>
  );
}