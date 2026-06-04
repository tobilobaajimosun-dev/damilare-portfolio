"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const phrases = [
  "Years of building.",
  "Businesses launched.",
  "Leaders developed.",
  "Communities impacted.",
];

export function HomeImpact() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-surface">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-12"
        >
          {/* Phrases grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 border-t border-border pt-12">
            {phrases.map((phrase) => (
              <motion.p
                key={phrase}
                variants={fadeUp}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold italic text-foreground leading-tight"
              >
                {phrase}
              </motion.p>
            ))}
          </div>

          {/* Supporting paragraph */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Across industries and across Africa, the mission remains the same:
            helping people and organisations unlock greater possibilities.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
