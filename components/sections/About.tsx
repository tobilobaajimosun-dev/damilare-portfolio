"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-8"
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
              <p>
                My perspective is shaped by faith, family, and stewardship.
              </p>
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
  );
}
