"use client";

import { useRef, useState } from "react";
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

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

export function HomeVision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [videoHovered, setVideoHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoRight = useTransform(scrollYProgress, [0, 0.75], ["54%", "0%"]);
  const videoTop = useTransform(scrollYProgress, [0, 0.75], ["5%", "0%"]);
  const videoBottom = useTransform(scrollYProgress, [0, 0.75], ["5%", "0%"]);
  const videoBorderRadius = useTransform(scrollYProgress, [0, 0.75], ["1.5rem", "0rem"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -24]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div ref={sectionRef} style={{ height: "260vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-surface">

        {/* Expanding video rect */}
        <motion.div
          style={{
            position: "absolute",
            top: videoTop,
            bottom: videoBottom,
            left: 0,
            right: videoRight,
            borderRadius: videoBorderRadius,
          }}
          className="overflow-hidden bg-[#e8e6e0] cursor-none"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVideoHovered(true)}
          onMouseLeave={() => setVideoHovered(false)}
        >
          {/* Placeholder — replace inner content with <video> or <Image> */}
          <div className="absolute inset-0 flex items-end p-8">
            <p className="text-xs text-muted-foreground tracking-widest uppercase">Video</p>
          </div>

          {/* Custom play cursor */}
          {videoHovered && (
            <div
              className="absolute pointer-events-none z-10"
              style={{ left: cursorPos.x, top: cursorPos.y }}
            >
              <div className="flex items-center gap-1.5 bg-foreground text-background text-xs font-medium px-3.5 py-2 rounded-full -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                ▶ Play Video
              </div>
            </div>
          )}
        </motion.div>

        {/* Text on right */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute right-0 top-0 w-[46%] h-full flex items-center px-10 lg:px-16 xl:px-20"
        >
          <div className="flex flex-col gap-8 max-w-md">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2"
            >
              {lines.map(({ text, accent }) => (
                <motion.p
                  key={text}
                  variants={blurUp}
                  className={`font-display font-normal leading-tight text-[clamp(2rem,3.5vw,3.5rem)] tracking-tight ${
                    accent ? "text-primary" : "text-foreground"
                  }`}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sustainable growth does not happen by accident.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                It requires structure, disciplined execution, and leaders
                willing to think beyond themselves. Across business, real
                estate, mentorship, and leadership development, the goal
                remains the same: create value that lasts.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
