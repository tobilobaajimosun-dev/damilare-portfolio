"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function AboutStory() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-surface">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-sans sticky top-24">
              Story
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-9 flex flex-col gap-8"
          >
            <motion.p
              variants={fadeUp}
              className="font-display text-2xl md:text-3xl font-normal italic text-foreground leading-snug"
            >
              For Damilare, entrepreneurship has never been only about building
              companies.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 text-muted-foreground leading-relaxed"
            >
              <p>
                It has always been about building people, creating
                opportunities, and solving meaningful problems.
              </p>
              <p>
                His work spans property technology, real estate finance,
                financial inclusion, agricultural innovation, leadership
                development, and entrepreneurship. From helping ordinary
                Nigerians access homeownership to empowering farmers with
                better financing, every venture has been shaped by a single
                question: what does this community actually need?
              </p>
              <p>
                Across every venture, one principle remains constant:
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl font-bold text-foreground"
            >
              Create value that lasts.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
