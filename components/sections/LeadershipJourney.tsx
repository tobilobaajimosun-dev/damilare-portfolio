"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const roles = [
  { title: "Co-Founder", org: "Abode" },
  { title: "Lead Consultant", org: "Integrated Acquest Global" },
  { title: "CEO", org: "Realvest" },
  { title: "COO", org: "Agbeloba" },
  { title: "COO", org: "Pettysave" },
  { title: "Global Mentor", org: "Wadhwani Foundation · Enactus · Futurize" },
  { title: "Research Contributor", org: "9 published papers on African entrepreneurship" },
];

export function LeadershipJourney() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-sans lg:sticky lg:top-24">
              Leadership Journey
            </p>
          </div>

          {/* Roles */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-9 flex flex-col divide-y divide-border"
          >
            {roles.map((role) => (
              <motion.div
                key={`${role.title}-${role.org}`}
                variants={fadeUp}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5"
              >
                <span className="text-base font-semibold text-foreground font-display min-w-[180px]">
                  {role.title}
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {role.org}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
