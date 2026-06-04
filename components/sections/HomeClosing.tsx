"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HomeClosing() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-10 lg:px-16 bg-foreground">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-10 max-w-4xl"
        >
          <motion.blockquote
            variants={fadeUp}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-normal italic text-background leading-snug"
          >
            &ldquo;Great businesses are built by people willing to think
            differently, act courageously, and serve consistently.&rdquo;
          </motion.blockquote>

          <motion.p
            variants={fadeUp}
            className="text-lg text-background/60 font-sans"
          >
            Let&apos;s build something meaningful.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-background text-foreground text-sm font-medium rounded-full hover:bg-background/90 transition-all duration-200"
            >
              Work With Me
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
