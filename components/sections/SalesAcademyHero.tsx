"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;
const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, ease: EXPO_OUT, delay: i * 0.12 },
  }),
};

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: POWER3_INOUT, delay } },
});

const headlineLines = [
  { text: "Build More Than", muted: false },
  { text: "A Career.", muted: false },
  { text: "Build a future", muted: true },
  { text: "in real estate.", muted: true },
];

export function SalesAcademyHero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 pt-36 px-6 md:px-10 lg:px-16 bg-foreground relative overflow-hidden">
      {/* Grid */}
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

          {/* Eyebrow */}
          <motion.p
            variants={fadeIn(0.1)}
            initial="hidden"
            animate="visible"
            className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans"
          >
            The Associate Program
          </motion.p>

          {/* Headline — per-line mask reveal */}
          <motion.h1
            initial="hidden"
            animate="visible"
            className="font-display font-normal leading-[1.02] tracking-tight text-[clamp(2.75rem,6.5vw,6rem)]"
          >
            {headlineLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className={`block ${line.muted ? "text-background/30" : "text-background"}`}
                  custom={i}
                  variants={lineReveal}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={fadeIn(0.6)}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg text-background/50 max-w-lg leading-relaxed"
          >
            A structured community designed to train, develop, and reward
            ambitious professionals seeking long-term growth in real estate.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeIn(0.8)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4 border-t border-background/10 pt-10"
          >
            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200"
            >
              Join The Program
              <ArrowRight size={14} />
            </a>
            <a
              href="#programme"
              className="text-sm text-background/40 hover:text-background/70 transition-colors duration-200"
            >
              Learn How It Works ↓
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
