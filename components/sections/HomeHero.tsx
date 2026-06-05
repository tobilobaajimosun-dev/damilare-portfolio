"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HomeHero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center pt-24 pb-24 px-6 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10 max-w-5xl"
        >
          <motion.h1
            variants={staggerContainer}
            className="font-display font-normal leading-[1.0] tracking-tight"
          >
            <motion.span
              variants={fadeUp}
              className="block text-foreground text-[clamp(2.5rem,6.5vw,5.75rem)]"
            >
              Building Businesses.
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="block font-normal text-muted-foreground text-[clamp(2.5rem,6.5vw,5.75rem)]"
            >
              Developing Leaders.
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="block text-foreground text-[clamp(2.5rem,6.5vw,5.75rem)]"
            >
              Creating Lasting Impact.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Oshokoya Damilare is an entrepreneur, founder, mentor, and speaker
            committed to helping people think bigger, build boldly, and create
            meaningful impact across Africa.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/85 transition-all duration-200"
            >
              Work With Me
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/ventures"
              className="inline-flex items-center gap-2.5 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:bg-surface transition-all duration-200"
            >
              Explore Ventures
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
