"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const lines = [
  { text: "Build systems.", accent: false },
  { text: "Develop people.", accent: false },
  { text: "Multiply impact.", accent: true },
];

const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const bodyBlur: Variants = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export function HomeVision() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-10 lg:px-16 bg-surface">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="max-w-4xl">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4 mb-14"
          >
            {lines.map(({ text, accent }) => (
              <motion.p
                key={text}
                variants={blurUp}
                className={`font-display font-normal leading-tight text-[clamp(2.4rem,5vw,4.5rem)] tracking-tight ${
                  accent ? "text-primary" : "text-foreground"
                }`}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-4 border-t border-border pt-10 max-w-2xl"
          >
            <motion.p variants={bodyBlur} className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Sustainable growth does not happen by accident.
            </motion.p>
            <motion.p variants={bodyBlur} className="text-base md:text-lg text-muted-foreground leading-relaxed">
              It requires structure, disciplined execution, and leaders willing
              to think beyond themselves. Across business, real estate,
              mentorship, and leadership development, the goal remains the same:
              create value that lasts.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
