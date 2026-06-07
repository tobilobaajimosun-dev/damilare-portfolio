"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";

const lines = [
  { text: "Build systems.", accent: false },
  { text: "Develop people.", accent: false },
  { text: "Multiply impact.", accent: true },
];

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
  const textOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.22], [0, -40]);

  // Video grows from a centred rounded rect to full-bleed
  const videoTop = useTransform(scrollYProgress, [0.1, 0.82], ["44%", "0%"]);
  const videoLeft = useTransform(scrollYProgress, [0.1, 0.82], ["8%", "0%"]);
  const videoRight = useTransform(scrollYProgress, [0.1, 0.82], ["8%", "0%"]);
  const videoBorderRadius = useTransform(scrollYProgress, [0.1, 0.72], ["24px", "0px"]);

  return (
    <div ref={sectionRef} style={{ height: "280vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-foreground">

        {/* ── Text — top centre, fades on scroll ── */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-x-0 top-0 flex flex-col items-center justify-center h-[44%] z-10 px-6"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-2 md:gap-3"
          >
            {lines.map(({ text, accent }) => (
              <motion.p
                key={text}
                variants={blurUp}
                className={`font-display font-normal leading-tight text-[clamp(2.4rem,5vw,5.5rem)] tracking-tight text-center ${
                  accent ? "text-primary" : "text-background"
                }`}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Video — expands from below text to full bleed ── */}
        {/* Portrait video: object-cover fills the frame and looks cinematic at full bleed */}
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
          {/*
            Replace this with your <video> tag when footage is ready.
            For portrait video, object-cover is recommended — it fills the frame
            at all sizes and looks cinematic. Example:

            <video
              src="/videos/damilare-reel.mp4"
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          */}
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
