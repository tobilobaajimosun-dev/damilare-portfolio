"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";

const blurUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

export function HomeVision() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Text fades and lifts out early
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -36]);

  // Portrait video — starts narrow + tall, expands to full bleed
  const videoTop    = useTransform(scrollYProgress, [0.1, 0.82], ["28%", "0%"]);
  const videoLeft   = useTransform(scrollYProgress, [0.1, 0.82], ["30%", "0%"]);
  const videoRight  = useTransform(scrollYProgress, [0.1, 0.82], ["30%", "0%"]);
  const videoBorderRadius = useTransform(scrollYProgress, [0.1, 0.72], ["20px", "0px"]);

  return (
    <div ref={sectionRef} style={{ height: "280vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-foreground">

        {/* ── Text — top centre, fades on scroll ── */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-x-0 top-0 flex flex-col items-center justify-center h-[28%] z-10 px-6 gap-4"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-3"
          >
            <motion.p
              variants={blurUp}
              className="font-display font-normal leading-tight text-[clamp(1.6rem,3.2vw,3.6rem)] tracking-tight text-center text-background/90"
            >
              I build systems, I develop people — who multiplies impact?
            </motion.p>

            <motion.div variants={blurUp} className="flex flex-col items-center gap-1">
              <p className="text-sm text-background/45 text-center leading-relaxed">
                Sustainable growth starts with structure.
              </p>
              <p className="text-sm text-background/45 text-center leading-relaxed">
                Everything I build is designed to outlast me.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Portrait video — starts as narrow tall rect, expands to full bleed ── */}
        {/*
          Portrait video tip: use object-cover so the video fills the frame at all sizes.
          At full bleed on a landscape screen it will crop slightly L/R — looks cinematic.

          Replace the placeholder div with:
          <video
            src="/videos/damilare-reel.mp4"
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        */}
        <motion.div
          style={{
            position: "absolute",
            top: videoTop,
            left: videoLeft,
            right: videoRight,
            bottom: 0,
            borderRadius: videoBorderRadius,
          }}
          className="overflow-hidden bg-neutral-900"
        >
          <div className="absolute inset-0 flex items-end p-8">
            <p className="text-[0.6rem] text-white/20 tracking-widest uppercase">
              Video — add your footage here
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
