import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutPhilosophy } from "@/components/about/AboutPhilosophy";
import { AboutTechnologies } from "@/components/about/AboutTechnologies";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutWebsite } from "@/components/about/AboutWebsite";
import { AboutNow } from "@/components/about/AboutNow";
import { AboutContact } from "@/components/about/AboutContact";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">

      <AboutHero />

      <AboutStory />

      <AboutPhilosophy />

      <AboutTechnologies />

      <AboutTimeline />

      <AboutWebsite />

      <AboutNow />

      <AboutContact />

    </main>
  );
}