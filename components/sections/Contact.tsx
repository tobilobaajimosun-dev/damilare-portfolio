"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, ArrowRight } from "lucide-react";
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
            Let&apos;s Work Together
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold tracking-tight text-background leading-[1.0] text-[clamp(2.75rem,7vw,6.5rem)]"
          >
            Ready to create
            <br />
            <span className="italic font-normal text-background/50">
              impact together?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-background/55 max-w-lg leading-relaxed text-lg"
          >
            Whether you&apos;re building a business, looking for a speaker, or
            want to transform your organisation — let&apos;s start a
            conversation.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href={brand.bookingUrl}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-background text-foreground text-sm font-medium rounded-full hover:bg-background/90 transition-all duration-200"
            >
              Book a Free Discovery Call
              <ArrowRight size={14} />
            </a>
            <a
              href={brand.trainingUrl}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-background/20 text-background text-sm font-medium rounded-full hover:bg-background/10 transition-all duration-200"
            >
              Join My Next Training
            </a>
          </motion.div>

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
              <span className="font-sans text-base font-medium text-background/70 border-b border-background/15 group-hover:border-background/40 group-hover:text-background transition-colors duration-200 pb-0.5">
                hello@damilareoshokoya.com
              </span>
            </a>
          </motion.div>

          {/* Social + Speaking link */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-background/10"
          >
            <div className="flex flex-wrap items-center gap-6">
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
            </div>
            <a
              href={brand.bookingUrl}
              className="text-sm text-background/35 hover:text-background border-b border-background/15 hover:border-background/40 transition-colors duration-200 pb-0.5"
            >
              Hire me for speaking →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
