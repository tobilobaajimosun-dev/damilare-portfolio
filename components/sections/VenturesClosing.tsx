"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function VenturesClosing() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-surface">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-normal text-foreground leading-snug mb-6"
          >
            The goal has never been to build businesses for their own sake.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed text-lg mb-10"
          >
            The goal has always been to build solutions that improve lives.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/40 pb-0.5 hover:text-primary hover:border-primary transition-colors duration-200"
            >
              Work with Damilare
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
