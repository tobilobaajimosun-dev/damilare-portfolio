"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const pillars = [
  { number: "01", text: "Think Bigger." },
  { number: "02", text: "Act With Purpose." },
  { number: "03", text: "Build With Integrity." },
  { number: "04", text: "Impact Others." },
];

export function Philosophy() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-surface">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-sans lg:sticky lg:top-24">
              Philosophy
            </p>
          </div>

          <div className="lg:col-span-9 flex flex-col gap-12">
            {/* Pillars */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {pillars.map((p) => (
                <motion.div
                  key={p.number}
                  variants={fadeUp}
                  className="flex flex-col gap-3 pt-6 border-t border-border"
                >
                  <span className="text-xs text-primary font-mono">{p.number}</span>
                  <p className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    {p.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="pt-8 border-t border-border"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-4">
                Personal Mission
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                To inspire people to pursue bigger possibilities, build
                sustainable businesses, and create positive change in their
                communities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
