"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

const stats = [
  { value: "10+", label: "Years building" },
  { value: "5+", label: "Companies founded" },
  { value: "100+", label: "Founders mentored" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-surface scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase text-primary font-sans"
            >
              01 — About
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground"
            >
              More builder
              <br />
              <span className="italic font-normal text-muted-foreground">
                than anything else.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 text-muted-foreground leading-relaxed"
            >
              <p>
                My journey in business started with a simple conviction — that
                entrepreneurship, when approached with integrity and purpose, is
                one of the most transformative forces in any economy.
              </p>
              <p>
                Over the years, that conviction has translated into companies
                built across industries, a network of founders mentored through
                their hardest moments, and honest conversations with audiences
                across the continent about what building really means.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-border"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo placeholder */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden relative lg:sticky lg:top-24"
          >
            {/* Replace with: <Image src="..." alt="Oshokoya Damilare" fill className="object-cover" /> */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted to-accent/10" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xs text-muted-foreground/40 tracking-widest uppercase font-sans">
                Portrait
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
