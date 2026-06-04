"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 max-w-3xl"
        >
          <motion.h1
            variants={staggerContainer}
            className="font-display font-bold leading-[1.0] tracking-tight text-[clamp(3rem,7vw,6rem)]"
          >
            <motion.span variants={fadeUp} className="block text-foreground">
              Entrepreneur.
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="block italic font-normal text-muted-foreground"
            >
              Founder.
            </motion.span>
            <motion.span variants={fadeUp} className="block text-foreground">
              Mentor.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            A builder at heart, committed to creating businesses, developing
            people, and advancing opportunities across Africa.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
