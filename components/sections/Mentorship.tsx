"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Mentorship() {
  return (
    <section
      id="mentorship"
      className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase text-primary font-sans"
            >
              04 — Mentorship
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight"
            >
              Growing the
              <br />
              next{" "}
              <span className="italic font-normal text-muted-foreground">
                generation.
              </span>
            </motion.h2>
          </motion.div>

          {/* Right — content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8 flex flex-col gap-10 lg:pt-16"
          >
            {/* Pull quote */}
            <motion.blockquote
              variants={fadeUp}
              className="border-l-2 border-primary pl-7"
            >
              <p className="font-display text-2xl md:text-3xl font-normal italic text-foreground leading-snug">
                &ldquo;The most meaningful work I do isn&apos;t measured in
                revenue. It&apos;s measured in the founders who found their
                footing.&rdquo;
              </p>
            </motion.blockquote>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 text-muted-foreground leading-relaxed"
            >
              <p>
                For over a decade, I have worked closely with entrepreneurs —
                early-stage founders navigating their first real challenge, and
                seasoned executives making the transition into a larger version
                of themselves.
              </p>
              <p>
                I don&apos;t mentor for legacy. I do it because I genuinely
                believe that human potential, when given the right environment
                and challenge, is the most reliable investment there is.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/40 pb-0.5 hover:text-primary hover:border-primary transition-colors duration-200"
              >
                Enquire about mentorship
                <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
