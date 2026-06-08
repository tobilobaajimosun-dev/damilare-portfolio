"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { BackgroundPattern } from "@/components/ui/BackgroundPattern";

export function VenturesHero() {
  return (
    <section
      className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10 lg:px-16 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, transparent 15%, oklch(0.99 0 0) 72%)",
      }}
    >
      <BackgroundPattern variant="light" />

      {/* D D watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
      >
        <span
          className="font-display font-normal text-foreground/[0.03] leading-none tracking-[-0.05em] whitespace-nowrap"
          style={{ fontSize: "clamp(18rem, 40vw, 38rem)" }}
        >
          D D
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 items-center text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2.5rem,5.5vw,4.75rem)] tracking-tight text-foreground leading-[1.06]"
          >
            Building Solutions
            <br />
            <span className="text-muted-foreground">That Matter.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            A collection of ventures focused on solving practical challenges
            across real estate, finance, agriculture, and technology.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
