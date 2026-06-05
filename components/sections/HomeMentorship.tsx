"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const pillars = ["Speaking", "Workshops", "Training Programs", "Mentorship"];

export function HomeMentorship() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-surface">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-tight"
            >
              Helping people see bigger{" "}
              <span className="text-muted-foreground">
                possibilities.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground leading-relaxed"
            >
              Through mentorship, speaking engagements, workshops, and training
              programmes, Damilare helps entrepreneurs, sales professionals,
              and leaders grow with confidence and clarity.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/40 pb-0.5 hover:text-primary hover:border-primary transition-colors duration-200"
              >
                Explore Resources
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p}
                variants={fadeUp}
                className="flex flex-col gap-2 p-6 bg-background rounded-xl border border-border"
              >
                <span className="text-xs text-primary font-mono">0{i + 1}</span>
                <p className="font-display text-lg font-medium text-foreground">
                  {p}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
