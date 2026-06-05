"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/content/testimonials";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Testimonials() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-surface">
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-4 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-tight"
          >
            What clients{" "}
            <span className="text-muted-foreground">say.</span>
          </motion.h2>
        </motion.div>

        {/* Testimonial cards — one per row, large */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end p-10 md:p-14 bg-background rounded-3xl border border-border"
            >
              {/* Quote */}
              <div className="flex flex-col gap-6">
                <span className="font-display text-primary text-5xl leading-none select-none">&ldquo;</span>
                <p className="font-display text-2xl md:text-3xl lg:text-4xl font-normal text-foreground leading-snug -mt-4">
                  {t.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="flex flex-col gap-1 lg:text-right shrink-0">
                <p className="text-sm font-semibold text-foreground tracking-tight">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">
                  {t.role}
                </p>
                <p className="text-[0.65rem] text-primary font-mono mt-2">
                  0{i + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
