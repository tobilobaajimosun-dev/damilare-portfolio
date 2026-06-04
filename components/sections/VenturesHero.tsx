"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function VenturesHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.0]"
          >
            Building Solutions{" "}
            <span className="italic font-normal text-muted-foreground">
              That Matter.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            A collection of ventures focused on solving practical challenges
            across real estate, finance, agriculture, and technology.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
