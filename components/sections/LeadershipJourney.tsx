"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2014",
    title: "Research Contributor",
    org: "9 published papers on African entrepreneurship & SME growth",
  },
  {
    year: "2016",
    title: "Lead Consultant",
    org: "Integrated Acquest Global",
  },
  {
    year: "2018",
    title: "Global Mentor",
    org: "Wadhwani Foundation · Enactus · Futurize",
  },
  {
    year: "2019",
    title: "COO",
    org: "Pettysave",
  },
  {
    year: "2020",
    title: "Co-Founder",
    org: "Abode",
  },
  {
    year: "2021",
    title: "CEO",
    org: "Realvest",
  },
  {
    year: "2022",
    title: "COO",
    org: "Agbeloba",
  },
];

export function LeadershipJourney() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      {/* Header */}
      <div className="px-6 md:px-10 lg:px-16 mb-16">
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <h2 className="font-display font-normal text-[clamp(2.25rem,4.5vw,3.75rem)] tracking-tight text-foreground leading-tight">
            Leadership Journey
          </h2>
          <p className="text-xs tracking-[0.18em] uppercase text-muted-foreground font-sans mt-4">
            Drag to explore ← →
          </p>
        </div>
      </div>

      {/* Scrollable timeline */}
      <div ref={constraintsRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.05}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 40 }}
          className="flex items-center select-none"
          style={{ width: `${milestones.length * 300 + 240}px`, paddingLeft: "6rem", paddingRight: "6rem" }}
        >
          {/* The continuous line */}
          <div className="absolute h-px bg-border" style={{ width: `${milestones.length * 300 + 120}px`, marginLeft: "-60px" }} />

          {milestones.map((m, i) => (
            <div
              key={`${m.year}-${m.title}`}
              className="relative flex flex-col items-center"
              style={{ width: "300px", flexShrink: 0 }}
            >
              {/* Year — alternates above/below */}
              {i % 2 === 0 ? (
                <>
                  <div className="flex flex-col items-center mb-8 min-h-[110px] justify-end">
                    <p className="font-display text-[clamp(2rem,3vw,2.8rem)] font-normal text-foreground leading-none mb-2">
                      {m.year}
                    </p>
                    <p className="text-sm font-medium text-foreground text-center leading-snug px-2">
                      {m.title}
                    </p>
                    <p className="text-xs text-muted-foreground text-center leading-relaxed mt-1 px-4 max-w-[220px]">
                      {m.org}
                    </p>
                  </div>

                  {/* Dot on line */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary border-2 border-background ring-1 ring-primary" />
                  </div>

                  {/* Spacer below */}
                  <div className="min-h-[110px]" />
                </>
              ) : (
                <>
                  {/* Spacer above */}
                  <div className="min-h-[110px]" />

                  {/* Dot on line */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-foreground/20 border-2 border-background ring-1 ring-foreground/20" />
                  </div>

                  <div className="flex flex-col items-center mt-8 min-h-[110px] justify-start">
                    <p className="font-display text-[clamp(2rem,3vw,2.8rem)] font-normal text-muted-foreground leading-none mb-2">
                      {m.year}
                    </p>
                    <p className="text-sm font-medium text-foreground text-center leading-snug px-2">
                      {m.title}
                    </p>
                    <p className="text-xs text-muted-foreground text-center leading-relaxed mt-1 px-4 max-w-[220px]">
                      {m.org}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
