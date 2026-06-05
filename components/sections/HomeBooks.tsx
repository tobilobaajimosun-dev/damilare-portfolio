"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const books = [
  {
    title: "Buyology Guide",
    description:
      "A practical exploration of customer psychology, sales systems, and business growth for entrepreneurs seeking predictable results.",
    cta: "Get The Book",
    href: "#",
  },
  {
    title: "Smash It",
    description:
      "A disciplined framework for setting goals, maintaining momentum, and executing with clarity.",
    cta: "Get The Book",
    href: "#",
  },
];

export function HomeBooks() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-surface border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-12"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans">
              Books
            </p>
            <h2 className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground leading-tight">
              Ideas translated into execution.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {books.map((book) => (
              <motion.div
                key={book.title}
                variants={fadeUp}
                className="flex flex-col gap-0 bg-background border border-border rounded-2xl overflow-hidden"
              >
                {/* Book cover */}
                <div className="w-full aspect-[4/3] bg-surface border-b border-border relative overflow-hidden">
                  <Image
                    src={`/images/${book.title.toLowerCase().replace(/ /g, "-")}.jpg`}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-8 p-8">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-2xl md:text-3xl font-normal text-foreground">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                  <a
                    href={book.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-0.5 hover:text-primary hover:border-primary transition-colors duration-200 self-start"
                  >
                    {book.cta}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
