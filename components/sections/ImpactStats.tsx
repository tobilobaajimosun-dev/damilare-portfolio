"use client";

import { motion } from "framer-motion";
import { stats } from "@/content/stats";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ImpactStats() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-background border-y border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="flex flex-col gap-2"
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {stat.value}
                <span className="text-primary">.</span>
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-snug max-w-[12ch]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
