"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Play } from "lucide-react";
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
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [inSection, setInSection] = useState(false);
  const [videoActive, setVideoActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Show play cursor when video is expanding
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setVideoActive(latest > 0.07 && latest < 0.92);
  });

  const showPlayCursor = inSection && videoActive;

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  // Text fades and lifts out early
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textY       = useTransform(scrollYProgress, [0, 0.2], [0, -36]);

  // Portrait video — starts narrow + tall, expands to full bleed
  // On mobile use tighter margins so the initial frame isn't too narrow
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const startMargin = isMobile ? "10%" : "30%";
  const videoTop          = useTransform(scrollYProgress, [0.1, 0.82], ["34%", "0%"]);
  const videoLeft         = useTransform(scrollYProgress, [0.1, 0.82], [startMargin, "0%"]);
  const videoRight        = useTransform(scrollYProgress, [0.1, 0.82], [startMargin, "0%"]);
  const videoBorderRadius = useTransform(scrollYProgress, [0.1, 0.72], ["20px", "0px"]);

  return (
    <>
      <div
        ref={sectionRef}
        style={{ height: "280vh" }}
        className={`relative ${showPlayCursor ? "cursor-none" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setInSection(true)}
        onMouseLeave={() => setInSection(false)}
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-foreground">

          {/* ── Text — top centre, fades on scroll ── */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute inset-x-0 top-0 flex flex-col items-center justify-center h-[34%] z-10 px-6"
          >
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-6"
            >
              <motion.p
                variants={blurUp}
                className="font-display font-normal leading-tight text-[clamp(1.6rem,3.2vw,3.6rem)] tracking-tight text-center text-background/90"
              >
                <span className="block">I build systems, I develop people.</span>
                <span className="block">Who multiplies impact</span>
              </motion.p>

              <motion.div variants={blurUp} className="flex flex-col items-center gap-1.5">
                <p className="text-base text-background/45 text-center leading-relaxed">
                  Sustainable growth starts with structure.
                </p>
                <p className="text-base text-background/45 text-center leading-relaxed">
                  Everything I build is designed to outlast me.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Portrait video ── */}
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
            <video
              src="/videos/damilare-reel.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>

      {/* ── Custom play cursor ── */}
      <AnimatePresence>
        {showPlayCursor && (
          <motion.div
            className="fixed pointer-events-none z-[500] -translate-x-1/2 -translate-y-1/2"
            style={{ left: mouse.x, top: mouse.y }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg">
              <Play size={18} className="text-white ml-0.5" fill="white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
