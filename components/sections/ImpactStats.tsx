"use client";

import { motion } from "framer-motion";
import { stats } from "@/content/stats";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

// Alternating stagger offsets — faithful to image 2 zigzag
const offsets = [0, 80, 0, 80, 40];

// Small decorative icon per card — mirrors image 2's watermark icons
const icons = ["✦", "◈", "⊕", "◉", "✧"];

export function ImpactStats() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-background border-y border-border overflow-hidden">
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans mb-3">
              Impact
            </p>
            <h2 className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground max-w-2xl leading-tight">
              Building businesses. Developing leaders. Creating opportunities.
            </h2>
          </motion.div>
        </div>

        {/* Staggered cards — image 2 layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="hidden sm:flex gap-4 items-start"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={cardIn}
              style={{ marginTop: offsets[i] ?? 0 }}
              className="flex flex-col flex-1 bg-surface border border-border rounded-[1.25rem] p-6 min-h-[280px] justify-between"
            >
              {/* Tag */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-primary shrink-0" />
                <p className="text-[0.6rem] tracking-[0.22em] uppercase text-muted-foreground font-sans leading-none">
                  {stat.label}
                </p>
              </div>

              {/* Number */}
              <p className="font-display font-normal text-[clamp(3rem,5vw,5rem)] text-foreground tracking-tight leading-none">
                {stat.value}
              </p>

              {/* Divider + description + icon */}
              <div className="flex flex-col gap-3">
                <div className="h-px bg-border" />
                <div className="flex items-end justify-between gap-2">
                  <p className="text-[0.7rem] text-muted-foreground leading-snug max-w-[14ch]">
                    {stat.description}
                  </p>
                  <span className="text-muted-foreground/30 text-xl shrink-0 leading-none">
                    {icons[i]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: simple vertical stack */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex sm:hidden flex-col gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardIn}
              className="flex items-center justify-between gap-6 p-5 bg-surface border border-border rounded-2xl"
            >
              <div className="flex flex-col gap-1">
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground font-sans">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground leading-snug">
                  {stat.description}
                </p>
              </div>
              <p className="font-display text-4xl text-foreground tracking-tight shrink-0">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
