"use client";

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
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6 mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.2em] uppercase text-primary font-sans"
          >
            In The News
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-normal tracking-tight text-foreground"
          >
            Ideas in the{" "}
            <span className="text-muted-foreground">
              public square.
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {press.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="group flex flex-col border border-border rounded-2xl overflow-hidden hover:border-primary/25 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                {/* Replace with <Image src={item.image} ... /> */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-accent/20" />
                <span className="absolute bottom-3 left-4 text-[10px] tracking-widest uppercase text-muted-foreground/40">
                  {item.outlet}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <h3 className="font-display text-lg font-medium text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.excerpt}
                </p>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 mt-1"
                  >
                    Read more
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground/50 mt-1">
                    Link coming soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
