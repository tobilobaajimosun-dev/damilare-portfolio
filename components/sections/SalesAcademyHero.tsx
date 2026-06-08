"use client";

import { useState, useEffect } from "react";
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

// ── Carousel config ────────────────────────────────────────────────
const CARD_W  = 280;
const CARD_H  = 400;
const X_STEP  = 320;  // px between card centres — 40px gap between card edges
const ARC_Y   = 30;   // px the arc drops per step from centre
const ARC_ROT = 6;    // deg tilt per step from centre
const SCALE_S = 0.05; // scale reduction per step from centre

const PHOTO_REGION_H = 520;
const PT = 112; // pt-28
const BASE_Y = Math.round((PHOTO_REGION_H - CARD_H) / 2) - 10;

const photos = [
  "/images/about-c1.jpg",
  "/images/about-c2.jpg",
  "/images/about-c3.jpg",
  "/images/about-c4.jpg",
  "/images/about-c5.jpg",
  "/images/about-c6.jpg",
  "/images/real-estate.jpg",
];
const N = photos.length;

// Position style for a card at signed distance `dist` from the centre slot
function posStyle(dist: number) {
  const a = Math.abs(dist);
  return {
    x:       dist * X_STEP,
    y:       a * ARC_Y,
    scale:   1 - a * SCALE_S,
    rotate:  dist * ARC_ROT,
    opacity: a > 2 ? 0 : a === 2 ? 0.65 : 1,
    zIndex:  5 - a,
  };
}

export function SalesAcademyHero() {
  const [center, setCenter] = useState(0);

  // Advance carousel every 2.5 s
  useEffect(() => {
    const id = setInterval(() => setCenter(c => (c + 1) % N), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="flex flex-col items-center bg-background overflow-hidden">

      {/* ── Carousel region ───────────────────────────────── */}
      {/*
        All cards share a zero-width anchor at left: 50%.
        Each card's left edge starts at -CARD_W/2 (so card centre = 50%).
        animate.x then shifts it by signedDist × X_STEP.
        overflow-hidden on the section clips outer cards naturally.
      */}
      <div
        className="relative w-full pt-28 md:pt-32"
        style={{ height: PHOTO_REGION_H + PT }}
      >
        <div
          style={{
            position: "absolute",
            top: PT,
            left: "50%",
            width: 0,
            height: PHOTO_REGION_H,
          }}
        >
          {photos.map((src, idx) => {
            const raw  = (idx - center + N) % N;
            const dist = raw > N / 2 ? raw - N : raw; // –3…+3
            const s    = posStyle(dist);

            return (
              <motion.div
                key={src}
                animate={{ x: s.x, y: s.y, scale: s.scale, rotate: s.rotate, opacity: s.opacity }}
                transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
                style={{
                  position: "absolute",
                  top:   BASE_Y,
                  left: -CARD_W / 2,
                  width:  CARD_W,
                  height: CARD_H,
                  zIndex: s.zIndex,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0 6px 28px rgba(0,0,0,0.08)",
                  }}
                >
                  <Image
                    src={src}
                    fill
                    sizes={`${CARD_W}px`}
                    className="object-cover object-top"
                    alt=""
                    priority={idx === 0}
                    draggable={false}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
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
            { text: "Real estate careers.",   muted: false },
            { text: "Built with structure.",  muted: true  },
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
