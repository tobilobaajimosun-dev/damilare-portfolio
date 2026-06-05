"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function AboutStory() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-10 lg:px-16 bg-surface">
      <div className="mx-auto w-full max-w-[var(--container-content)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-10"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6 text-base md:text-lg text-muted-foreground leading-[1.85]"
          >
            <p>
              My work spans property technology, real estate finance, financial
              inclusion, agricultural innovation, leadership development, and
              entrepreneurship.
            </p>
            <p>
              From helping ordinary Nigerians access homeownership to empowering
              farmers with better financing, every venture has been shaped by a
              single question — what does this community actually need?
            </p>
            <p>
              I believe that business, at its best, is an act of stewardship.
              Every company I build, every person I mentor, every room I walk into
              — I carry that responsibility. The goal is never just to grow a
              balance sheet. The goal is to leave something that works long after
              I am gone.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-1 pt-2">
            <p
              className="text-foreground leading-tight"
              style={{
                fontFamily: "var(--font-handwriting)",
                fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                fontWeight: 400,
              }}
            >
              Create value that lasts.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
