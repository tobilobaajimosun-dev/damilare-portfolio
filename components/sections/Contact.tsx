"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { brand } from "@/content/brand";
import { ContactForm } from "@/components/sections/ContactForm";
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
      className="pt-20 pb-14 md:pt-28 md:pb-20 px-5 sm:px-8 md:px-10 lg:px-16 bg-background scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 mb-8 md:mb-12 max-w-2xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.1em] uppercase text-primary font-sans"
          >
            Contact
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display font-normal tracking-tight text-foreground leading-[1.0] text-[clamp(2.5rem,6vw,4.5rem)]"
          >
            Have something in mind?{" "}
            <span className="text-muted-foreground">
              Let&apos;s talk.
            </span>
          </motion.h1>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left — details */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 flex flex-col gap-10"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground">
                Email
              </p>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center self-start bg-gold-subtle text-foreground font-medium px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors duration-200"
              >
                {brand.email}
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground">
                Socials
              </p>
              <div className="flex flex-col gap-2.5">
                {socialLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors duration-200 self-start"
                  >
                    {label}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-sm text-muted-foreground leading-relaxed max-w-xs"
            >
              For mentorship applications and speaking enquiries, use the form.
              Tell me what you&apos;re working on and I&apos;ll be in touch.
            </motion.p>
          </motion.div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
