"use client";

import { motion } from "framer-motion";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left — header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase text-primary font-sans"
            >
              03 — Speaking
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight"
            >
              Let&apos;s talk about
              <br />
              <span className="italic font-normal text-muted-foreground">
                what matters.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground leading-relaxed"
            >
              I speak from experience, not theory. Whether it&apos;s an intimate
              founder gathering or a room of thousands, the conversation always
              circles back to the same thing: building with intention.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/40 pb-0.5 hover:text-primary hover:border-primary transition-colors duration-200"
              >
                Book a speaking engagement
                <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — topics grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:pt-14"
          >
            {speakingTopics.map((topic, i) => (
              <motion.div
                key={topic.title}
                variants={fadeUp}
                className="flex flex-col gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary/25 hover:shadow-sm transition-all duration-300"
              >
                <span className="text-xs text-primary font-mono font-medium">
                  0{i + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
