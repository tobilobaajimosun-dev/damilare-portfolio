"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;
const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, ease: EXPO_OUT, delay: 0.35 + i * 0.13 },
  }),
};

// ── Orbit geometry ────────────────────────────────────────────
// Orbit circle container: 600×600 (= 2R×2R, R=300)
// Container bottom edge is at -R below the photo-region's bottom
// → orbit center sits exactly at the photo-region's bottom edge
// All photo positions computed relative to the 600×600 container center (300,300)
const R = 300;
const ORBIT_SIZE = R * 2; // 600

type PhotoConfig = { src: string; angle: number; w: number; h: number; left: number; top: number };

function buildPhotos(): PhotoConfig[] {
  const raw = [
    { src: "/images/about-c1.jpg", angle: -40, w: 140, h: 187 },
    { src: "/images/about-c2.jpg", angle: -20, w: 155, h: 207 },
    { src: "/images/about-c3.jpg", angle:   0, w: 175, h: 233 }, // center — largest
    { src: "/images/about-c4.jpg", angle:  20, w: 155, h: 207 },
    { src: "/images/about-c5.jpg", angle:  40, w: 140, h: 187 },
  ];
  return raw.map((p) => {
    const rad = (p.angle * Math.PI) / 180;
    return {
      ...p,
      left: R + R * Math.sin(rad) - p.w / 2,
      top:  R - R * Math.cos(rad) - p.h / 2,
    };
  });
}
const orbitPhotos = buildPhotos();
const ORBIT_DURATION = "40s";

export function SalesAcademyHero() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="min-h-[100dvh] flex flex-col items-center pt-20 pb-16 md:pb-24 bg-background overflow-hidden">

      {/* ── Orbit photo region ─────────────────────────────── */}
      <div className="relative w-full flex-shrink-0 overflow-hidden" style={{ height: 460 }}>
        {/*
          Centering wrapper: left:50% + translateX(-50%) centers the
          600×600 orbit container. bottom:-300px puts the orbit center
          exactly at the photo region's bottom edge.
        */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: `-${R}px` }}
        >
          {/* Rotating orbit circle */}
          <div
            style={{
              width:  ORBIT_SIZE,
              height: ORBIT_SIZE,
              position: "relative",
              animationName: "orbit-spin",
              animationDuration: ORBIT_DURATION,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {orbitPhotos.map((photo, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left:   photo.left,
                  top:    photo.top,
                  width:  photo.w,
                  height: photo.h,
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
                  animationName: "orbit-counter",
                  animationDuration: ORBIT_DURATION,
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationPlayState: paused ? "paused" : "running",
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Text content ───────────────────────────────────── */}
      <div className="w-full px-6 md:px-10 flex flex-col items-center text-center gap-6 md:gap-8 mt-10 md:mt-14">

        {/* Headline — 72px max */}
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

        {/* Body */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: POWER3_INOUT, delay: 0.75 }}
          className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
        >
          A structured community designed to train, develop, and reward
          ambitious professionals seeking long-term growth in real estate.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: POWER3_INOUT, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200"
          >
            Join The Program
            <ArrowRight size={14} />
          </a>
          <a
            href="#programme"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "!h-auto rounded-full px-7 py-3.5 text-sm gap-2"
            )}
          >
            Learn How It Works
            <ChevronDown size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
