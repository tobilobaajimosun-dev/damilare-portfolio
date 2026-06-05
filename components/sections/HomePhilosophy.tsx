"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const beliefs = [
  "Businesses shape markets.",
  "Markets shape communities.",
  "Communities shape nations.",
];

export function HomePhilosophy() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-10 lg:px-16 bg-foreground">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.22em] uppercase text-primary font-sans"
            >
              Philosophy
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-normal text-[clamp(2rem,4vw,3.5rem)] text-background leading-tight"
            >
              Entrepreneurship is more than opportunity. It is responsibility.
            </motion.h2>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8 lg:pt-16"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              {beliefs.map((b) => (
                <p
                  key={b}
                  className="font-display text-xl md:text-2xl text-background/70 leading-snug"
                >
                  {b}
                </p>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 border-t border-background/10 pt-8">
              <p className="text-sm text-background/60 leading-relaxed">
                For Damilare, building companies is not only about growth. It is
                about developing people, creating access, and building systems
                that deliver lasting value.
              </p>
              <p className="text-sm text-background/60 leading-relaxed">
                His work across real estate, fintech, agritech, and
                entrepreneurship reflects a consistent belief: sustainable
                progress requires disciplined builders and long-term thinking.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
