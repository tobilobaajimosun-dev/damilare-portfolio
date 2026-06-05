"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ventures, type Venture } from "@/content/ventures";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Ventures() {
  return (
    <section
      id="ventures"
      className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6 mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.2em] uppercase text-primary font-sans"
          >
            02 — Ventures
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground">
              What I&apos;ve built.
            </h2>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed md:text-right">
              Each company started as a question: what does this market need,
              and can we build it well?
            </p>
          </motion.div>
        </motion.div>

        {/* Venture list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col divide-y divide-border"
        >
          {ventures.map((venture) => (
            <VentureRow key={venture.name} venture={venture} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function VentureRow({ venture }: { venture: Venture }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5">
        <h3 className="font-display text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-200">
          {venture.name}
        </h3>
        <span className="text-xs tracking-widest uppercase text-muted-foreground px-2.5 py-0.5 border border-border rounded-full self-start sm:self-auto">
          {venture.category}
        </span>
      </div>

      <div className="flex items-start sm:items-center gap-6 sm:gap-12 flex-1 sm:justify-end text-sm text-muted-foreground">
        <p className="max-w-sm leading-relaxed">{venture.description}</p>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-mono">{venture.year}</span>
          {venture.url && (
            <a
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${venture.name}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
