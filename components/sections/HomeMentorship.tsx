"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const topics = [
  {
    title: "Entrepreneurship",
    description: "Building ventures with purpose, discipline, and long-term vision.",
  },
  {
    title: "Leadership",
    description: "Cultivating the mindsets that move organisations forward.",
  },
  {
    title: "Sales Systems",
    description: "Frameworks that close deals and build lasting relationships.",
  },
  {
    title: "Real Estate Innovation",
    description: "Technology reshaping property access across African markets.",
  },
  {
    title: "Business Growth",
    description: "Scaling beyond the founder and into durable systems.",
  },
  {
    title: "Financial Inclusion",
    description: "Creating pathways to economic participation and ownership.",
  },
];

export function HomeMentorship() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-surface border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">

          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8 lg:sticky lg:top-28"
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
            <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-0.5 hover:text-primary hover:border-primary transition-colors duration-200 self-start"
              >
                Book a session
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 self-start"
              >
                Invite to speak
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — topic cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-x-0 sm:divide-y-0 divide-border border border-border rounded-2xl overflow-hidden"
          >
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                variants={fadeUp}
                className={`flex flex-col gap-3 p-6 bg-background hover:bg-surface transition-colors duration-200 border-border
                  ${i < topics.length - 2 ? "sm:border-b" : ""}
                  ${i % 2 === 0 ? "sm:border-r" : ""}
                `}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-primary font-mono shrink-0">0{i + 1}</span>
                    <p className="font-display text-lg font-normal text-foreground leading-snug">
                      {topic.title}
                    </p>
                  </div>
                  <ArrowUpRight size={14} className="text-muted-foreground/40 shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">
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
