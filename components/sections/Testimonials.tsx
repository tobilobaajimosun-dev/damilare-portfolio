"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/content/testimonials";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Testimonials() {
  return (
    <section className="py-10 md:py-20 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="font-display font-normal text-[clamp(2.25rem,4.5vw,3.75rem)] tracking-tight text-foreground leading-tight mb-8 md:mb-12 text-center"
        >
          What clients{" "}
          <span className="text-muted-foreground">say.</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-2xl overflow-hidden bg-surface"
            >
              <div className="flex flex-col gap-5 p-8 flex-1">
                <span
                  className="font-display text-foreground leading-none select-none"
                  style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)", lineHeight: 1 }}
                  aria-hidden
                >
                  &ldquo;&rdquo;
                </span>
                <p className="text-sm md:text-base text-foreground leading-relaxed flex-1">
                  {t.quote}
                </p>
              </div>
              <div className="bg-foreground px-8 py-5">
                <p className="text-sm font-normal text-background leading-snug">{t.name}</p>
                <p className="text-xs text-background/60 mt-0.5 leading-snug">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
