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

// All bars within a card are the SAME height (h-full fills the container).
// The container height per card is what changes — shortest for card 1,
// tallest for card 5 — so the visual scale reads correctly across cards.
const BARS = 30;
const barcodeHeight = ["h-8", "h-12", "h-16", "h-22", "h-28"];

export function ImpactStats() {
  return (
    <section className="py-10 md:py-16 px-6 md:px-10 lg:px-16 bg-foreground overflow-hidden">
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-background leading-tight">
            Building businesses,
            <br />developing leaders.
          </h2>
        </motion.div>

        {/* Desktop — transparent cards, divide-x separators, uniform bars per card */}
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
              <p className="text-[0.6rem] tracking-[0.1em] uppercase text-white/50 font-sans mt-4">
                {stat.label}
              </p>
              <p className="text-[0.72rem] text-white/30 leading-snug mt-2 flex-1">
                {stat.description}
              </p>

              {/* Uniform-height bars — all same height within this card.
                  Container height (barcodeHeight) grows per card to show scale. */}
              <div className={`flex gap-px items-end ${barcodeHeight[i]} mt-6`}>
                {Array.from({ length: BARS }).map((_, j) => (
                  <div
                    key={j}
                    className="flex-1 h-full bg-white/[0.18] rounded-[1px]"
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
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={cardIn}
              className="flex items-center justify-between gap-6 py-5"
            >
              <div className="flex flex-col gap-1.5">
                <p className="text-[0.6rem] tracking-[0.1em] uppercase text-white/50 font-sans">
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
