"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;
const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, ease: EXPO_OUT, delay: i * 0.13 },
  }),
};

const scrollFade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 1, ease: POWER3_INOUT, delay },
});

export function SalesAcademyApply() {
  return (
    <section
      id="apply"
      className="bg-foreground px-6 md:px-10 lg:px-16 py-24 md:py-36 relative overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 24px)",
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 24px)",
          ].join(", "),
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[var(--container-default)]">

        {/* Two-column layout — headline left, body+CTA right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">

          {/* LEFT — massive display headline */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="font-display font-normal text-background leading-[0.96] tracking-tight text-[clamp(2.75rem,7vw,6.5rem)]"
          >
            {["Your growth", "begins with", "structure."].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span className="block" custom={i} variants={lineReveal}>
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          {/* RIGHT — body + CTA flush to bottom */}
          <div className="flex flex-col justify-between gap-10 md:gap-20 md:pb-2">

            {/* Subhead */}
            <motion.p
              {...scrollFade(0.25)}
              className="text-base md:text-lg text-background/50 leading-relaxed"
            >
              The Associate Program is for people ready to learn, execute, and
              create meaningful opportunities through real estate. Join a
              community committed to building businesses, developing people, and
              creating lasting impact.
            </motion.p>

            {/* Underlined text CTA — like image 4 */}
            <motion.div
              {...scrollFade(0.4)}
              className="border-t border-background/15 pt-8"
            >
              <a
                href="mailto:damilareoshokoya@gmail.com?subject=The%20Associate%20Program%20%E2%80%94%20Application"
                className="group inline-flex items-center gap-3 text-background text-base md:text-lg font-normal border-b border-background/25 pb-1 hover:border-background transition-colors duration-300"
              >
                Join The Associate Program
                <ArrowUpRight
                  size={18}
                  className="text-background/50 group-hover:text-background group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
