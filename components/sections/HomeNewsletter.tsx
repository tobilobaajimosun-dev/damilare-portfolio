"use client";

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
    // TODO: connect to newsletter provider (Beehiiv, ConvertKit, etc.)
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.2em] uppercase text-primary font-sans mb-6"
          >
            Newsletter
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-normal tracking-tight text-foreground leading-tight mb-4"
          >
            The Stewardship Letter
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed mb-10"
          >
            Thoughts on business, leadership, entrepreneurship, stewardship,
            and growth — delivered directly to your inbox.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-2"
            >
              <p className="text-foreground font-medium">
                You&apos;re on the list.
              </p>
              <p className="text-sm text-muted-foreground">
                Expect thoughtful writing on building and leading well.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/85 transition-all duration-200 shrink-0"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
