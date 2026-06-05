"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HomeFounderNote() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-24 items-end">

          {/* Letter content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans"
            >
              A Note From Damilare
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] text-foreground leading-tight tracking-tight"
            >
              Build with purpose. Serve without limit.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 text-base text-muted-foreground leading-[1.85] max-w-2xl"
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

            {/* Handwritten signature only — no name/role label */}
            <motion.div variants={fadeUp} className="pt-4">
              <p
                className="text-foreground leading-none"
                style={{
                  fontFamily: "var(--font-handwriting)",
                  fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                }}
              >
                Damilare Oshokoya
              </p>
            </motion.div>
          </motion.div>

          {/* Portrait — large, bottom-aligned, greyscale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block w-full"
          >
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative grayscale">
              <Image
                src="/images/portrait.jpg"
                alt="Damilare Oshokoya"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
