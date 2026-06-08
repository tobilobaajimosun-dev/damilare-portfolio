"use client";

import { motion } from "framer-motion";

// Detroit Paris easing
const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;
const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;

// Line mask reveal
const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, ease: EXPO_OUT, delay: i * 0.1 },
  }),
};

// Standard scroll fade — trigger at top 90% like Detroit Paris
const scrollFade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-10%" }, // fires at ~90% viewport entry
  transition: { duration: 1, ease: POWER3_INOUT, delay },
});

// Row slide-up fade — staggered
const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: POWER3_INOUT, delay: i * 0.06 },
  }),
};

const modules = [
  { number: "01", title: "The Psychology of Selling",    description: "Understand how buyers think and decide. Build trust that converts." },
  { number: "02", title: "Building a Sales System",      description: "Repeatable frameworks for prospecting, qualifying, and moving deals forward." },
  { number: "03", title: "Communication & Persuasion",   description: "Pitch, present, and negotiate with clarity, confidence, and conviction." },
  { number: "04", title: "Closing & Follow-Through",     description: "When to push, when to wait, and how to seal with integrity." },
  { number: "05", title: "Pipeline & Lead Generation",   description: "Consistent qualified leads — outreach, referrals, relationship-led selling." },
  { number: "06", title: "Scaling Through Sales",        description: "Build a team, set targets, create infrastructure for predictable revenue." },
];

const profiles = [
  { title: "Entrepreneurs & Founders",      description: "You have a product but struggle to sell it consistently." },
  { title: "Sales Professionals",           description: "You want to sharpen skills and develop a more strategic approach." },
  { title: "Business Development Leads",    description: "You need structured frameworks, not just tactics." },
  { title: "Career Changers",               description: "You want to enter sales and need a strong foundation fast." },
];

export function SalesAcademyCurriculum() {
  return (
    <section id="curriculum" className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        {/* Section header — line reveal */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 md:pb-16 border-b border-border overflow-hidden">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="font-display font-normal text-[clamp(2rem,4.5vw,3.75rem)] leading-tight tracking-tight text-foreground"
          >
            {["The", "Programme"].map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span className="block" custom={i} variants={lineReveal}>
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <motion.p
            {...scrollFade(0.2)}
            className="text-sm text-muted-foreground max-w-xs leading-relaxed md:text-right"
          >
            Six modules covering every dimension of sales mastery —
            mindset to system to scale.
          </motion.p>
        </div>

        {/* Module rows — staggered scroll reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col"
        >
          {modules.map((mod, i) => (
            <motion.div
              key={mod.number}
              custom={i}
              variants={rowVariants}
              className="grid grid-cols-[36px_1fr] md:grid-cols-[52px_1fr_1fr] items-start gap-4 md:gap-10 py-6 md:py-8 border-b border-border group hover:bg-surface/60 transition-colors duration-300 -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16"
            >
              <span className="font-mono text-xs text-muted-foreground/50 pt-0.5 tabular-nums">
                {mod.number}
              </span>
              <p className="font-display text-base md:text-lg font-normal text-foreground leading-snug">
                {mod.title}
              </p>
              <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                {mod.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Who it's for */}
        <div className="mt-20 md:mt-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border overflow-hidden">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="font-display font-normal text-[clamp(1.75rem,3.5vw,3rem)] leading-tight tracking-tight text-foreground"
            >
              {["Who", "it's for"].map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span className="block" custom={i} variants={lineReveal}>
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h2>

            <motion.p
              {...scrollFade(0.15)}
              className="text-sm text-muted-foreground max-w-xs leading-relaxed"
            >
              Built for people who are serious about sustainable growth.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {profiles.map((p, i) => (
              <motion.div
                key={p.title}
                {...scrollFade(i * 0.08)}
                className="bg-background flex flex-col gap-1.5 py-6 md:py-8 pr-6"
              >
                <p className="text-sm font-normal text-foreground">{p.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
