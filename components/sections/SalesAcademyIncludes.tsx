"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const includes = [
  {
    icon: "◎",
    title: "8 Live Group Sessions",
    description: "Weekly live sessions with Damilare — interactive, practical, and direct.",
  },
  {
    icon: "◈",
    title: "Frameworks & Templates",
    description: "Sales scripts, pitch decks, pipeline trackers, and prospecting tools you can use immediately.",
  },
  {
    icon: "✦",
    title: "Private Community",
    description: "Access a cohort of serious entrepreneurs and sales professionals across Africa.",
  },
  {
    icon: "◉",
    title: "1-on-1 Coaching Call",
    description: "A dedicated session to review your specific sales situation and build a personal action plan.",
  },
  {
    icon: "⊕",
    title: "Recordings & Resources",
    description: "Every session is recorded. Access the full library for 12 months after the cohort ends.",
  },
  {
    icon: "◐",
    title: "Certificate of Completion",
    description: "A recognition of your commitment and the skills you have built through the programme.",
  },
];

export function SalesAcademyIncludes() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-foreground border-t border-background/10">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-14"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-3 max-w-xl">
            <p className="text-xs tracking-[0.1em] uppercase text-primary font-sans">What Is Included</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-background leading-tight">
              Everything you need to close more deals.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {includes.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex flex-col gap-4 p-7 bg-background/5 border border-background/10 rounded-2xl hover:bg-background/10 transition-colors duration-200"
              >
                <span className="text-primary text-2xl leading-none">{item.icon}</span>
                <h3 className="font-display text-lg font-normal text-background">{item.title}</h3>
                <p className="text-sm text-background/50 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
