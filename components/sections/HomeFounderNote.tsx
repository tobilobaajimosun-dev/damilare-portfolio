"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const sectionBg = [
  "linear-gradient(to bottom, transparent 55%, oklch(0.99 0 0) 100%)",
  "repeating-linear-gradient(90deg, rgba(0,0,0,0.035) 0px, rgba(0,0,0,0.035) 1px, transparent 1px, transparent 24px)",
].join(", ");

export function HomeFounderNote() {
  return (
    <section
      className="py-28 md:py-40 px-6 md:px-10 lg:px-16 bg-background"
      style={{ backgroundImage: sectionBg }}
    >
      <div className="mx-auto w-full max-w-[var(--container-content)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center gap-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans"
          >
            A Note From Damilare
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] text-foreground leading-tight tracking-tight max-w-xl"
          >
            Build with purpose. Serve without limit.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 text-base text-muted-foreground leading-[1.85] max-w-xl"
          >
            <p>
              I built my first business not because I had a perfect plan, but
              because I saw a gap — a real problem that real people needed
              solved. Every company since has started from that same place.
            </p>
            <p>
              The world needs more builders who understand that business, done
              right, is one of the most powerful tools for human progress.
              That is what I show up for every day.
            </p>
            <p>
              Whether closing a deal, mentoring a founder, or speaking to
              young entrepreneurs — the message is always the same: think
              bigger, act with purpose, build with integrity, and never stop
              serving.
            </p>
          </motion.div>

          {/* Handwritten signature — Homemade Apple, tighter spacing */}
          <motion.p
            variants={fadeUp}
            className="text-foreground"
            style={{
              fontFamily: "var(--font-handwriting)",
              fontSize: "clamp(1.1rem, 2.1vw, 1.85rem)",
              lineHeight: 1.3,
            }}
          >
            Damilare Oshokoya
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
