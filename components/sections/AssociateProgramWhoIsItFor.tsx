"use client";

import { useState, useEffect } from "react";
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

// Each profile card — replace images with programme-specific photos when ready.
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

// Fan rotations and y-drops for resting state
const fanConfig = [
  { rotate: -16, yDrop: 40 },
  { rotate:  -8, yDrop: 16 },
  { rotate:   0, yDrop:  0 }, // center — front
  { rotate:   8, yDrop: 16 },
  { rotate:  16, yDrop: 40 },
];

function useCardSpacing() {
  const [spacing, setSpacing] = useState(150);
  const [cardW, setCardW]     = useState(240);
  const [cardH, setCardH]     = useState(360);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 480) {
        setSpacing(80);
        setCardW(160);
        setCardH(240);
      } else if (w < 768) {
        setSpacing(110);
        setCardW(200);
        setCardH(300);
      } else {
        setSpacing(150);
        setCardW(240);
        setCardH(360);
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return { spacing, cardW, cardH };
}

export function AssociateProgramWhoIsItFor() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const { spacing, cardW, cardH } = useCardSpacing();

  return (
    <section className="py-24 md:py-36 px-6 bg-background overflow-hidden">

      {/* Centered header */}
      <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
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

      {/* Fan deck ─────────────────────────────────────────── */}
      <div
        className="relative mx-auto flex items-center justify-center"
        style={{ height: cardH + 60 }}
      >
        {profiles.map((profile, i) => {
          const fan      = fanConfig[i];
          const isCenter = i === 2;
          const isHovered = hoveredIdx === i;

          // z-index: center is 5, edges are 1; hovered goes to 10
          const zIndex = isHovered ? 10 : (5 - Math.abs(i - 2));

          return (
            <motion.div
              key={i}
              className="absolute cursor-pointer overflow-hidden rounded-2xl"
              style={{ zIndex, width: cardW, height: cardH }}
              initial={{
                x: (i - 2) * spacing,
                rotate: fan.rotate,
                y: fan.yDrop,
                scale: isCenter ? 1 : 0.96,
              }}
              animate={{
                x: (i - 2) * spacing,
                rotate: isHovered ? 0 : fan.rotate,
                y: isHovered ? -16 : fan.yDrop,
                scale: isHovered ? 1.04 : isCenter && hoveredIdx === null ? 1 : 0.96,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onHoverStart={() => setHoveredIdx(i)}
              onHoverEnd={() => setHoveredIdx(null)}
            >
              <Image
                src={profile.image}
                fill
                sizes={`${cardW}px`}
                className="object-cover"
                alt={profile.text}
              />
              {/* Gradient overlay + label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white text-sm leading-snug font-sans">
                  {profile.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
