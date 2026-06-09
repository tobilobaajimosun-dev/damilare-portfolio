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
    <section className="py-10 md:py-20 px-6 md:px-10 lg:px-16 bg-surface border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center gap-5 md:gap-8"
        >

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground leading-tight max-w-xl"
          >
            Developing leaders who create impact.
          </motion.h2>

          {/* Sub-copy */}
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-[1.8] max-w-md">
            I mentor entrepreneurs, founders, sales professionals, and emerging
            leaders navigating growth across African markets.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200"
            >
              Book a Session
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-200"
            >
              Invite to Speak
            </Link>
          </motion.div>

          {/* Topic cards — 3-col grid, below CTAs */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-border rounded-2xl overflow-hidden w-full mt-4"
          >
            {topics.map((topic) => (
              <motion.div
                key={topic.title}
                variants={fadeUp}
                className="flex flex-col gap-3 p-6 bg-background hover:bg-surface transition-colors duration-200 text-left border-b border-border sm:border-r"
              >
                <p className="font-display font-normal text-lg text-foreground leading-snug">
                  {topic.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
