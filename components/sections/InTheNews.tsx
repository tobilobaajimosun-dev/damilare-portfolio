"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { press } from "@/content/press";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function InTheNews() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4 mb-16"
        >
          <motion.p variants={fadeUp} className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans">
            In The News
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground">
            Ideas in the{" "}
            <span className="text-muted-foreground">public square.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {press.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="group flex flex-col border border-border rounded-2xl overflow-hidden hover:border-primary/25 transition-all duration-300"
            >
              {/* Publication logo area */}
              <div className="aspect-[16/9] bg-surface relative overflow-hidden flex items-center justify-center p-6 border-b border-border">
                <Image
                  src={`https://logo.clearbit.com/${item.domain}`}
                  alt={item.outlet}
                  width={160}
                  height={60}
                  className="object-contain max-h-12 w-auto"
                  onError={() => {}}
                />
                <span className="absolute bottom-3 right-4 text-[0.6rem] tracking-[0.18em] uppercase text-muted-foreground/50 font-sans">
                  {item.outlet}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <h3 className="font-display text-lg font-normal text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.excerpt}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 mt-1"
                >
                  Read article
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
