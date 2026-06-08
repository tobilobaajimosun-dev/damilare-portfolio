"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Detroit Paris easing signatures
const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;
const POWER3_OUT  = [0.33, 1, 0.68, 1] as const;
const EXPO_OUT    = [0.16, 1, 0.3, 1] as const;

// Line-reveal variant — each line slides up from behind overflow-hidden parent
const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, ease: EXPO_OUT, delay: i * 0.12 },
  }),
};

// Fade-in — Detroit Paris standard (opacity only, power3.inOut)
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: POWER3_INOUT, delay } },
});

const stats = [
  { value: "8",    label: "Weeks" },
  { value: "Live", label: "Sessions" },
  { value: "30",   label: "Seats max" },
];

const headline = ["Close with conviction.", "Build with systems."];

export function SalesAcademyHero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 pt-36 px-6 md:px-10 lg:px-16 bg-foreground relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 24px)",
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 24px)",
          ].join(", "),
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[var(--container-default)]">
        <div className="flex flex-col gap-10 md:gap-14">

          {/* Eyebrow — fade in */}
          <motion.p
            variants={fadeIn(0.1)}
            initial="hidden"
            animate="visible"
            className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans"
          >
            Sales Masterclass
          </motion.p>

          {/* Headline — per-line mask reveal */}
          <motion.h1
            initial="hidden"
            animate="visible"
            className="font-display font-normal leading-[1.02] tracking-tight text-[clamp(3rem,7vw,6.5rem)]"
          >
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 1 ? "text-background/30" : "text-background"}`}
                  custom={i}
                  variants={lineReveal}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeIn(0.5)}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg text-background/50 max-w-lg leading-relaxed"
          >
            A practical training programme for entrepreneurs, founders, and
            sales professionals — built around the systems that actually close
            deals.
          </motion.p>

          {/* Stats row + CTA */}
          <motion.div
            variants={fadeIn(0.7)}
            initial="hidden"
            animate="visible"
            className="flex items-center flex-wrap gap-0 border-t border-background/10 pt-10"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-1 pr-8 mr-8 ${
                  i < stats.length - 1 ? "border-r border-background/10" : ""
                }`}
              >
                <p className="font-display text-2xl md:text-3xl text-background leading-none">
                  {s.value}
                </p>
                <p className="text-[0.65rem] text-background/30 uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}

            <a
              href="#apply"
              className="ml-auto inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200 shrink-0 mt-6 md:mt-0"
            >
              Apply Now
              <ArrowRight size={14} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
