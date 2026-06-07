"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  { year: "2014", title: "Research Contributor", org: "9 published papers on African entrepreneurship & SME growth" },
  { year: "2016", title: "Lead Consultant", org: "Integrated Acquest Global" },
  { year: "2018", title: "Global Mentor", org: "Wadhwani Foundation · Enactus · Futurize" },
  { year: "2019", title: "COO", org: "Pettysave" },
  { year: "2020", title: "CEO", org: "Abode", current: true },
  { year: "2021", title: "CEO", org: "Realvest" },
  { year: "2022", title: "COO", org: "Agbeloba" },
] satisfies { year: string; title: string; org: string; current?: boolean }[];

const CARD_W = 280;
const GAP = 48;
const SIDE_PAD = 80;
const TIMELINE_W = milestones.length * (CARD_W + GAP) + SIDE_PAD * 2;

export function LeadershipJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [vpW, setVpW] = useState(1200);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setVpW(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const maxTranslate = Math.max(0, TIMELINE_W - vpW);
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);
  const sectionH = vpW + maxTranslate;

  // ── Mobile: simple vertical list ──────────────────────────────────────
  if (isMobile) {
    return (
      <section className="py-14 px-6 bg-background border-t border-border">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="font-display font-normal text-[clamp(2rem,8vw,3rem)] tracking-tight text-foreground leading-tight">
            My Leadership Journey
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            From research labs to boardrooms — each chapter built the next.
          </p>
        </div>
        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />
          {milestones.map((m, i) => (
            <div key={`${m.year}-${i}`} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="relative z-10 flex flex-col items-center" style={{ width: 12 }}>
                <div
                  className="w-3 h-3 rounded-full border-2 border-background mt-1.5 shrink-0"
                  style={{ backgroundColor: i % 2 === 0 ? "oklch(0.55 0.14 80)" : "oklch(0.7 0 0)" }}
                />
              </div>
              <div className="flex flex-col gap-0.5 pb-2">
                <p className="font-display font-normal text-2xl text-foreground leading-none mb-1">{m.year}</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-normal text-foreground">{m.title}</p>
                  {m.current && (
                    <span className="text-[0.6rem] tracking-widest uppercase bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full leading-none">
                      Now
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{m.org}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // ── Desktop: sticky + horizontal scroll ──────────────────────────────
  return (
    <div ref={sectionRef} style={{ height: sectionH }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-background">

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 px-6 md:px-10 lg:px-16 pt-14 z-10">
          <div className="mx-auto w-full max-w-[var(--container-default)]">
            <h2 className="font-display font-normal text-[clamp(2.25rem,4.5vw,3.75rem)] tracking-tight text-foreground leading-tight">
              My Leadership Journey
            </h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              From research labs to boardrooms — each chapter built the next.
            </p>
            </div>
        </div>

        {/* Timeline track */}
        <div className="absolute inset-0 flex items-center">
          <motion.div
            style={{ x, width: TIMELINE_W }}
            className="relative flex items-center"
          >
            {/* Continuous line */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-px bg-border"
              style={{ left: SIDE_PAD, width: TIMELINE_W - SIDE_PAD * 2 }}
            />

            <div style={{ width: SIDE_PAD, flexShrink: 0 }} />

            {milestones.map((m, i) => {
              const above = i % 2 === 0;
              return (
                <div
                  key={`${m.year}-${i}`}
                  className="relative flex flex-col items-center"
                  style={{ width: CARD_W, flexShrink: 0, marginRight: i < milestones.length - 1 ? GAP : 0 }}
                >
                  <div className="flex flex-col items-center text-center px-2" style={{ height: 140, justifyContent: "flex-end", paddingBottom: "2rem" }}>
                    {above && (
                      <>
                        <p className="font-display font-normal text-[clamp(1.6rem,2.2vw,2.2rem)] text-foreground leading-none mb-1.5">{m.year}</p>
                        <div className="flex items-center justify-center gap-2">
                          <p className="text-sm font-normal text-foreground leading-snug">{m.title}</p>
                          {m.current && (
                            <span className="text-[0.6rem] tracking-widest uppercase bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full leading-none shrink-0">
                              Now
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-1" style={{ maxWidth: 200 }}>{m.org}</p>
                      </>
                    )}
                  </div>

                  <div className="relative z-10">
                    <div
                      className="w-3 h-3 rounded-full border-2 border-background"
                      style={{ backgroundColor: above ? "oklch(0.55 0.14 80)" : "oklch(0.7 0 0)" }}
                    />
                  </div>

                  <div className="flex flex-col items-center text-center px-2" style={{ height: 140, justifyContent: "flex-start", paddingTop: "2rem" }}>
                    {!above && (
                      <>
                        <p className="font-display font-normal text-[clamp(1.6rem,2.2vw,2.2rem)] text-muted-foreground leading-none mb-1.5">{m.year}</p>
                        <div className="flex items-center justify-center gap-2">
                          <p className="text-sm font-normal text-foreground leading-snug">{m.title}</p>
                          {m.current && (
                            <span className="text-[0.6rem] tracking-widest uppercase bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full leading-none shrink-0">
                              Now
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-1" style={{ maxWidth: 200 }}>{m.org}</p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}

            <div style={{ width: SIDE_PAD, flexShrink: 0 }} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
