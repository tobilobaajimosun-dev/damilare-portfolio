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

// Deterministic barcode heights per card — seeded so they never re-randomise
const barcodes = [
  [60,100,40,80,50,90,30,70,100,45,80,60,35,90,55,70,40,85,65,50,75,30,90,60,45,80],
  [40,75,100,55,85,30,70,50,90,40,65,85,45,70,55,40,90,60,75,35,50,80,40,70,90,55],
  [80,45,65,90,35,75,55,100,40,80,60,35,85,55,70,45,90,65,50,80,40,75,60,90,35,70],
  [55,85,40,70,100,50,80,60,35,90,45,75,55,85,40,70,60,90,50,65,80,35,70,55,90,45],
  [70,50,85,45,65,90,40,80,55,35,75,60,90,50,80,45,65,35,85,70,55,90,40,65,80,50],
];

export function ImpactStats() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-foreground overflow-hidden">
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        {/* Section header — no eyebrow, just the h2 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-background max-w-2xl leading-tight">
            Building businesses. Developing leaders. Creating opportunities.
          </h2>
        </motion.div>

        {/* Cards — flat row, dark style */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="hidden sm:flex gap-3 items-stretch"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={cardIn}
              className="flex flex-col flex-1 bg-white/[0.06] rounded-2xl p-6 min-h-[300px]"
            >
              {/* Big number */}
              <p className="font-display font-normal text-[clamp(2.8rem,4.5vw,4.5rem)] text-white tracking-tight leading-none">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-[0.6rem] tracking-[0.22em] uppercase text-white/50 font-sans mt-4">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-[0.72rem] text-white/30 leading-snug mt-2 flex-1">
                {stat.description}
              </p>

              {/* Barcode visualisation */}
              <div className="flex gap-[2px] items-end h-10 mt-6">
                {barcodes[i]?.map((h, j) => (
                  <div
                    key={j}
                    className="flex-1 bg-white/20 rounded-[1px]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: simple vertical stack */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex sm:hidden flex-col gap-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={cardIn}
              className="flex items-center justify-between gap-6 p-5 bg-white/[0.06] rounded-2xl"
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
