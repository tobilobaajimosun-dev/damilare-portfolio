"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ventures } from "@/content/ventures";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Ventures() {
  return (
    <section
      id="ventures"
      className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        {/* Centered header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground"
          >
            What I&apos;ve Built
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground max-w-md leading-relaxed">
            Each company started as a question: what does this market need,
            and can we build it well?
          </motion.p>
        </motion.div>

        {/* Card grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ventures.map((v) => (
            <motion.div
              key={v.name}
              variants={fadeUp}
              className="relative group flex flex-col bg-background rounded-2xl border border-border hover:border-foreground/20 hover:shadow-sm transition-all duration-300 overflow-hidden"
            >
              {/* Full-card click target for ventures with a URL */}
              {v.url && (
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${v.name}`}
                  className="absolute inset-0 z-10"
                />
              )}

              {/* Logo area — always present; blank for ventures without a logo */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 min-h-[56px]">
                <div className="h-8 flex items-center">
                  {v.logo && (
                    <Image
                      src={v.logo}
                      alt={`${v.name} logo`}
                      width={120}
                      height={36}
                      className="object-contain object-left"
                      style={{ width: "auto", maxWidth: 120, height: 36, maxHeight: 36 }}
                      unoptimized
                    />
                  )}
                </div>
                {v.url && (
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground/40 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0"
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 px-6 pb-8 flex-1 pt-0">
                <span className="text-[0.6rem] tracking-[0.1em] uppercase font-sans text-muted-foreground">
                  {v.category}
                </span>
                <p className="font-display text-xl font-normal text-foreground group-hover:text-primary transition-colors duration-200">
                  {v.name}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
