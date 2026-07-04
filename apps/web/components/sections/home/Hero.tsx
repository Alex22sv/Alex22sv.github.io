"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

import { siteConfig } from "@/config/site";

import { HeroActions } from "./HeroActions";
import { HeroStats } from "./HeroStats";
import { SiteStats } from "@/lib/content/stats";

interface HeroProps{
  stats?: SiteStats;
}

export function Hero({
  stats,
} : HeroProps) {
  return (
    <Container>
      <section className="flex min-h-[85vh] items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="max-w-4xl"
        >

          <h1
            className="
              mt-8
              font-[family-name:var(--font-sora)]
              text-5xl
              font-bold
              leading-tight
              tracking-tight
              md:text-7xl">

            <span className="block">
            Construyendo software,
            </span>

            <span className="block text-primary">
            compartiendo,
            </span>

            <span className="block">
            y aprendiendo todos los días.
            </span>

            </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
            {siteConfig.description}
          </p>

          <HeroActions />

          <HeroStats
            projects={stats?.projects ?? 0}
            articles={stats?.articles ?? 0}
            technologies={stats?.technologies ?? 0}
            experiments={stats?.experiments ?? 0}
          />
        </motion.div>
      </section>
    </Container>
  );
}