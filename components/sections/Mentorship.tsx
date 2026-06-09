"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const programmes = ["Wadhwani Foundation", "Enactus", "Futurize"];

export function Mentorship() {
  return (
    <section
      id="mentorship"
      className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-background scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        {/* Centered header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center gap-4 mb-10"
        >
          <motion.h2
            key="heading"
            variants={fadeUp}
            className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground leading-tight"
          >
            Growing the next{" "}
            <span className="text-muted-foreground">generation.</span>
          </motion.h2>

          <motion.blockquote key="quote" variants={fadeUp} className="max-w-2xl">
            <p className="font-display text-xl md:text-2xl font-normal text-muted-foreground leading-snug">
              &ldquo;The most meaningful work I do isn&apos;t measured in
              revenue. It&apos;s measured in the founders who found their
              footing.&rdquo;
            </p>
          </motion.blockquote>

          <motion.div
            key="body"
            variants={fadeUp}
            className="flex flex-col gap-5 text-base text-muted-foreground leading-[1.8] max-w-2xl"
          >
            <p>
              I&apos;ve had the privilege of mentoring hundreds of entrepreneurs
              — from first-time founders navigating their earliest challenges, to
              seasoned executives stepping into a larger version of themselves.
              My approach is direct and practical: I share what I know from
              building real businesses in real markets.
            </p>
          </motion.div>
        </motion.div>

        {/* Programme logos */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap items-center justify-center gap-8 mb-12"
        >
          {programmes.map((name) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="flex items-center justify-center h-10 px-5 bg-surface border border-border rounded-full"
            >
              <span className="text-xs font-medium text-muted-foreground tracking-wide whitespace-nowrap">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200"
          >
            Enquire about mentorship
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
