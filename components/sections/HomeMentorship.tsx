"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
            <motion.p variants={fadeUp} className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans">
              Mentorship &amp; Speaking
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground leading-tight"
            >
              Developing leaders who create impact.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-[1.8]">
              Damilare mentors entrepreneurs, founders, sales professionals, and
              emerging leaders navigating growth across African markets.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/85 transition-colors duration-200"
              >
                Book a Session
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:bg-surface hover:border-foreground/40 transition-colors duration-200"
              >
                Invite to Speak
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — topic cards, no arrows */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 border border-border rounded-2xl overflow-hidden"
          >
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                variants={fadeUp}
                className={[
                  "flex flex-col gap-3 p-6 bg-background hover:bg-surface transition-colors duration-200",
                  i % 2 === 0 && i < topics.length - 1 ? "sm:border-r border-border" : "",
                  i < topics.length - 2 ? "border-b border-border" : "",
                  i === topics.length - 2 ? "sm:border-b border-border" : "",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-primary font-mono shrink-0">0{i + 1}</span>
                  <p className="font-display font-normal text-lg text-foreground leading-snug">
                    {topic.title}
                  </p>
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
