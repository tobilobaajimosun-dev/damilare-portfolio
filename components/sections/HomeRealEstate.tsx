"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HomeRealEstate() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-6"
          >
            <motion.p variants={fadeUp} className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans">
              Real Estate
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground leading-tight"
            >
              Property is patient capital.
              <br />Africa&apos;s most enduring store of wealth.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              Through property innovation, structured financing, and
              technology-driven platforms, I champion broader access to
              ownership and generational wealth creation across Africa.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href="https://www.abodeflex.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-200 self-start"
              >
                Learn more on Abode
                <ArrowRight size={13} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — floating image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full min-h-[420px] h-full rounded-2xl overflow-hidden relative bg-surface border border-border"
            >
              <Image
                src="/images/portrait.jpg"
                alt="Real Estate — Damilare Oshokoya"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
