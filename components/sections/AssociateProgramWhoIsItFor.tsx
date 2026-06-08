"use client";

import { motion } from "framer-motion";

const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;
const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, ease: EXPO_OUT, delay: i * 0.1 },
  }),
};

const profiles = [
  "Entrepreneurs expanding into real estate",
  "Professionals seeking additional income",
  "Recent graduates and growth-minded individuals",
  "Business owners exploring property investment",
  "Ambitious people ready to learn and execute",
];

export function AssociateProgramWhoIsItFor() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-foreground relative overflow-hidden">
      {/* Subtle D-arc decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
          style={{ width: "64vh", height: "64vh", right: "-32vh" }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]"
          style={{ width: "42vh", height: "42vh", right: "-21vh" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: POWER3_INOUT }}
              className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans mb-6"
            >
              Who This Is For
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="font-display font-normal text-[clamp(2rem,4.5vw,3.75rem)] leading-tight tracking-tight text-background"
            >
              {["A community", "for builders."].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span className="block" custom={i} variants={lineReveal}>
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: POWER3_INOUT, delay: 0.3 }}
              className="mt-6 text-sm md:text-base text-background/50 leading-relaxed max-w-sm"
            >
              Whether you're starting, transitioning, or scaling — if you're
              ready to learn and execute, there's a place for you here.
            </motion.p>
          </div>

          {/* Right — profile list */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col"
          >
            {profiles.map((p, i) => (
              <motion.li
                key={p}
                custom={i}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: POWER3_INOUT, delay: i * 0.07 },
                  },
                }}
                className="flex items-start gap-4 py-5 border-b border-background/10 last:border-0"
              >
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-base text-background/70 leading-snug">{p}</span>
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </div>
    </section>
  );
}
