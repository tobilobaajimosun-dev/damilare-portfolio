"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function AboutHero() {
  return (
    <section className="pt-44 pb-24 md:pt-52 md:pb-36 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10 max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans"
          >
            About
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display font-normal leading-[1.06] tracking-tight text-foreground text-[clamp(2.25rem,5.5vw,4.75rem)] max-w-3xl"
          >
            I build businesses, platforms, and systems that expand access to ownership.
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            <p>
              My work sits across technology, finance, and real estate, with a
              focus on solving structural problems that limit economic
              participation across emerging markets.
            </p>
            <p>
              I believe sustainable growth is built through disciplined
              execution, responsible leadership, and institutions that create
              value beyond the present moment.
            </p>
            <p>This website is a reflection of that work.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
