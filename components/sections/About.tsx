"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

const stats = [
  {
    value: "19",
    label: "African countries with direct venture or mentorship reach",
    img: "/images/real-estate.jpg",
  },
  {
    value: "9",
    label: "Academic research papers on entrepreneurship & SME growth",
    img: "/images/philosophy.jpg",
  },
  {
    value: "100+",
    label: "Founders and entrepreneurs personally mentored",
    img: "/images/hero.jpg",
  },
];

export function About() {
  return (
    <>
      {/* ── The Foundation ─────────────────────────────────────── */}
      <section
        id="about"
        className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background scroll-mt-20"
      >
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-8 lg:sticky lg:top-24"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display font-normal text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-tight text-foreground"
              >
                The Foundation
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-6 text-base md:text-lg text-muted-foreground leading-[1.85]"
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
              className="aspect-[3/4] rounded-2xl overflow-hidden relative"
            >
              <Image
                src="/images/philosophy.jpg"
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
      <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background border-t border-border">
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="font-display font-normal text-[clamp(2.5rem,6vw,5rem)] leading-tight tracking-tight text-foreground mb-4"
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
                className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_1fr_260px] items-center gap-6 md:gap-10 py-10 border-t border-border"
              >
                <p className="text-sm md:text-base text-muted-foreground leading-snug max-w-[220px] md:max-w-none">
                  {stat.label}
                </p>

                <p className="font-display font-normal text-primary leading-none tracking-tight text-[clamp(4.5rem,10vw,9rem)]">
                  {stat.value}
                </p>

                <div className="hidden md:block aspect-square w-[260px] rounded-xl overflow-hidden relative shrink-0">
                  <Image
                    src={stat.img}
                    alt=""
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
