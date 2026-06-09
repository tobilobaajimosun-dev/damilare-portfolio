"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brand } from "@/content/brand";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { BackgroundPattern } from "@/components/ui/BackgroundPattern";

export function HomeHero() {
  return (
    <section
      className="min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 px-6 md:px-10 lg:px-16 relative"
      style={{
        backgroundImage: "linear-gradient(to bottom, transparent 15%, oklch(0.99 0 0) 48%)",
      }}
    >
      <BackgroundPattern variant="light" />
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.h1
              variants={staggerContainer}
              className="font-display font-normal leading-[1.02] tracking-tight text-[clamp(3.5rem,8vw,7rem)]"
            >
              <motion.span variants={fadeUp} className="block text-foreground">
                Damilare
              </motion.span>
              <motion.span variants={fadeUp} className="block text-foreground">
                Oshokoya
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              Building businesses, developing leaders, and creating
              opportunities across Africa — with faith, discipline, and{" "}
              <span className="text-[oklch(0.52_0.16_152)]">long-term vision.</span>
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${brand.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200"
              >
                Work With Me
              </a>
              <a
                href="/associate-program"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                Join The Associate Program
              </a>
            </motion.div>
          </motion.div>

          {/* Right — portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="relative w-full max-w-[540px] aspect-[3/4] max-h-[70vh] lg:max-h-none rounded-2xl overflow-hidden bg-surface"
            >
              <Image
                src="/images/hero.jpg"
                alt="Damilare Oshokoya"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
