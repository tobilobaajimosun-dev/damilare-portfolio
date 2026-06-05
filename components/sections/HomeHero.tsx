"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HomeHero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center pt-24 pb-24 px-6 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
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
              Entrepreneur. Founder. Mentor.
            </motion.p>

            <motion.h1
              variants={staggerContainer}
              className="font-display font-normal leading-[1.05] tracking-tight text-[clamp(2.4rem,5.5vw,4.5rem)]"
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
              className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              A faith-driven entrepreneur and business leader committed to
              building sustainable businesses, developing leaders, and creating
              opportunities across Africa.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm text-muted-foreground max-w-lg leading-relaxed"
            >
              Through entrepreneurship, mentorship, and leadership development,
              he helps people think bigger, build boldly, and create meaningful
              impact.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="mailto:damilareoshokoya@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-all duration-200"
              >
                Work With Me
              </a>
              <a
                href="/sales-academy"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-primary text-primary text-sm font-medium rounded-full hover:bg-primary/10 transition-all duration-200"
              >
                Join Sales Masterclass
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
              className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden bg-surface border border-border"
            >
              <Image
                src="/images/portrait.jpg"
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
