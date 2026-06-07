"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const modules = [
  {
    number: "01",
    title: "The Psychology of Selling",
    description: "Understand how buyers think and decide. Build trust that converts.",
  },
  {
    number: "02",
    title: "Building a Sales System",
    description: "Repeatable frameworks for prospecting, qualifying, and moving deals forward.",
  },
  {
    number: "03",
    title: "Communication & Persuasion",
    description: "Pitch, present, and negotiate with clarity, confidence, and conviction.",
  },
  {
    number: "04",
    title: "Closing & Follow-Through",
    description: "When to push, when to wait, and how to seal with integrity.",
  },
  {
    number: "05",
    title: "Pipeline & Lead Generation",
    description: "Consistent qualified leads — outreach, referrals, relationship-led selling.",
  },
  {
    number: "06",
    title: "Scaling Through Sales",
    description: "Build a team, set targets, create infrastructure for predictable revenue.",
  },
];

const profiles = [
  { title: "Entrepreneurs & Founders", description: "You have a product but struggle to sell it consistently." },
  { title: "Sales Professionals", description: "You want to sharpen skills and develop a more strategic approach." },
  { title: "Business Development Leads", description: "You need structured frameworks, not just tactics." },
  { title: "Career Changers", description: "You want to enter sales and need a strong foundation fast." },
];

export function SalesAcademyCurriculum() {
  return (
    <section id="curriculum" className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 md:pb-16 border-b border-border"
        >
          <h2 className="font-display font-normal text-[clamp(2rem,4.5vw,3.75rem)] leading-tight tracking-tight text-foreground">
            The Programme
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Six modules covering every dimension of sales mastery — mindset to system to scale.
          </p>
        </motion.div>

        {/* Module rows — editorial, divider style */}
        <div className="flex flex-col">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-[36px_1fr] md:grid-cols-[52px_1fr_1fr] items-start gap-4 md:gap-10 py-6 md:py-8 border-b border-border group hover:bg-surface/60 transition-colors duration-200 -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16"
            >
              <span className="font-mono text-xs text-muted-foreground/60 pt-0.5">{mod.number}</span>
              <p className="font-display text-base md:text-lg font-normal text-foreground leading-snug">
                {mod.title}
              </p>
              <p className="hidden md:block text-sm text-muted-foreground leading-relaxed col-start-3">
                {mod.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Who it's for */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 md:mt-28"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border">
            <h2 className="font-display font-normal text-[clamp(1.75rem,3.5vw,3rem)] leading-tight tracking-tight text-foreground">
              Who it's for
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Built for people who are serious about sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border mt-0">
            {profiles.map((p) => (
              <div
                key={p.title}
                className="bg-background flex flex-col gap-1.5 py-6 md:py-8 pr-6"
              >
                <p className="text-sm font-normal text-foreground">{p.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
