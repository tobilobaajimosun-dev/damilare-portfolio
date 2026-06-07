"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const focusAreas = [
  {
    label: "Technology",
    description:
      "Technology creates leverage. It allows good systems to reach more people and solve problems at scale.",
  },
  {
    label: "Finance",
    description:
      "Financial platforms create access. Well-designed financial products can reduce barriers and enable broader participation in economic opportunity.",
  },
  {
    label: "Real Estate",
    description:
      "Property ownership remains one of the strongest foundations for long-term stability and wealth creation. Expanding access to it requires thoughtful capital structures, disciplined execution, and trusted systems.",
  },
  {
    label: "Leadership",
    description:
      "Great businesses are built by capable people. Developing leaders and building strong teams is as important as building products.",
  },
];

export function Philosophy() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-surface">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="flex flex-col gap-24">

          {/* Areas of Focus */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans lg:sticky lg:top-24">
                Areas of Focus
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {focusAreas.map(({ label, description }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex flex-col gap-4 pt-6 border-t border-border"
                >
                  <p className="font-display text-2xl md:text-3xl font-normal text-foreground leading-tight">
                    {label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* The Work */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans lg:sticky lg:top-24">
                The Work
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-9 flex flex-col gap-5 text-base md:text-lg text-muted-foreground leading-[1.85]"
            >
              <p>I am interested in creating platforms that solve practical problems.</p>
              <p>Platforms that improve access to capital.</p>
              <p>Platforms that simplify ownership.</p>
              <p>Platforms that help people participate more meaningfully in economic growth.</p>
              <p>
                The objective is not to chase trends. It is to build useful
                systems that remain valuable over time.
              </p>
            </motion.div>
          </div>

          {/* Looking Ahead */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans lg:sticky lg:top-24">
                Looking Ahead
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-9 flex flex-col gap-5 text-base md:text-lg text-muted-foreground leading-[1.85]"
            >
              <p>The mission remains simple.</p>
              <p>Continue building platforms.</p>
              <p>Continue publishing ideas.</p>
              <p>Continue developing leaders.</p>
              <p>
                I believe durable growth requires people who think long-term,
                build responsibly, and leave better structures behind than the
                ones they inherited.
              </p>
              <p>That is the work I am committed to.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
