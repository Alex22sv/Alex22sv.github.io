import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutPhilosophy } from "@/components/sections/about/AboutPhilosophy";
import { AboutTechnologies } from "@/components/sections/about/AboutTechnologies";
import { AboutTimeline } from "@/components/sections/about/AboutTimeline";
import { AboutWebsite } from "@/components/sections/about/AboutWebsite";
import { AboutNow } from "@/components/sections/about/AboutNow";
import { AboutContact } from "@/components/sections/about/AboutContact";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">

      <AboutHero />

      <AboutStory />

      <AboutPhilosophy />

      <AboutTechnologies />

      <AboutTimeline />

      <AboutContact />

    </main>
  );
}