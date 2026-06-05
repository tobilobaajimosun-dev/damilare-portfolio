"use client";

import { motion } from "framer-motion";
import { stats } from "@/content/stats";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const offsets = [0, 80, 0, 80, 40];

export function ImpactStats() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-background border-y border-border overflow-hidden">
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.22em] uppercase text-primary font-sans mb-16"
        >
          Impact
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="font-display font-normal text-3xl md:text-4xl lg:text-5xl text-foreground max-w-2xl leading-tight">
            Building businesses. Developing leaders. Creating opportunities.
          </h2>
        </motion.div>

        {/* Staggered cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col sm:flex-row gap-4 sm:items-start"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={cardIn}
              style={{ marginTop: offsets[i] ?? 0 }}
              className="flex flex-col justify-between gap-8 p-6 bg-surface border border-border rounded-2xl sm:flex-1 min-h-[220px]"
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-primary shrink-0" />
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground font-sans">
                  {stat.label}
                </p>
              </div>

              <p className="font-display font-normal text-5xl md:text-6xl text-foreground tracking-tight">
                {stat.value}
              </p>

              <p className="text-xs text-muted-foreground leading-snug">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
