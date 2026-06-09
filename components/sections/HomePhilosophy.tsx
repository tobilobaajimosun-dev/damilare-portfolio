"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HomePhilosophy() {
  return (
    <section className="py-10 md:py-24 px-6 md:px-10 lg:px-16 bg-foreground">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-stretch">

          {/* Left — image fills column height */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full min-h-[460px] rounded-2xl overflow-hidden relative"
          >
            <Image
              src="/images/philosophy.jpg"
              alt="Damilare Oshokoya"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col justify-center gap-5 md:gap-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-[0.65rem] tracking-[0.1em] uppercase text-background/50 font-sans"
            >
              Philosophy
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] text-background leading-tight tracking-tight"
            >
              Build with purpose.
              <br />Lead with integrity.
            </motion.h2>

            <motion.div variants={fadeUp} className="flex flex-col gap-5">
              <p className="text-base text-background/60 leading-[1.8]">
                Building companies, for me, is never only about growth. It is
                about developing people, creating access, and building systems
                that deliver lasting value.
              </p>
              <p className="text-base text-background/60 leading-[1.8]">
                My work across real estate, fintech, and agritech is grounded
                in one belief: sustainable progress needs disciplined builders
                and long-term thinking.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
