"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const profiles = [
  {
    title: "Entrepreneurs & Founders",
    description:
      "You have a product or service but struggle to sell it consistently. You want to build a sales process you can eventually hand off.",
  },
  {
    title: "Sales Professionals",
    description:
      "You are already in sales but want to sharpen your skills, increase your closing rate, and develop a more strategic approach.",
  },
  {
    title: "Business Development Leads",
    description:
      "You are responsible for growing revenue and need structured frameworks, not just tactics.",
  },
  {
    title: "Career Changers",
    description:
      "You want to enter sales or move into a role where selling matters — and you need a strong foundation fast.",
  },
];

export function SalesAcademyWhoIsItFor() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-surface border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — image spot */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-background">
              {/* 👉 Add: <Image src="/images/sales-training.jpg" alt="Sales Training" fill className="object-cover" /> */}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <p className="text-xs tracking-[0.1em] uppercase text-primary font-sans">Who It Is For</p>
              <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-foreground leading-tight">
                Built for people who are serious about growth.
              </h2>
            </motion.div>

            <div className="flex flex-col gap-6">
              {profiles.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  className="flex flex-col gap-1.5 pb-6 border-b border-border last:border-0"
                >
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-lg font-normal text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
