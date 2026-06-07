"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function SalesAcademyHero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center pt-24 pb-24 px-6 md:px-10 lg:px-16 bg-foreground">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.22em] uppercase text-primary font-sans"
            >
              Sales Masterclass
            </motion.p>

            <motion.h1
              variants={staggerContainer}
              className="font-display font-normal leading-[1.05] tracking-tight text-[clamp(2.6rem,5.5vw,5rem)] text-background"
            >
              <motion.span variants={fadeUp} className="block">
                Close with
              </motion.span>
              <motion.span variants={fadeUp} className="block text-primary">
                conviction.
              </motion.span>
              <motion.span variants={fadeUp} className="block">
                Build with
              </motion.span>
              <motion.span variants={fadeUp} className="block">
                systems.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-background/60 max-w-lg leading-relaxed"
            >
              A practical training programme for entrepreneurs, founders, and
              sales professionals who want to master the art and science of
              selling — and build sustainable businesses around it.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200"
              >
                Apply Now
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-background/20 text-background text-sm font-medium rounded-full hover:bg-background/10 transition-all duration-200"
              >
                See Curriculum
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-8 pt-4 border-t border-background/10"
            >
              {[
                { value: "8", label: "Weeks" },
                { value: "Live", label: "Sessions" },
                { value: "Africa", label: "Focus" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <p className="font-display text-2xl text-background">{s.value}</p>
                  <p className="text-xs text-background/40 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image spot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-[460px] aspect-[3/4] rounded-2xl overflow-hidden bg-background/10">
              {/* 👉 Add: <Image src="/images/sales-academy.jpg" alt="Sales Masterclass" fill className="object-cover" /> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
