"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ResourcesHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 items-center text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2.5rem,5.5vw,4.75rem)] tracking-tight text-foreground leading-[1.06]"
          >
            Books.{" "}
            <span className="text-muted-foreground">Speaking.</span>{" "}
            Mentorship.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Resources to help you grow your thinking, build your business, and
            develop as a leader.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
