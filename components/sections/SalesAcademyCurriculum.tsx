"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const modules = [
  {
    number: "01",
    title: "The Psychology of Selling",
    description:
      "Understand how buyers think and decide. Learn to read the room, identify real objections, and build the kind of trust that converts.",
  },
  {
    number: "02",
    title: "Building a Sales System",
    description:
      "A sale is not an event — it is a process. Build repeatable frameworks for prospecting, qualifying, and moving deals forward.",
  },
  {
    number: "03",
    title: "Communication & Persuasion",
    description:
      "Master the language of sales. Pitch, present, and negotiate with clarity, confidence, and conviction.",
  },
  {
    number: "04",
    title: "Closing & Follow-Through",
    description:
      "Most deals are lost in the follow-up, not the close. Learn when to push, when to wait, and how to seal with integrity.",
  },
  {
    number: "05",
    title: "Pipeline & Lead Generation",
    description:
      "Build a consistent flow of qualified leads. Understand digital outreach, referrals, and relationship-led selling for African markets.",
  },
  {
    number: "06",
    title: "Scaling Through Sales",
    description:
      "From solo founder to sales-led organisation. Build a team, set targets, and create the infrastructure for predictable revenue growth.",
  },
];

export function SalesAcademyCurriculum() {
  return (
    <section id="curriculum" className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-14"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-3 max-w-xl">
            <p className="text-xs tracking-[0.22em] uppercase text-primary font-sans">Curriculum</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight">
              What you will learn.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Six intensive modules covering every dimension of sales mastery — from mindset to system to scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {modules.map((mod) => (
              <motion.div
                key={mod.number}
                variants={fadeUp}
                className="flex flex-col gap-4 p-8 bg-background hover:bg-surface transition-colors duration-200"
              >
                <span className="font-mono text-xs text-primary">{mod.number}</span>
                <h3 className="font-display text-xl font-normal text-foreground">{mod.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
