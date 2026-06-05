"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, FileText } from "lucide-react";
import { publications } from "@/content/books";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Publications() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background">
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
            06 — Publications
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <h2 className="font-display text-4xl md:text-5xl font-normal tracking-tight text-foreground">
              Books &amp; research.
            </h2>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed md:text-right">
              Knowledge built in the field and refined on the page.
            </p>
          </motion.div>
        </motion.div>

        {/* Publications grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {publications.map((pub) => (
            <motion.div
              key={pub.title}
              variants={fadeUp}
              className="group flex flex-col justify-between gap-8 p-8 border border-border rounded-2xl hover:border-primary/25 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col gap-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface border border-border">
                  {pub.type === "book" ? (
                    <BookOpen size={18} className="text-primary" />
                  ) : (
                    <FileText size={18} className="text-primary" />
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-medium text-foreground leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </div>

              {pub.url ? (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  {pub.cta}
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <span className="text-sm text-muted-foreground/50">
                  {pub.cta} — link coming soon
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
