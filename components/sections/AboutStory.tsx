"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function AboutStory() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-10 lg:px-16 bg-surface">
      <div className="mx-auto w-full max-w-[var(--container-content)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-10 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.2em] uppercase text-primary font-sans"
          >
            The Story
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-7 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            <p>
              My work spans property technology, real estate finance, financial
              inclusion, agricultural innovation, leadership development, and
              entrepreneurship.
            </p>
            <p>
              From helping ordinary Nigerians access homeownership to empowering
              farmers with better financing, every venture has been shaped by a
              single question — what does this community actually need?
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground pt-8"
          >
            Create value that lasts.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
