"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const focusAreas = [
  {
    label: "Technology",
    description: "Technology creates leverage. It allows good systems to reach more people and solve problems at scale.",
    image: "/images/hero.jpg",
    gradient: "from-emerald-900/70 via-emerald-950/50 to-neutral-950/90",
  },
  {
    label: "Finance",
    description: "Financial platforms create access. Well-designed products reduce barriers and enable broader economic participation.",
    image: "/images/real-estate.jpg",
    gradient: "from-teal-900/70 via-neutral-900/60 to-neutral-950/90",
  },
  {
    label: "Real Estate",
    description: "Property ownership is one of the strongest foundations for long-term stability. Expanding access requires disciplined execution and trusted systems.",
    image: "/images/real-estate.jpg",
    gradient: "from-green-900/70 via-emerald-950/50 to-neutral-950/90",
  },
  {
    label: "Leadership",
    description: "Great businesses are built by capable people. Developing leaders and building strong teams is as important as building products.",
    image: "/images/philosophy.jpg",
    gradient: "from-emerald-900/60 via-teal-950/50 to-neutral-950/90",
  },
];

const commitments = [
  "Continue building platforms.",
  "Continue publishing ideas.",
  "Continue developing leaders.",
];

export function Philosophy() {
  return (
    <section className="bg-background">

      {/* Areas of Focus */}
      <div className="py-24 md:py-32 px-6 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans">
                Areas of Focus
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {focusAreas.map(({ label, description, image, gradient }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-950 group"
                >
                  <Image
                    src={image}
                    alt={label}
                    fill
                    className="object-cover opacity-35 group-hover:opacity-45 transition-opacity duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

                  <div className="absolute top-6 left-6 right-6">
                    <p className="font-display font-bold text-white text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">
                      {label}
                    </p>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm text-white/65 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Work */}
      <div className="py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-surface">
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center text-center gap-10 max-w-3xl mx-auto"
          >
            <motion.p variants={fadeUp} className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans">
              The Work
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-normal text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-tight text-foreground"
            >
              Platforms that solve practical problems.
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 text-base md:text-lg text-muted-foreground leading-[1.85]"
            >
              <p>Platforms that improve access to capital.</p>
              <p>Platforms that simplify ownership.</p>
              <p>Platforms that help people participate more meaningfully in economic growth.</p>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-sm text-muted-foreground/70 max-w-lg leading-relaxed"
            >
              The objective is not to chase trends. It is to build useful
              systems that remain valuable over time.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Looking Ahead */}
      <div className="py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-background">
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-16"
          >
            <motion.p variants={fadeUp} className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans">
              Looking Ahead
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.h2
                variants={fadeUp}
                className="font-display font-normal text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.04] tracking-tight text-foreground"
              >
                The mission{" "}
                <span className="text-muted-foreground">remains simple.</span>
              </motion.h2>

              <motion.div variants={fadeUp} className="flex flex-col gap-10 pt-2">
                <div className="flex flex-col gap-0 divide-y divide-border">
                  {commitments.map((c) => (
                    <p
                      key={c}
                      className="font-display font-normal text-xl md:text-2xl text-foreground py-5 leading-snug"
                    >
                      {c}
                    </p>
                  ))}
                </div>

                <p className="text-base text-muted-foreground leading-relaxed border-l-2 border-primary pl-5">
                  I believe durable growth requires people who think long-term,
                  build responsibly, and leave better structures behind than the
                  ones they inherited. That is the work I am committed to.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
