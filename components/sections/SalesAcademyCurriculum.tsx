"use client";

import { motion } from "framer-motion";

const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;
const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, ease: EXPO_OUT, delay: i * 0.1 },
  }),
};

const scrollFade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 1, ease: POWER3_INOUT, delay },
});

const rowVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: POWER3_INOUT, delay: i * 0.06 },
  }),
};

const pillars = [
  {
    number: "01",
    title: "Structured Learning",
    description: "Learn documentation, customer engagement, sales systems, negotiation, and disciplined execution.",
  },
  {
    number: "02",
    title: "Practical Mentorship",
    description: "Receive guidance from experienced professionals who have built businesses and led teams.",
  },
  {
    number: "03",
    title: "Performance-Based Growth",
    description: "Progress through measurable action and consistent execution.",
  },
  {
    number: "04",
    title: "Access To Opportunities",
    description: "Participate within a network connected to real projects, partnerships, and business opportunities.",
  },
  {
    number: "05",
    title: "Community",
    description: "Grow alongside people committed to learning, accountability, and long-term thinking.",
  },
];

export function SalesAcademyCurriculum() {
  return (
    <section id="programme" className="bg-background">

      {/* ── Why This Exists ──────────────────────────────── */}
      <div className="py-20 md:py-32 px-6 md:px-10 lg:px-16 border-t border-border">
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

            {/* Left — headline */}
            <div className="overflow-hidden">
              <motion.p
                {...scrollFade(0)}
                className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans mb-6"
              >
                Why This Exists
              </motion.p>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="font-display font-normal text-[clamp(2rem,4.5vw,3.75rem)] leading-tight tracking-tight text-foreground"
              >
                {["Opportunity", "should not", "be chaotic."].map((line, i) => (
                  <span key={i} className="block overflow-hidden">
                    <motion.span className="block" custom={i} variants={lineReveal}>
                      {line}
                    </motion.span>
                  </span>
                ))}
              </motion.h2>
            </div>

            {/* Right — body */}
            <motion.div
              {...scrollFade(0.2)}
              className="flex flex-col gap-5 text-base text-muted-foreground leading-relaxed self-end"
            >
              <p>
                Too many people enter real estate without structure, mentorship,
                or a clear growth path.
              </p>
              <p>
                The Associate Program was created to help people grow through
                systems, accountability, and practical execution. Members
                receive guidance, develop skills, and build confidence within
                an ecosystem designed for long-term success.
              </p>
              <p className="text-foreground">This is organised opportunity.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── What Members Experience ───────────────────────── */}
      <div className="py-20 md:py-32 px-6 md:px-10 lg:px-16 border-t border-border">
        <div className="mx-auto w-full max-w-[var(--container-default)]">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 md:pb-16 border-b border-border overflow-hidden">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="font-display font-normal text-[clamp(2rem,4.5vw,3.75rem)] leading-tight tracking-tight text-foreground"
            >
              {["What Members", "Experience"].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span className="block" custom={i} variants={lineReveal}>
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h2>
            <motion.p
              {...scrollFade(0.2)}
              className="text-sm text-muted-foreground max-w-xs leading-relaxed"
            >
              Five pillars that define how members learn, grow, and succeed
              within the programme.
            </motion.p>
          </div>

          {/* Pillar rows — Detroit Paris editorial style */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.number}
                custom={i}
                variants={rowVariants}
                className="grid grid-cols-[36px_1fr] md:grid-cols-[52px_1fr_1fr] items-start gap-4 md:gap-10 py-6 md:py-8 border-b border-border hover:bg-surface/60 transition-colors duration-300 -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16"
              >
                <span className="font-mono text-xs text-muted-foreground/50 pt-0.5 tabular-nums">
                  {p.number}
                </span>
                <p className="font-display text-base md:text-lg font-normal text-foreground leading-snug">
                  {p.title}
                </p>
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
}
