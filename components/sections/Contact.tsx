"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { brand } from "@/content/brand";
import { fadeUp, staggerContainer } from "@/lib/motion";

const socialLinks = [
  { label: "Twitter / X", href: brand.social.twitter },
  { label: "LinkedIn", href: brand.social.linkedin },
  { label: "Instagram", href: brand.social.instagram },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-40 px-6 md:px-10 lg:px-16 bg-foreground scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-10"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.2em] uppercase text-background/35 font-sans"
          >
            05 — Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold tracking-tight text-background leading-[1.0] text-[clamp(2.75rem,7vw,6.5rem)]"
          >
            Let&apos;s start a
            <br />
            <span className="italic font-normal text-background/50">
              conversation.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-background/55 max-w-lg leading-relaxed text-lg"
          >
            Whether you&apos;re building something new, looking for a speaker,
            or simply want to connect — my door is always open.
          </motion.p>

          {/* Email */}
          <motion.div variants={fadeUp}>
            <a
              href="mailto:hello@damilareoshokoya.com"
              className="inline-flex items-center gap-3 group"
            >
              <Mail
                size={18}
                className="text-background/40 group-hover:text-background transition-colors duration-200 shrink-0"
              />
              <span className="font-sans text-base md:text-lg font-medium text-background border-b border-background/20 group-hover:border-background/50 transition-colors duration-200 pb-0.5">
                hello@damilareoshokoya.com
              </span>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-background/10"
          >
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-background/35 hover:text-background transition-colors duration-200"
              >
                {label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
