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
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-normal text-foreground leading-snug mb-6"
          >
            I build businesses to improve lives — not for their own sake.
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
              className="inline-flex items-center gap-2.5 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-200"
            >
              Work with Damilare
              <ArrowRight size={13} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
