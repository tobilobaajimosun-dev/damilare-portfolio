"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function AboutHero() {
  return (
    <section className="pt-36 pb-16 md:pt-52 md:pb-36 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7 md:gap-10 max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display font-normal leading-[1.02] tracking-tight text-foreground text-[clamp(2rem,5vw,4.5rem)] max-w-3xl"
          >
            Building platforms that{" "}
            <span className="text-muted-foreground">expand access to ownership.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            <p>
              My work sits across technology, finance, and real estate — focused
              on solving structural problems that limit economic participation
              across emerging markets.
            </p>
            <p>
              I believe sustainable growth is built through disciplined
              execution, responsible leadership, and institutions that create
              value beyond the present moment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
