"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "8", label: "Weeks" },
  { value: "Live", label: "Sessions" },
  { value: "30", label: "Seats max" },
];

export function SalesAcademyHero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 pt-36 px-6 md:px-10 lg:px-16 bg-foreground relative overflow-hidden">
      {/* Subtle grid — matches homepage hero */}
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
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10 md:gap-14"
        >
          {/* Label */}
          <motion.p
            variants={fadeUp}
            className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans"
          >
            Sales Masterclass
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-normal leading-[1.02] tracking-tight text-background text-[clamp(3rem,7vw,6.5rem)] max-w-5xl"
          >
            Close with conviction.{" "}
            <span className="text-background/30">Build with systems.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-background/50 max-w-lg leading-relaxed"
          >
            A practical training programme for entrepreneurs, founders, and
            sales professionals — built around the systems that actually close
            deals.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-0 border-t border-background/10 pt-10 flex-wrap"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-1 pr-10 mr-10 ${
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

            {/* CTA inline with stats on desktop */}
            <a
              href="#apply"
              className="ml-auto inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200 shrink-0 mt-6 md:mt-0"
            >
              Apply Now
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
