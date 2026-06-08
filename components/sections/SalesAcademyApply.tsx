"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;
const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, ease: EXPO_OUT, delay: i * 0.14 },
  }),
};

// Linear hero grid pattern at ~5% opacity on dark bg,
// with a gradient that fades to near-black at the base.
const sectionBg = [
  // Fade to dark at base — matches site's dark-green foreground
  "linear-gradient(to bottom, transparent 55%, oklch(0.09 0.02 152) 100%)",
  // Vertical lines at 5% opacity
  "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 24px)",
  // Horizontal lines at 3% opacity
  "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 24px)",
].join(", ");

export function SalesAcademyApply() {
  return (
    <section
      className="py-28 md:py-40 px-6 bg-foreground relative overflow-hidden"
      style={{ backgroundImage: sectionBg }}
    >
      <div className="relative mx-auto w-full max-w-[var(--container-default)] flex flex-col items-center text-center gap-8 md:gap-10">

        {/* Headline — max 2 lines, capped so it stays on 2 lines in centered layout */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="font-display font-normal text-background leading-[1.0] tracking-tight text-[clamp(2.5rem,5vw,3.75rem)] max-w-2xl"
        >
          {["Your growth begins", "with structure."].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span className="block" custom={i} variants={lineReveal}>
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        {/* Body — succinct */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: POWER3_INOUT, delay: 0.2 }}
          className="text-base md:text-lg text-background/50 leading-relaxed max-w-lg"
        >
          Join a structured community committed to your long-term growth
          in real estate — through systems, mentorship, and accountability.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: POWER3_INOUT, delay: 0.3 }}
        >
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200"
          >
            Join The Associate Program
            <ArrowRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
