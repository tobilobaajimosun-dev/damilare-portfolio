"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ventures } from "@/content/ventures";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HomeVenturesPreview() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground max-w-xl">
              Building solutions that solve real problems.
            </h2>
            <Link
              href="/ventures"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-0.5 hover:text-primary hover:border-primary transition-colors duration-200 shrink-0"
            >
              View all ventures
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Ventures grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {ventures.map((v) => (
              <motion.div
                key={v.name}
                variants={fadeUp}
                className="flex flex-col gap-3 p-5 border border-border rounded-xl hover:border-primary/20 hover:bg-surface transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {v.name}
                  </h3>
                  <span className="text-xs tracking-widest uppercase text-muted-foreground border border-border rounded-full px-2 py-0.5 shrink-0">
                    {v.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
