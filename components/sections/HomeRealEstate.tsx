"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HomeRealEstate() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.22em] uppercase text-primary font-sans">
              Real Estate
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight">
              Real estate remains one of the most durable engines of wealth
              creation.
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <p className="text-muted-foreground leading-relaxed">
              Through property innovation, structured financing, and
              technology-driven platforms, Damilare continues to champion
              broader access to ownership and long-term wealth creation.
            </p>
            <Link
              href="/ventures"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-0.5 hover:text-primary hover:border-primary transition-colors duration-200 self-start"
            >
              Learn More
              <ArrowRight size={14} />
            </Link>

            {/* Image spot */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-surface border border-border flex items-end p-6">
              {/* 👉 Add: <Image src="/images/real-estate.jpg" alt="Real Estate" fill className="object-cover" /> */}
              <p className="text-xs text-muted-foreground tracking-widest uppercase">Image — Real Estate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
