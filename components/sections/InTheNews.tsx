"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { press } from "@/content/press";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function InTheNews() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-3 mb-10"
        >
          <motion.p variants={fadeUp} className="text-[0.65rem] tracking-[0.1em] uppercase text-primary font-sans">
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
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="group flex flex-col border border-border rounded-2xl overflow-hidden hover:border-primary/25 hover:shadow-sm transition-all duration-300"
            >
              {/* Cover image or outlet fallback */}
              <div className="aspect-[16/9] bg-surface relative overflow-hidden border-b border-border">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <span className="text-xs tracking-[0.1em] uppercase text-muted-foreground/40 font-sans text-center">
                      {item.outlet}
                    </span>
                  </div>
                )}
                {/* Outlet badge */}
                <span className="absolute bottom-2 left-3 text-[0.58rem] tracking-[0.08em] uppercase font-sans px-2 py-0.5 rounded bg-background/85 backdrop-blur-sm text-foreground/60 border border-border/50">
                  {item.outlet}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="font-display text-base font-normal text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary mt-1">
                  Read article
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
