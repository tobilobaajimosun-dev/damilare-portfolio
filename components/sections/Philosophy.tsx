"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E")`;

const focusAreas = [
  {
    label: "Technology",
    description: "Technology creates leverage. It allows good systems to reach more people and solve problems at scale.",
    bg: "linear-gradient(135deg,#071a10 0%,#0d2b1a 50%,#030e08 100%)",
  },
  {
    label: "Finance",
    description: "Financial platforms create access. Well-designed products reduce barriers and enable broader economic participation.",
    bg: "linear-gradient(135deg,#061518 0%,#0b2620 50%,#020c0e 100%)",
  },
  {
    label: "Real Estate",
    description: "Property ownership is one of the strongest foundations for long-term stability. Expanding access requires disciplined execution and trusted systems.",
    bg: "linear-gradient(135deg,#0a1f0c 0%,#143318 50%,#050e06 100%)",
  },
  {
    label: "Leadership",
    description: "Great businesses are built by capable people. Developing leaders and building strong teams is as important as building products.",
    bg: "linear-gradient(135deg,#161208 0%,#241e0d 50%,#0d0b04 100%)",
  },
];

const commitments = [
  { label: "Building", body: "Creating platforms that solve practical problems and expand access to capital and ownership." },
  { label: "Publishing", body: "Sharing ideas across business, leadership, and entrepreneurship for founders who think long-term." },
  { label: "Developing", body: "Investing in the next generation of capable leaders who build responsibly and think beyond themselves." },
];

export function Philosophy() {
  return (
    <section className="bg-background">

      {/* Areas of Focus */}
      <div className="py-24 md:py-32 px-6 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-4 max-w-2xl"
            >
              <h2 className="font-display font-normal text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-tight text-foreground">
                Where I focus my work.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Each area is a system. Each system is an opportunity to expand access,
                build trust, and create durable value.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {focusAreas.map(({ label, description, bg }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                  style={{ background: bg }}
                >
                  {/* Noise overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: NOISE_SVG, backgroundSize: "200px 200px" }}
                  />
                  {/* Subtle inner border */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/8 pointer-events-none" />

                  <div className="absolute top-6 left-6 right-6">
                    <p className="font-display font-bold text-white text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">
                      {label}
                    </p>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm text-white/55 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Looking Ahead */}
      <div className="py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-surface">
        <div className="mx-auto w-full max-w-[var(--container-default)]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center gap-16"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-normal text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-tight text-foreground text-center"
            >
              The mission{" "}
              <span className="text-muted-foreground">remains simple.</span>
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
            >
              {commitments.map(({ label, body }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex flex-col gap-4 p-7 rounded-2xl border border-border bg-background"
                >
                  <p className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-normal text-foreground leading-tight">
                    Continue {label}.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-base text-muted-foreground leading-relaxed max-w-2xl text-center border-t border-border pt-10"
            >
              I believe durable growth requires people who think long-term, build
              responsibly, and leave better structures behind than the ones they
              inherited. That is the work I am committed to.
            </motion.p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
