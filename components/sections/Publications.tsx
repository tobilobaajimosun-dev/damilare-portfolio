"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { publications } from "@/content/books";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Publications() {
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
          <motion.p
            variants={fadeUp}
            className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans"
          >
            Publications
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <h2 className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground">
              Books &amp; research.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Knowledge built in the field and refined on the page.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {publications.map((pub) => (
            <motion.div
              key={pub.title}
              variants={fadeUp}
              className="group flex flex-col border border-border rounded-2xl overflow-hidden hover:border-foreground/20 hover:shadow-sm transition-all duration-300"
            >
              {/* Cover image or icon placeholder */}
              <div className="aspect-[4/3] bg-surface relative overflow-hidden border-b border-border">
                {pub.image ? (
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText size={32} className="text-muted-foreground/30" strokeWidth={1} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between gap-6 p-6 flex-1">
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-normal text-foreground leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pub.description}
                  </p>
                </div>

                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 self-start"
                  >
                    {pub.cta}
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground/40">{pub.cta} — coming soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
