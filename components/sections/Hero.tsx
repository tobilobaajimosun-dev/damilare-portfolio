"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { brand } from "@/content/brand";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center pt-24 pb-24 px-6 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
        >
          {/* Main content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <motion.p
              variants={fadeUp}
              className="text-sm font-sans tracking-[0.18em] uppercase text-muted-foreground"
            >
              {brand.roles.slice(0, 4).join(" · ")}
            </motion.p>

            <motion.div variants={fadeUp}>
              <h1 className="font-display font-bold leading-[1.0] tracking-tight text-foreground text-[clamp(3rem,7.5vw,6.5rem)]">
                {brand.firstName}{" "}
                <span className="text-muted-foreground font-medium">
                  {brand.lastName}
                </span>
              </h1>
              <p className="font-display italic font-normal text-muted-foreground mt-3 leading-tight text-[clamp(1.4rem,2.8vw,2.25rem)]">
                Building businesses. Developing people.
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Entrepreneur and founder based in {brand.location}. I build
              companies, mentor the next generation of African founders, and
              speak on what it really takes to create meaningful, lasting impact.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/85 transition-all duration-200"
              >
                My story
                <ArrowDown size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:bg-surface transition-all duration-200"
              >
                Let&apos;s talk
              </a>
            </motion.div>
          </div>

          {/* Side detail — desktop only */}
          <motion.div
            variants={fadeUp}
            className="hidden lg:flex lg:col-span-4 flex-col items-end gap-6 pb-3"
          >
            <div className="text-right">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1.5">
                Based in
              </p>
              <p className="text-sm font-medium text-foreground">
                {brand.location}
              </p>
            </div>
            <div className="w-px h-20 bg-border" />
            <div className="text-right">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1.5">
                Focus
              </p>
              <p className="text-sm font-medium text-foreground leading-snug">
                Entrepreneurship
                <br />& Human Development
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
