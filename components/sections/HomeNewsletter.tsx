"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HomeNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">

          {/* Left — editorial letter */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.22em] uppercase text-primary font-sans"
            >
              A Note From Damilare
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-[1.05]"
            >
              The Stewardship Letter
            </motion.h2>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 max-w-xl">
              <p className="text-muted-foreground leading-relaxed">
                Building something meaningful is rarely loud. It is mostly
                quiet decisions, consistent effort, and the discipline to keep
                going when the result is not yet visible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Stewardship Letter is where I share reflections on building
                durable businesses, mastering sales, developing leaders, and
                creating long-term impact — drawn from the work I do across
                real estate, fintech, and entrepreneurship.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Practical insights. Lessons from the field. Ideas for building
                what matters.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div variants={fadeUp} className="flex flex-col gap-1 pt-2">
              <p className="font-display text-2xl md:text-3xl text-foreground italic">
                Damilare Oshokoya
              </p>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Founder & Entrepreneur
              </p>
            </motion.div>

            {/* Subscribe form */}
            <motion.div variants={fadeUp} className="pt-4 border-t border-border">
              {submitted ? (
                <div className="flex flex-col gap-2">
                  <p className="text-foreground font-medium">You&apos;re on the list.</p>
                  <p className="text-sm text-muted-foreground">
                    Expect thoughtful writing on building and leading well.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 px-4 py-3 text-sm bg-surface border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-all duration-200 shrink-0"
                  >
                    Subscribe
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>

          {/* Right — portrait image slot */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4"
          >
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/portrait.jpg"
                alt="Damilare Oshokoya"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
