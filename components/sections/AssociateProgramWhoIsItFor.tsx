"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;
const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, ease: EXPO_OUT, delay: i * 0.1 },
  }),
};

// Card dimensions
const CARD_W  = 280; // px
const CARD_H  = 373; // px  (3/4 ratio)
const CARD_GAP = 16; // px — right-margin per card (gap between cards)

const profiles = [
  {
    text: "Entrepreneurs expanding into real estate",
    image: "/images/real-estate.jpg",
  },
  {
    text: "Professionals seeking additional income",
    image: "/images/about-c3.jpg",
  },
  {
    text: "Recent graduates and growth-minded individuals",
    image: "/images/about-c4.jpg",
  },
  {
    text: "Business owners exploring property investment",
    image: "/images/about-foundation.jpg",
  },
  {
    text: "Ambitious people ready to learn and execute",
    image: "/images/portrait-2.jpg",
  },
];

// Duplicate for seamless loop: 2 copies → animate by -50% = exactly 1 copy scrolled
const marqueeItems = [...profiles, ...profiles];

export function AssociateProgramWhoIsItFor() {
  return (
    <section className="py-24 md:py-36 bg-background overflow-hidden">

      {/* ── Centered header ──────────────────────────────── */}
      <div className="text-center max-w-2xl mx-auto px-6 mb-16 md:mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: POWER3_INOUT }}
          className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans mb-5"
        >
          Who This Is For
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="font-display font-normal text-[clamp(2.25rem,5vw,4rem)] leading-tight tracking-tight text-foreground mb-5"
        >
          {["A community", "for builders."].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span className="block" custom={i} variants={lineReveal}>
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: POWER3_INOUT, delay: 0.2 }}
          className="text-base text-muted-foreground leading-relaxed"
        >
          Whether you&apos;re starting, transitioning, or scaling — if you&apos;re
          ready to learn and execute, there&apos;s a place for you here.
        </motion.p>
      </div>

      {/* ── Endless image marquee ────────────────────────── */}
      {/* Outer div clips the scrolling track; no padding so images bleed edge-to-edge */}
      <div className="overflow-hidden select-none">
        <div
          style={{
            display: "flex",
            /* Total track width = 2 copies × (cardW + gap) × 5 cards */
            /* No need to set explicit width — flex lays out naturally */
            animation: "marquee 28s linear infinite",
            willChange: "transform",
          }}
        >
          {marqueeItems.map((profile, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width:       CARD_W,
                height:      CARD_H,
                marginRight: CARD_GAP,
                borderRadius: 16,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={profile.image}
                fill
                sizes={`${CARD_W}px`}
                className="object-cover"
                alt={profile.text}
              />
              {/* Gradient overlay + profile label */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: 13,
                    lineHeight: 1.45,
                    fontFamily: "inherit",
                    margin: 0,
                  }}
                >
                  {profile.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
