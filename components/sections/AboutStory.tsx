"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function AboutStory() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-10 lg:px-16 bg-surface">
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
            What I Believe
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6 text-base md:text-lg text-muted-foreground leading-[1.85]"
          >
            <p>
              Entrepreneurship, to me, is not simply the pursuit of profitable
              ventures.
            </p>
            <p>
              It is the work of structuring access to capital, ownership, and
              opportunity.
            </p>
            <p>
              Across African markets, ambition is abundant. What is often missing
              are the systems that transform ambition into durable outcomes.
              Strong ideas need clear incentives, repeatable processes, and
              long-term thinking to become meaningful institutions.
            </p>
            <p>My work has focused on building those foundations.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
