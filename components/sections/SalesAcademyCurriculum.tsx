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

// ₦ removed from 1B+
const stats = [
  { number: "200+", label: "Professionals mentored" },
  { number: "1B+",  label: "Opportunities shared"   },
  { number: "10+",  label: "Expert mentors"          },
  { number: "3",    label: "Cohorts completed"       },
];

const pillars = [
  {
    number: "01",
    title: "Structured Learning",
    description:
      "Learn documentation, customer engagement, negotiation frameworks, and disciplined execution: the building blocks of a sustainable real estate business.",
    image: "/images/real-estate.jpg",
  },
  {
    number: "02",
    title: "Practical Mentorship",
    description:
      "Receive guidance from experienced professionals who have built businesses and navigated the real estate landscape across multiple cycles.",
    image: "/images/portrait-2.jpg",
  },
  {
    number: "03",
    title: "Performance-Based Growth",
    description:
      "Progress through measurable action and consistent execution. Growth within the programme reflects real-world competence, not time served.",
    image: "/images/about-foundation.jpg",
  },
  {
    number: "04",
    title: "Access To Opportunities",
    description:
      "Participate within a network connected to real projects, partnerships, and deal flow. Active members gain access as they demonstrate readiness.",
    image: "/images/philosophy.jpg",
  },
  {
    number: "05",
    title: "Community",
    description:
      "Grow alongside people committed to learning, accountability, and long-term thinking. The network compounds over time.",
    image: "/images/about-stat-1.jpg",
  },
];

export function SalesAcademyCurriculum() {
  return (
    <section id="programme" className="bg-background">

      {/* ── Why This Exists ──────────────────────────────── */}
      <div className="pt-16 md:pt-24 pb-10 md:pb-14 px-6 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div>
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

      {/* ── Stats — no top border, tighter spacing ───────── */}
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

        {/* Centred section header */}
        <div className="px-6 md:px-10 lg:px-16 pt-14 md:pt-20 pb-10 md:pb-14">
          <div className="mx-auto w-full max-w-[var(--container-default)] flex flex-col items-center text-center gap-4">
            <motion.p
              {...scrollFade(0)}
              className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans"
            >
              Five Pillars
            </motion.p>
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

        {/* Pillar rows — full-bleed image + text, inspired by editorial layout */}
        {pillars.map((p, i) => {
          const imageLeft = i % 2 === 0;

          return (
            <motion.div
              key={p.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.9, ease: POWER3_INOUT }}
              className="grid grid-cols-1 md:grid-cols-2 border-t border-border"
            >
              {/* Image side — full-bleed, no bg tint */}
              <div
                className={`relative overflow-hidden ${imageLeft ? "md:order-1" : "md:order-2"}`}
                style={{ minHeight: 460 }}
              >
                <Image
                  src={p.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  alt={p.title}
                />
              </div>

              {/* Text side */}
              <div
                className={`flex flex-col justify-center gap-4 px-8 md:px-10 lg:px-14 py-10 md:py-14 ${
                  imageLeft ? "md:order-2" : "md:order-1"
                }`}
              >
                <span className="font-mono text-xs text-muted-foreground/40 tabular-nums">
                  {p.number}
                </span>
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

    </section>
  );
}
