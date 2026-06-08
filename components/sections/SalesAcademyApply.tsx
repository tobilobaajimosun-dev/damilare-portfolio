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

export function SalesAcademyApply() {
  return (
    <section
      id="apply"
      className="py-28 md:py-40 px-6 md:px-10 lg:px-16 bg-foreground relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 24px)",
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 24px)",
          ].join(", "),
        }}
        aria-hidden
      />

      {/* D-arc */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
          style={{ width: "72vh", height: "72vh", right: "-36vh" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-default)]">
        <div className="max-w-3xl flex flex-col gap-10">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: POWER3_INOUT }}
            className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans"
          >
            Get Started
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="font-display font-normal leading-[1.02] tracking-tight text-[clamp(2rem,5vw,4.5rem)] text-background"
          >
            {["Your growth begins", "with structure."].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span className="block" custom={i} variants={lineReveal}>
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: POWER3_INOUT, delay: 0.25 }}
            className="text-base md:text-lg text-background/50 leading-relaxed max-w-xl"
          >
            The Associate Program is for people ready to learn, execute, and
            create meaningful opportunities through real estate. Join a
            community committed to building businesses, developing people, and
            creating lasting impact.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: POWER3_INOUT, delay: 0.35 }}
          >
            <a
              href="mailto:damilareoshokoya@gmail.com?subject=The%20Associate%20Program%20%E2%80%94%20Application"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200"
            >
              Join The Associate Program
              <ArrowRight size={14} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
