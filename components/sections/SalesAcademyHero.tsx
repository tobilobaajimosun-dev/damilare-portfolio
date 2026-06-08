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
    transition: { duration: 1.1, ease: EXPO_OUT, delay: 0.5 + i * 0.13 },
  }),
};

// ── Photo arc config ───────────────────────────────────────────────
// All cards are the same dimensions — the arc comes from position + tilt only.
// offsetX: distance from screen centre (px, positive = right)
// top: distance from photo-region top (px)
// rotate: tilt angle (deg); centre card is 0
// entryDelay: stagger for the roll-in (rightmost first)
// oscAmp: rocking amplitude ±deg; all cards rock, centre very subtly
const CARD_W = 224;
const CARD_H = 316;

const photos = [
  {
    src: "/images/about-c1.jpg",
    offsetX: -635, top: 165,
    rotate: -16, entryDelay: 0.44, oscAmp: 3, oscDur: 3.8,
  },
  {
    src: "/images/about-c2.jpg",
    offsetX: -315, top: 72,
    rotate:  -7, entryDelay: 0.28, oscAmp: 2, oscDur: 4.4,
  },
  {
    src: "/images/about-c3.jpg",
    offsetX:    0, top: 18,
    rotate:   0, entryDelay: 0.12, oscAmp: 1, oscDur: 5.0,
  },
  {
    src: "/images/about-c4.jpg",
    offsetX:  315, top: 72,
    rotate:   7, entryDelay: 0.20, oscAmp: 2, oscDur: 4.1,
  },
  {
    src: "/images/about-c5.jpg",
    offsetX:  635, top: 165,
    rotate:  16, entryDelay: 0.36, oscAmp: 3, oscDur: 3.5,
  },
];

// Height of the photo region — must fit the tallest photo (centre: 18+372=390)
// + a small lower buffer so shadows aren't clipped
const PHOTO_REGION_H = 420;

export function SalesAcademyHero() {
  return (
    <section className="flex flex-col items-center bg-background overflow-hidden">

      {/* ── Photo arc region ──────────────────────────────── */}
      {/*
        pt-28/pt-32 gives breathing room below the navbar.
        Photos are absolutely positioned inside a fixed-height relative div.
        overflow-hidden on the section clips photos that extend beyond the edges.
      */}
      <div
        className="relative w-full pt-28 md:pt-32"
        style={{ height: PHOTO_REGION_H + 112 }} // +112 for pt-28 (112px)
      >
        {photos.map((p, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              top: p.top + 112,
              left: `calc(50% + ${p.offsetX - CARD_W / 2}px)`,
              zIndex: 5 - Math.abs(i - 2),
            }}
            initial={{ x: 280, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.95, ease: EXPO_OUT, delay: p.entryDelay }}
          >
            <motion.div
              animate={{ rotate: [p.rotate - p.oscAmp, p.rotate + p.oscAmp] }}
              transition={{
                duration: p.oscDur,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <div
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  borderRadius: 10,
                  overflow: "hidden",
                  boxShadow: "0 6px 28px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src={p.src}
                  fill
                  sizes={`${CARD_W}px`}
                  className="object-cover object-top"
                  alt=""
                  priority={i === 2}
                  draggable={false}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ── Text ──────────────────────────────────────────── */}
      <div className="w-full px-6 md:px-10 flex flex-col items-center text-center gap-5 mt-10 md:mt-12 pb-20 md:pb-24">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: POWER3_INOUT, delay: 0.3 }}
          className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans"
        >
          The Associate Program
        </motion.p>

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
          transition={{ duration: 1, ease: POWER3_INOUT, delay: 0.9 }}
          className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
        >
          Structured mentorship, real opportunities, and a community built
          for long-term growth in real estate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: POWER3_INOUT, delay: 1.05 }}
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
