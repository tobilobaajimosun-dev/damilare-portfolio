"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;
const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, ease: EXPO_OUT, delay: 0.35 + i * 0.13 },
  }),
};

const photos = [
  { src: "/images/about-c1.jpg", rotate: -14, yOffset:  52 },
  { src: "/images/about-c2.jpg", rotate:  -7, yOffset:  22 },
  { src: "/images/about-c3.jpg", rotate:   0, yOffset:   0 }, // center — tallest
  { src: "/images/about-c4.jpg", rotate:   7, yOffset:  22 },
  { src: "/images/about-c5.jpg", rotate:  14, yOffset:  52 },
];

export function SalesAcademyHero() {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center pt-20 pb-16 md:pb-24 bg-background overflow-hidden">

      {/* ── Photo cluster ──────────────────────────────────── */}
      <div className="relative flex items-end justify-center w-full flex-1 min-h-0 overflow-hidden pb-6">
        <div className="flex items-end justify-center">
          {photos.map((photo, i) => {
            const isCenter = i === 2;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: photo.yOffset + 80, rotate: photo.rotate }}
                animate={{ opacity: 1, y: photo.yOffset, rotate: photo.rotate }}
                transition={{ duration: 1.2, ease: EXPO_OUT, delay: i * 0.07 }}
                style={{
                  zIndex: 5 - Math.abs(i - 2),
                  marginLeft: i > 0 ? "-1.5rem" : "0",
                  width: isCenter
                    ? "clamp(150px,17vw,220px)"
                    : "clamp(120px,13vw,180px)",
                  aspectRatio: "3 / 4",
                  flexShrink: 0,
                }}
                className="relative overflow-hidden rounded-xl shadow-lg bg-surface"
              >
                <Image
                  src={photo.src}
                  fill
                  sizes="220px"
                  className="object-cover"
                  alt=""
                  priority={isCenter}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Text content ───────────────────────────────────── */}
      <div className="w-full px-6 md:px-10 flex flex-col items-center text-center gap-6 md:gap-8 mt-10 md:mt-14">

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="font-display font-normal leading-[1.02] tracking-tight text-foreground text-[clamp(2.5rem,6vw,5.5rem)]"
        >
          {[
            { text: "Build More Than A Career.", muted: false },
            { text: "Build a future in real estate.", muted: true },
          ].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className={`block ${line.muted ? "text-foreground/30" : "text-foreground"}`}
                custom={i}
                variants={lineReveal}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: POWER3_INOUT, delay: 0.75 }}
          className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
        >
          A structured community designed to train, develop, and reward
          ambitious professionals seeking long-term growth in real estate.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: POWER3_INOUT, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200"
          >
            Join The Program
            <ArrowRight size={14} />
          </a>
          <a
            href="#programme"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "!h-auto rounded-full px-7 py-3.5 text-sm gap-2"
            )}
          >
            Learn How It Works
            <ChevronDown size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
