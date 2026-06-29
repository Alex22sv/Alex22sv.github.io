import { Hero } from "@/components/sections/home/Hero";
import { Collections } from "@/components/sections/home/Collections";
import { RecentlyAdded } from "@/components/sections/home/RecentlyAdded";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <RecentlyAdded />
    </>
  );
}