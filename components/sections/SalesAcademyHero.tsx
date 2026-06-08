"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;
const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, ease: EXPO_OUT, delay: 0.35 + i * 0.13 },
  }),
};

// Fan layout — center tallest, progressively smaller outward.
// Edge photos clip naturally on small screens (intentional, matches reference).
const photos = [
  { src: "/images/about-c1.jpg", w: 156, h: 208, rotate: -9  },
  { src: "/images/about-c2.jpg", w: 190, h: 253, rotate: -4  },
  { src: "/images/about-c3.jpg", w: 228, h: 304, rotate:  0  },
  { src: "/images/about-c4.jpg", w: 190, h: 253, rotate:  4  },
  { src: "/images/about-c5.jpg", w: 156, h: 208, rotate:  9  },
];

export function SalesAcademyHero() {
  return (
    <section className="flex flex-col items-center pt-16 md:pt-20 bg-background overflow-hidden">

      {/* ── Photo fan ─────────────────────────────────────────── */}
      {/* overflow-hidden on section clips edge photos on narrow screens */}
      <div className="flex items-end justify-center w-full">
        {photos.map((photo, i) => (
          // Outer div: handles reveal animation + rotation
          <motion.div
            key={i}
            className="flex-shrink-0"
            style={{ rotate: photo.rotate, marginLeft: -10, marginRight: -10 }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EXPO_OUT, delay: 0.05 + i * 0.07 }}
          >
            {/* Inner div: continuous float, is the relative container for Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.11)]"
              style={{ width: photo.w, height: photo.h }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.2 + i * 0.55,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay: i * 0.45,
              }}
            >
              <Image
                src={photo.src}
                fill
                sizes={`${photo.w}px`}
                className="object-cover"
                alt=""
                priority={i === 2}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ── Text ──────────────────────────────────────────────── */}
      <div className="w-full px-6 md:px-10 flex flex-col items-center text-center gap-6 mt-12 md:mt-14 pb-20 md:pb-24">

        <motion.h1
          initial="hidden"
          animate="visible"
          className="font-display font-normal leading-[1.02] tracking-tight text-foreground text-[clamp(2rem,4.5vw,4.5rem)]"
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: POWER3_INOUT, delay: 0.75 }}
          className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
        >
          Structured mentorship, real opportunities, and a community built
          for long-term growth in real estate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: POWER3_INOUT, delay: 0.9 }}
        >
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200"
          >
            Join The Program
            <ArrowRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
