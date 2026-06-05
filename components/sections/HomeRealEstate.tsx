"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HomeRealEstate() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6"
          >
            <motion.p variants={fadeUp} className="text-xs tracking-[0.22em] uppercase text-primary font-sans">
              Real Estate
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight"
            >
              Real estate remains one of the most durable engines of wealth creation.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              Through property innovation, structured financing, and
              technology-driven platforms, Damilare continues to champion
              broader access to ownership and long-term wealth creation.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/ventures"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-0.5 hover:text-primary hover:border-primary transition-colors duration-200"
              >
                Learn More
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — floating image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full min-h-[420px] h-full rounded-2xl overflow-hidden relative bg-surface border border-border"
            >
              <Image
                src="/images/portrait.jpg"
                alt="Real Estate — Damilare Oshokoya"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
