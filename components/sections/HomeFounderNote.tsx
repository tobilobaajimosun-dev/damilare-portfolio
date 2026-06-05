"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HomeFounderNote() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-10 lg:px-16 bg-background border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-start">

          {/* Letter content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8 max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans"
            >
              A Note From Damilare
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] text-foreground leading-tight"
            >
              Faith-driven, Africa-focused, long-term thinking.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 text-muted-foreground leading-[1.85] text-base md:text-[1.05rem]"
            >
              <p>
                I built my first business not because I had a perfect plan, but
                because I saw a gap — a real problem that real people needed
                solved. Every company since has started from that same place.
              </p>
              <p>
                The world does not need more businesses that exist to extract
                value. It needs more builders who understand that business, done
                right, is one of the most powerful tools for human progress.
                That is what I show up for every day.
              </p>
              <p>
                Whether I am closing a deal, mentoring a founder, or speaking
                in a room full of young entrepreneurs — the message is always
                the same. Think bigger. Act with purpose. Build with integrity.
                And never stop serving.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-1 pt-4"
            >
              <p
                className="text-foreground leading-none"
                style={{
                  fontFamily: "var(--font-handwriting)",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                }}
              >
                Damilare Oshokoya
              </p>
              <p className="text-xs tracking-[0.18em] uppercase text-muted-foreground font-sans mt-2">
                Entrepreneur &amp; Founder
              </p>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block w-[280px] shrink-0"
          >
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative grayscale">
              <Image
                src="/images/portrait.jpg"
                alt="Damilare Oshokoya"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
