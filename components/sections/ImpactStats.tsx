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

// Barcode heights sorted ascending — shortest bar left, tallest right
const barcodes = [
  [30,30,35,40,40,45,45,50,50,55,60,60,60,65,70,70,75,80,80,80,85,90,90,90,100,100],
  [30,35,40,40,40,40,45,50,50,55,55,55,60,65,70,70,70,75,75,80,85,85,90,90,90,100],
  [35,35,35,40,40,45,45,50,55,55,60,60,65,65,70,70,75,75,80,80,80,85,90,90,90,100],
  [35,35,40,40,45,45,50,50,55,55,55,60,60,65,70,70,70,75,80,80,85,85,90,90,90,100],
  [35,35,40,40,45,45,50,50,50,55,55,60,65,65,65,70,70,75,80,80,80,85,85,90,90,90],
];

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
          <h2 className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-background max-w-2xl leading-tight">
            Building businesses. Developing leaders. Creating opportunities.
          </h2>
        </motion.div>

        {/* Cards — no background, vertical dividers */}
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

              {/* Barcode — ascending left to right */}
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
          className="flex sm:hidden flex-col divide-y divide-white/[0.08]"
        >
          {stats.map((stat, i) => (
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
