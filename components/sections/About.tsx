"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-content)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-10"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-tight text-foreground"
          >
            The Foundation
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6 text-base md:text-lg text-muted-foreground leading-[1.85]"
          >
            <p>
              My perspective is shaped by faith, family, and stewardship.
            </p>
            <p>
              Being a husband has reinforced the belief that leadership is not
              about recognition. It is about responsibility. What is built
              should be sustainable, beneficial to others, and capable of
              serving people long after the initial excitement has passed.
            </p>
            <p>
              These values influence how I approach business, partnerships,
              mentorship, and decision-making.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
