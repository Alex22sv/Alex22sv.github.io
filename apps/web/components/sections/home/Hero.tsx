"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

import { personal } from "@/data/personal";

import { HeroActions } from "./HeroActions";
import { HeroStats } from "./HeroStats";

export function Hero() {
  return (
    <Container>
      <section className="flex min-h-[85vh] items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="max-w-4xl"
        >
          <Badge>
            📚 Personal Digital Library
          </Badge>

          <h1 className="mt-8 font-[family-name:var(--font-sora)] text-6xl font-bold leading-tight lg:text-7xl">
            {personal.tagline}
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
            {personal.description}
          </p>

          <HeroActions />

          <HeroStats />
        </motion.div>
      </section>
    </Container>
  );
}