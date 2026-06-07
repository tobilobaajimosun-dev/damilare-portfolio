"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E")`;

const focusAreas = [
  {
    label: "Technology",
    description:
      "Technology creates leverage. It allows good systems to reach more people and solve problems at scale.",
  },
  {
    label: "Finance",
    description:
      "Financial platforms create access. Well-designed products reduce barriers and enable broader economic participation.",
  },
  {
    label: "Real Estate",
    description:
      "Property ownership is one of the strongest foundations for long-term stability. Expanding access requires disciplined execution and trusted systems.",
  },
  {
    label: "Leadership",
    description:
      "Great businesses are built by capable people. Developing leaders and building strong teams is as important as building products.",
  },
];

const commitments = [
  {
    label: "Building",
    body: "Creating platforms that solve practical problems and expand access to capital and ownership.",
  },
  {
    label: "Publishing",
    body: "Sharing ideas across business, leadership, and entrepreneurship for founders who think long-term.",
  },
  {
    label: "Developing",
    body: "Investing in the next generation of capable leaders who build responsibly and think beyond themselves.",
  },
];

export function Philosophy() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-background">

      {/* ── Areas of Focus ─────────────────────────────────────── */}
      <div
        className="py-20 md:py-32 px-6 md:px-10 lg:px-16 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.05 0.015 152)" }}
      >
        {/* Noise overlay — absolute, not fixed */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-30"
          style={{ backgroundImage: NOISE_SVG, backgroundSize: "200px 200px" }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-[var(--container-default)]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="font-display font-normal text-[clamp(2rem,5vw,4rem)] leading-tight tracking-tight text-white mb-8 md:mb-14 max-w-lg"
          >
            Where I focus<br />my work.
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {focusAreas.map(({ label, description }, i) => {
              const isActive = active === i;
              return (
                <motion.button
                  key={label}
                  variants={fadeUp}
                  onClick={() => setActive(i)}
                  className={`relative text-left rounded-2xl overflow-hidden transition-colors duration-300 flex flex-col ${
                    isActive
                      ? "bg-[oklch(0.12_0.02_152)]"
                      : "bg-[oklch(0.09_0.01_152)]"
                  }`}
                  style={{ minHeight: isActive ? 200 : 120 }}
                  aria-pressed={isActive}
                >
                  {/* Noise */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: NOISE_SVG, backgroundSize: "200px 200px" }}
                    aria-hidden
                  />
                  {/* Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl ring-1 ring-inset pointer-events-none transition-colors duration-300 ${
                      isActive ? "ring-primary/30" : "ring-white/[0.06]"
                    }`}
                    aria-hidden
                  />

                  <div className="relative flex flex-col h-full p-5 sm:p-6 md:p-8 gap-3">
                    <p className="font-display font-normal text-white text-lg sm:text-[clamp(1.25rem,2.5vw,1.75rem)] leading-tight">
                      {label}
                    </p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          key="desc"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.25 }}
                          className="text-sm text-white/50 leading-relaxed flex-1"
                        >
                          {description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <div className="flex justify-between items-end mt-auto pt-2">
                      {isActive ? (
                        <span className="block w-6 h-px bg-primary" />
                      ) : (
                        <span />
                      )}
                      <span
                        className="text-white/30 text-lg leading-none select-none"
                        aria-hidden
                      >
                        {isActive ? "−" : "+"}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ── Mission ────────────────────────────────────────────── */}
      <div className="py-20 md:py-36 px-6 md:px-10 lg:px-16 bg-black">
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center gap-10 md:gap-14"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-normal text-[clamp(1.75rem,4vw,3.25rem)] leading-tight tracking-tight text-white text-center"
            >
              The mission{" "}
              <span className="text-white/30">remains simple.</span>
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
            >
              {commitments.map(({ label, body }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="relative overflow-hidden border border-white/10 flex flex-col gap-4 p-6 sm:p-8 md:p-10"
                  style={{
                    minHeight: 220,
                    borderRadius: "1rem",
                    backgroundColor: "oklch(0.08 0.008 152)",
                  }}
                >
                  {/* D-shape arc — circle centered on the right edge */}
                  <div
                    className="absolute top-0 bottom-0 right-0 translate-x-1/2 rounded-full border border-white/[0.12] pointer-events-none"
                    style={{ aspectRatio: "1 / 1" }}
                    aria-hidden
                  />

                  <p className="relative font-display font-normal text-white text-lg md:text-xl leading-tight">
                    Continue {label}.
                  </p>
                  <p className="relative text-sm text-white/40 leading-relaxed">
                    {body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
