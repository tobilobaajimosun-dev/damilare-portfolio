"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { speakingTopics } from "@/content/speaking";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Speaking() {
  return (
    <section
      id="speaking"
      className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-surface scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        {/* Centered header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center gap-6 mb-14"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground leading-tight"
          >
            Let&apos;s talk about{" "}
            <span className="text-muted-foreground">what matters.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-[1.8] max-w-xl">
            I speak from experience, not theory. Whether it&apos;s an intimate
            founder gathering or a room of thousands, the conversation always
            circles back to the same thing: building with intention.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/40 pb-0.5 hover:text-primary hover:border-primary transition-colors duration-200"
            >
              Book a speaking engagement
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        {/* 2-col topic cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {speakingTopics.map((topic, i) => (
            <motion.div
              key={topic.title}
              variants={fadeUp}
              className="flex flex-col gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary/25 hover:shadow-sm transition-all duration-300"
            >
              <h3 className="font-display text-xl font-normal text-foreground leading-snug">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
