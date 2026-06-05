"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/content/testimonials";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Testimonials() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-surface">
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="font-display font-normal text-[clamp(2.25rem,4.5vw,3.75rem)] tracking-tight text-foreground leading-tight mb-20"
        >
          What clients{" "}
          <span className="text-muted-foreground">say.</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col divide-y divide-border"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flex flex-col gap-6 py-12 lg:py-16"
            >
                  {/* Quote + attribution */}
              <div className="flex flex-col gap-8">
                <p className="font-display font-normal text-[clamp(1.35rem,2.5vw,1.9rem)] text-foreground leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground tracking-wide mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
