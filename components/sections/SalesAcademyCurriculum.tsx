"use client";

import Image from "next/image";
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

const stats = [
  { number: "200+", label: "Professionals mentored" },
  { number: "1B+",  label: "Opportunities shared"   },
  { number: "10+",  label: "Expert mentors"          },
  { number: "3",    label: "Cohorts completed"       },
];

const pillars = [
  {
    title: "Structured Learning",
    description:
      "Learn documentation, customer engagement, negotiation frameworks, and disciplined execution: the building blocks of a sustainable real estate business.",
    image: "/images/real-estate.jpg",
  },
  {
    title: "Practical Mentorship",
    description:
      "Receive guidance from experienced professionals who have built businesses and navigated the real estate landscape across multiple cycles.",
    image: "/images/portrait-2.jpg",
  },
  {
    title: "Performance-Based Growth",
    description:
      "Progress through measurable action and consistent execution. Growth within the programme reflects real-world competence, not time served.",
    image: "/images/about-foundation.jpg",
  },
  {
    title: "Access To Opportunities",
    description:
      "Participate within a network connected to real projects, partnerships, and deal flow. Active members gain access as they demonstrate readiness.",
    image: "/images/philosophy.jpg",
  },
  {
    title: "Community",
    description:
      "Grow alongside people committed to learning, accountability, and long-term thinking. The network compounds over time.",
    image: "/images/about-stat-1.jpg",
  },
];

export function SalesAcademyCurriculum() {
  return (
    <section id="programme" className="bg-background relative overflow-hidden">

      {/* ── Decorative D-shape arcs ──────────────────────────── */}
      <div
        className="absolute right-0 translate-x-1/2 rounded-full border border-foreground/[0.05] pointer-events-none"
        style={{ width: "min(45vw, 560px)", aspectRatio: "1/1", top: "8%" }}
        aria-hidden
      />
      <div
        className="absolute left-0 -translate-x-1/2 rounded-full border border-foreground/[0.05] pointer-events-none"
        style={{ width: "min(32vw, 440px)", aspectRatio: "1/1", bottom: "30%" }}
        aria-hidden
      />

      {/* ── Why This Exists ──────────────────────────────── */}
      <div className="pt-[88px] md:pt-[120px] pb-10 md:pb-14 px-6 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div>
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

      {/* ── Stats ────────────────────────────────────────── */}
      <div className="px-6 md:px-10 lg:px-16 pb-14 md:pb-20">
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: POWER3_INOUT, delay: i * 0.07 }}
                className="flex flex-col gap-2"
              >
                <span className="font-display font-normal text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight text-foreground">
                  {s.number}
                </span>
                <span className="text-sm text-muted-foreground leading-snug">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── What Members Experience ───────────────────────── */}
      <div className="border-t border-border">

        {/* Section header — no eyebrow */}
        <div className="px-6 md:px-10 lg:px-16 pt-14 md:pt-20 pb-10 md:pb-14">
          <div className="mx-auto w-full max-w-[var(--container-default)] flex flex-col items-center text-center gap-4">
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
              className="text-sm text-muted-foreground max-w-sm leading-relaxed"
            >
              Five pillars that define how members learn, grow, and succeed
              within the programme.
            </motion.p>
          </div>
        </div>

        {/* Pillar rows — contained within site margin, no dividers, no numbers */}
        <div className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
          <div className="mx-auto w-full max-w-[var(--container-default)]">
            <div className="flex flex-col gap-8 md:gap-10">
              {pillars.map((p, i) => {
                const imageLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-8%" }}
                    transition={{ duration: 0.9, ease: POWER3_INOUT }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                  >
                    {/* Image card */}
                    <div
                      className={`relative rounded-2xl overflow-hidden bg-surface ${
                        imageLeft ? "md:order-1" : "md:order-2"
                      }`}
                      style={{ minHeight: 380 }}
                    >
                      <Image
                        src={p.image}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        alt={p.title}
                      />
                    </div>

                    {/* Text */}
                    <div
                      className={`flex flex-col justify-center gap-4 py-4 md:py-8 ${
                        imageLeft ? "md:order-2 md:pl-4" : "md:order-1 md:pr-4"
                      }`}
                    >
                      <h3 className="font-display font-normal text-2xl md:text-3xl leading-snug text-foreground">
                        {p.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                        {p.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
