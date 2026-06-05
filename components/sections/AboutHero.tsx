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
          <motion.h1
            variants={fadeUp}
            className="font-display font-normal leading-[1.06] tracking-tight text-foreground text-[clamp(2.25rem,5.5vw,4.75rem)]"
          >
            Entrepreneurship was never only about building{" "}
            <span className="text-muted-foreground">
              companies.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            It has always been about building people, creating opportunities,
            and solving problems that matter.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
