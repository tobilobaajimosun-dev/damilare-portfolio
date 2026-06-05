"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const topics = [
  "Entrepreneurship",
  "Leadership",
  "Sales Systems",
  "Real Estate Innovation",
  "Business Growth",
];

export function HomeMentorship() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-surface border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8"
          >
            <motion.p variants={fadeUp} className="text-xs tracking-[0.22em] uppercase text-primary font-sans">
              Mentorship &amp; Speaking
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight"
            >
              Developing leaders who create impact.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              Damilare mentors entrepreneurs, founders, sales professionals, and
              emerging leaders navigating growth across African markets.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-all duration-200"
              >
                Book A Session
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary text-primary text-sm font-medium rounded-full hover:bg-primary/10 transition-all duration-200"
              >
                Invite To Speak
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — topic cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-3 lg:pt-20"
          >
            <motion.p variants={fadeUp} className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-2">
              Speaking Topics
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topics.map((topic, i) => (
                <motion.div
                  key={topic}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-5 rounded-2xl border border-border bg-background hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <span className="text-xs text-primary font-mono mt-0.5 shrink-0">0{i + 1}</span>
                  <p className="font-display text-lg md:text-xl font-normal text-foreground leading-snug">
                    {topic}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
