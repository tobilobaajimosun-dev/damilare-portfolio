"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;
const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, ease: EXPO_OUT, delay: i * 0.12 },
  }),
};

export function AssociateProgramClosing() {
  return (
    <section className="bg-background overflow-hidden border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Portrait — padded so the image breathes within the section */}
        <div className="p-6 md:p-10 flex items-stretch">
          <div className="relative w-full rounded-2xl overflow-hidden bg-surface min-h-[360px] md:min-h-[480px]">
            <Image
              src="/images/portrait-2.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
              alt="Damilare Oshokoya"
            />
          </div>
        </div>

        {/* Quote + CTA */}
        <div className="flex flex-col justify-center gap-7 px-8 md:px-12 lg:px-16 py-24 md:py-36">

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="font-display font-normal text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight text-foreground"
          >
            {[
              { text: "The right guidance",  accent: false },
              { text: "changes everything.", accent: true  },
            ].map(({ text, accent }, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className={`block ${accent ? "text-[oklch(0.52_0.16_152)]" : ""}`}
                  custom={i}
                  variants={lineReveal}
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: POWER3_INOUT, delay: 0.2 }}
            className="text-base text-muted-foreground leading-relaxed max-w-sm"
          >
            Every application is reviewed personally. If it&apos;s the right fit,
            you&apos;ll hear from us directly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: POWER3_INOUT, delay: 0.3 }}
          >
            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200"
            >
              Apply Now
              <ArrowRight size={14} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
