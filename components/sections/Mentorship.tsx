"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const programmes = [
  { name: "Wadhwani Foundation", domain: "wadhwanifoundation.org" },
  { name: "Enactus", domain: "enactus.org" },
  { name: "Futurize", domain: "futurize.africa" },
];

export function Mentorship() {
  return (
    <section
      id="mentorship"
      className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        {/* Centered header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center gap-6 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground leading-tight"
          >
            Growing the next{" "}
            <span className="text-muted-foreground">generation.</span>
          </motion.h2>

          <motion.blockquote variants={fadeUp} className="max-w-2xl">
            <p className="font-display text-xl md:text-2xl font-normal text-muted-foreground leading-snug">
              &ldquo;The most meaningful work I do isn&apos;t measured in
              revenue. It&apos;s measured in the founders who found their
              footing.&rdquo;
            </p>
          </motion.blockquote>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 text-base text-muted-foreground leading-[1.8] max-w-2xl"
          >
            <p>
              I&apos;ve had the privilege of mentoring hundreds of entrepreneurs
              — from first-time founders navigating their earliest challenges, to
              seasoned executives stepping into a larger version of themselves.
              My approach is direct and practical: I share what I know from
              building real businesses in real markets.
            </p>
          </motion.div>
        </motion.div>

        {/* Programme logos */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap items-center justify-center gap-8 mb-12"
        >
          {programmes.map(({ name, domain }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="flex items-center justify-center h-12 px-6 bg-surface border border-border rounded-xl"
            >
              <Image
                src={`https://logo.clearbit.com/${domain}`}
                alt={name}
                width={120}
                height={36}
                className="object-contain max-h-7 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                onError={() => {}}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/85 transition-all duration-200"
          >
            Enquire about mentorship
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
