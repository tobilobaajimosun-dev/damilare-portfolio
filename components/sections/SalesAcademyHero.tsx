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

// Each card has a fixed tilt. Index 2 (centre of the initial set) is straight.
// Alternating angles give the scattered, scattered-grid look from the reference.
const photos = [
  { src: "/images/about-c4.jpg", rotate: -6  },
  { src: "/images/about-c2.jpg", rotate:  8  },
  { src: "/images/about-c3.jpg", rotate:  0  }, // centre — stays straight
  { src: "/images/about-c1.jpg", rotate: -4  },
  { src: "/images/about-c5.jpg", rotate:  6  },
];

// Duplicate for seamless loop: animate x from 0 → -50% of total width
const track = [...photos, ...photos];

// Card inner image dimensions (3:4 portrait, white mat around it)
const IMG_W = 196;
const IMG_H = 260;
const MAT   = 10; // white frame padding

export function SalesAcademyHero() {
  return (
    <section className="flex flex-col items-center pt-16 md:pt-20 bg-background overflow-hidden">

      {/* ── Infinite marquee ──────────────────────────────── */}
      {/*
        Outer div clips the track; no padding so cards bleed edge-to-edge.
        Track is 2× the original set width → animate x: 0 to -50% = one full set.
      */}
      <div className="w-full overflow-hidden select-none" aria-hidden>
        <motion.div
          className="flex items-end"
          style={{ width: "fit-content", gap: 20 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 32,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          {track.map((photo, i) => (
            /*
              Each card wrapper applies its fixed rotation via CSS transform.
              The outer motion.div (the track) translates; the inner style
              applies the tilt so tilt never drifts during scroll.
            */
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                transform: `rotate(${photo.rotate}deg)`,
                // Shift each card down slightly so the arc bottom aligns and
                // taller/straighter centre cards feel "raised".
                marginBottom: Math.abs(photo.rotate) * 3,
              }}
            >
              {/* White mat / polaroid frame */}
              <div
                style={{
                  padding: MAT,
                  background: "#ffffff",
                  borderRadius: 6,
                  boxShadow: "0 4px 28px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ width: IMG_W, height: IMG_H }}
                >
                  <Image
                    src={photo.src}
                    fill
                    sizes={`${IMG_W}px`}
                    className="object-cover object-top"
                    alt=""
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Text ──────────────────────────────────────────── */}
      <div className="w-full px-6 md:px-10 flex flex-col items-center text-center gap-5 mt-12 md:mt-14 pb-20 md:pb-24">

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
