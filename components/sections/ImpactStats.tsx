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

// 32 bars per card, sorted ascending — shortest left, tallest right
// Each card grows taller in proportion to the stat magnitude
const barcodes = [
  // Card 1 — 2 books (smallest, tops at ~62)
  [14,16,17,19,20,22,23,25,26,28,30,32,33,35,36,38,40,42,43,45,47,49,51,53,56,58,60,61,62,62,62,62],
  // Card 2 — 3 programmes
  [16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,69,70,70,70,70],
  // Card 3 — 5+ roles
  [18,21,24,26,29,32,34,37,39,42,44,47,50,52,55,57,60,62,65,67,69,72,74,76,78,79,80,80,80,80,80,80],
  // Card 4 — 19 countries
  [20,23,27,30,33,37,40,43,46,49,52,55,58,61,64,67,70,72,75,77,80,82,84,86,87,88,88,88,88,88,88,88],
  // Card 5 — 3 500+ lives (tallest, hits 100)
  [24,27,31,34,38,41,45,48,52,55,59,62,66,69,72,75,78,81,84,87,90,92,94,96,97,98,99,100,100,100,100,100],
];

// Container height grows with each card to visually show scale
const barcodeHeight = ["h-10", "h-14", "h-18", "h-22", "h-28"];

export function ImpactStats() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-foreground overflow-hidden">
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-background leading-tight">
            Building businesses,
            <br />developing leaders.
          </h2>
        </motion.div>

        {/* Desktop — no card backgrounds, vertical dividers, variable bar heights */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="hidden sm:flex divide-x divide-white/[0.08]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={cardIn}
              className="flex flex-col flex-1 px-6 first:pl-0 last:pr-0 min-h-[300px]"
            >
              <p className="font-display font-normal text-[clamp(2.8rem,4.5vw,4.5rem)] text-white tracking-tight leading-none">
                {stat.value}
              </p>
              <p className="text-[0.6rem] tracking-[0.22em] uppercase text-white/50 font-sans mt-4">
                {stat.label}
              </p>
              <p className="text-[0.72rem] text-white/30 leading-snug mt-2 flex-1">
                {stat.description}
              </p>

              {/* Ascending barcode — height grows per card to show relative scale */}
              <div className={`flex gap-px items-end ${barcodeHeight[i]} mt-6`}>
                {barcodes[i]?.map((h, j) => (
                  <div
                    key={j}
                    className="flex-1 bg-white/[0.18] rounded-[1px]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile — stacked */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex sm:hidden flex-col divide-y divide-white/[0.08]"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardIn}
              className="flex items-center justify-between gap-6 py-5"
            >
              <div className="flex flex-col gap-1.5">
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/50 font-sans">
                  {stat.label}
                </p>
                <p className="text-sm text-white/30 leading-snug">
                  {stat.description}
                </p>
              </div>
              <p className="font-display text-4xl text-white tracking-tight shrink-0">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
