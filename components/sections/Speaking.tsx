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
      className="py-10 md:py-20 px-6 md:px-10 lg:px-16 bg-surface scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        {/* Centered header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center gap-4 mb-10"
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

          <motion.div variants={fadeUp} className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-200"
            >
              Book a speaking engagement
              <ArrowRight size={13} />
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
              className="flex flex-col gap-4 p-6 bg-background rounded-xl border border-border"
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
