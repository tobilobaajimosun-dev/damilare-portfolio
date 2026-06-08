"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Globe, UserCheck, TrendingUp, Award } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const items = [
  {
    Icon: BookOpen,
    title: "Structured Curriculum",
    description:
      "Core frameworks covering documentation, client engagement, negotiation, and execution, designed to move you from foundations to advanced strategy.",
  },
  {
    Icon: Users,
    title: "Group Sessions with Damilare",
    description:
      "Regular live sessions where Damilare engages directly with members: practical, honest, and grounded in real experience.",
  },
  {
    Icon: Globe,
    title: "Private Member Network",
    description:
      "Access a vetted community of professionals building in real estate across Africa. The relationships compound over time.",
  },
  {
    Icon: UserCheck,
    title: "One-on-One Mentorship",
    description:
      "Personalised guidance from experienced professionals, matched to your growth stage and calibrated to your specific goals.",
  },
  {
    Icon: TrendingUp,
    title: "Deal Flow & Opportunities",
    description:
      "Active members gain curated access to real projects, partnerships, and referral opportunities as they demonstrate readiness.",
  },
  {
    Icon: Award,
    title: "Performance-Based Advancement",
    description:
      "Growth within the programme is earned. Consistent execution unlocks higher-level roles, responsibilities, and recognition.",
  },
];

export function AssociateProgramIncludes() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-foreground border-t border-background/10">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-12"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-3 max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-background leading-tight">
              Everything the programme includes.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {items.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex flex-col gap-4 p-7 bg-background/5 border border-background/10 rounded-2xl hover:bg-background/10 transition-colors duration-200"
              >
                <item.Icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-background/60"
                />
                <h3 className="font-display text-lg font-normal text-background">{item.title}</h3>
                <p className="text-sm text-background/50 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
