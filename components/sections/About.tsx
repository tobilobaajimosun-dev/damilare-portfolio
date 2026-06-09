"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

const stats = [
  {
    value: "19",
    label: "African countries with direct venture or mentorship reach",
    img: "/images/about-stat-1.jpg",
  },
  {
    value: "9",
    label: "Academic research papers on entrepreneurship & SME growth",
    img: "/images/about-stat-2.jpg",
  },
  {
    value: "100+",
    label: "Founders and entrepreneurs personally mentored",
    img: "/images/about-stat-3.jpg",
  },
];

export function About() {
  return (
    <>
      {/* ── The Foundation ─────────────────────────────────────── */}
      <section
        id="about"
        className="py-10 md:py-20 px-6 md:px-10 lg:px-16 scroll-mt-20"
        style={{ backgroundColor: "oklch(0.26 0.07 152 / 0.04)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-6 md:gap-8 lg:sticky lg:top-24"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display font-normal text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-tight text-foreground"
              >
                The Foundation
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-5 text-base md:text-lg text-muted-foreground leading-[1.85]"
              >
                <p>My perspective is shaped by faith, family, and stewardship.</p>
                <p>
                  Being a husband has reinforced the belief that leadership is not
                  about recognition. It is about responsibility. What is built
                  should be sustainable, beneficial to others, and capable of
                  serving people long after the initial excitement has passed.
                </p>
                <p>
                  These values influence how I approach business, partnerships,
                  mentorship, and decision-making.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl overflow-hidden relative w-full"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/about-foundation.jpg"
                alt="Oshokoya Damilare"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── By the numbers ─────────────────────────────────────── */}
      <section
        className="py-10 md:py-20 px-6 md:px-10 lg:px-16 border-t border-border"
        style={{ backgroundColor: "oklch(0.26 0.07 152 / 0.03)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="font-display font-normal text-[clamp(2rem,6vw,5rem)] leading-tight tracking-tight text-foreground mb-4"
          >
            By the numbers
          </motion.h2>

          <div className="flex flex-col">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_1fr_260px] md:items-center gap-1 md:gap-10 py-8 md:py-10 border-t border-border"
              >
                <p className="text-sm md:text-base text-muted-foreground leading-snug order-2 md:order-1 mt-2 md:mt-0 max-w-xs md:max-w-none">
                  {stat.label}
                </p>

                <p className="font-display font-normal text-primary leading-none tracking-tight text-[clamp(3.5rem,9vw,9rem)] order-1 md:order-2">
                  {stat.value}
                </p>

                <div className="hidden md:block aspect-square w-[260px] rounded-xl overflow-hidden relative shrink-0 order-3">
                  <Image
                    src={stat.img}
                    alt={stat.label}
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                </div>
              </motion.div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>
    </>
  );
}
