"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { brand } from "@/content/brand";
import { fadeUp } from "@/lib/motion";
import type { Variants } from "framer-motion";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures" },
  { label: "The Associate Program", href: "/associate-program" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: brand.social.linkedin },
  { label: "Twitter / X", href: brand.social.twitter },
  { label: "Instagram", href: brand.social.instagram },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)] px-6 md:px-10 lg:px-16 pt-16 md:pt-20 pb-10">

        {/* Main columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-12 md:gap-6 pb-16 border-b border-border">

          {/* Explore */}
          <div className="flex flex-col gap-6">
            <p className="text-[0.65rem] tracking-[0.1em] uppercase text-muted-foreground font-sans">
              Explore
            </p>
            <motion.nav
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-0.5"
            >
              {nav.map((link) => (
                <motion.div key={link.href} variants={fadeUp}>
                  <Link
                    href={link.href}
                    className="group relative inline-block font-display font-normal text-foreground leading-tight overflow-hidden"
                    style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.5rem)" }}
                  >
                    <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    <span
                      aria-hidden
                      className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 text-primary"
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </div>

          {/* Follow */}
          <div className="flex flex-col gap-6">
            <p className="text-[0.65rem] tracking-[0.1em] uppercase text-muted-foreground font-sans">
              Follow
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-0.5"
            >
              {socials.map(({ label, href }) => (
                <motion.div key={label} variants={fadeUp}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 font-display font-normal text-foreground leading-tight overflow-hidden"
                    style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.5rem)" }}
                  >
                    <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                      {label}
                    </span>
                    <span
                      aria-hidden
                      className="absolute inset-0 flex items-center translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 text-primary"
                    >
                      {label}
                    </span>
                    <ArrowUpRight size={14} className="opacity-30 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 shrink-0 mt-1" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-8 md:min-w-[220px]">
            <div className="flex flex-col gap-2">
              <p className="text-[0.65rem] tracking-[0.1em] uppercase text-muted-foreground font-sans">
                Location
              </p>
              <div className="flex items-start gap-1.5">
                <MapPin size={13} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground leading-snug">
                  Lagos, Nigeria
                  <br />
                  <span className="text-muted-foreground">Global Reach</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[0.65rem] tracking-[0.1em] uppercase text-muted-foreground font-sans">
                Email
              </p>
              <a
                href={`mailto:${brand.email}`}
                className="text-sm text-foreground hover:text-primary transition-colors duration-200 self-start"
              >
                {brand.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <BrandLogo />
          <p className="text-xs text-muted-foreground">
            © 2026 {brand.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
