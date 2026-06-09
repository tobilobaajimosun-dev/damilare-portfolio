"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { talks } from "@/content/talks";

export function Talks() {
  return (
    <section className="py-10 md:py-20 px-6 md:px-10 lg:px-16 bg-surface border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4 mb-10"
        >
          <motion.p variants={fadeUp} className="text-[0.65rem] tracking-[0.1em] uppercase text-primary font-sans">
            Talks &amp; Media
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground"
          >
            On the{" "}
            <span className="text-muted-foreground">stage.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col divide-y divide-border"
        >
          {talks.map((talk, i) => (
            <motion.div
              key={talk.title}
              variants={fadeUp}
              className="flex flex-col gap-0.5 py-5"
            >
              <div className="flex flex-col gap-0.5">
                <p className="font-display text-xl font-normal text-foreground leading-snug">
                  {talk.title}
                </p>
                <p className="text-sm text-muted-foreground">{talk.venue}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
