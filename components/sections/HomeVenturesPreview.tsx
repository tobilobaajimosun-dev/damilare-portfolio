"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const ventures = [
  {
    name: "Abode",
    logo: "/images/abode-logo.svg",
    description:
      "Expanding access to homeownership through technology-driven real estate solutions.",
    href: "https://abodeflex.ng",
  },
  {
    name: "Realvest",
    logo: "/images/realvest-logo.svg",
    description:
      "Structuring real estate investment and home-financing opportunities across African markets.",
    href: "https://realvest.ng",
  },
  {
    name: "Agbeloba",
    logo: "/images/agbeloba-logo.png",
    description:
      "Connecting farmers to financing, resources, and opportunities for growth.",
    href: "https://agbeloba.ng",
  },
  {
    name: "Pettysave",
    logo: "/images/pettysave-logo.svg",
    description:
      "Driving financial inclusion through accessible savings and finance solutions.",
    href: "https://pettysave.com",
  },
];

export function HomeVenturesPreview() {
  return (
    <section className="py-14 md:py-24 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground max-w-xl leading-tight">
                Building &amp; Leading Platforms
              </h2>
              <p className="text-muted-foreground text-sm max-w-md leading-relaxed mt-1">
                Operating at the intersection of capital, technology, and
                entrepreneurship across African markets.
              </p>
            </div>
            <Link
              href="/ventures"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-200"
            >
              View All Ventures
              <ArrowRight size={13} />
            </Link>
          </motion.div>

          {/* Ventures grid with logos */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border"
          >
            {ventures.map((v) => (
              <motion.a
                key={v.name}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="group flex flex-col gap-6 p-7 bg-background hover:bg-surface transition-colors duration-300"
              >
                {/* Logo */}
                <div className="h-7 flex items-center">
                  <Image
                    src={v.logo}
                    alt={`${v.name} logo`}
                    width={80}
                    height={28}
                    className="object-contain object-left max-h-7 w-auto"
                    unoptimized
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-normal text-foreground group-hover:text-primary transition-colors duration-200">
                    {v.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
