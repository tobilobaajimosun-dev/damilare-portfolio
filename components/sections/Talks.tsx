"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { talks } from "@/content/talks";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Talks() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-surface">
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
            Talks &amp; Media
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-normal tracking-tight text-foreground"
          >
            On the{" "}
            <span className="text-muted-foreground">
              stage.
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {talks.map((talk) => (
            <motion.a
              key={talk.title}
              variants={fadeUp}
              href={talk.url ?? undefined}
              target={talk.url ? "_blank" : undefined}
              rel={talk.url ? "noopener noreferrer" : undefined}
              className="group flex flex-col"
            >
              {/* Video thumbnail */}
              <div className="aspect-video bg-foreground/90 rounded-2xl relative overflow-hidden flex items-center justify-center">
                {/* Replace with <Image src={talk.thumbnail} ... /> */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground to-foreground/70" />
                <div className="relative w-14 h-14 rounded-full bg-background/95 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play
                    size={20}
                    className="text-foreground ml-0.5"
                    fill="currentColor"
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="flex flex-col gap-1 pt-5">
                <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                  {talk.title}
                </h3>
                <p className="text-sm text-muted-foreground">{talk.venue}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
