import { Hero } from "@/components/sections/home/Hero";
import { Collections } from "@/components/sections/home/Collections";
import { RecentlyAdded } from "@/components/sections/home/RecentlyAdded";
import { CurrentFocus } from "@/components/home/current-focus";
import { WhatYouWillFind } from "@/components/home/what-youll-find";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <RecentlyAdded />
    </>
  );
}