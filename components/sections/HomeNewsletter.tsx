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
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-content)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center gap-10"
        >

          {/* Heading + sub-copy */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-[1.05]">
              The Stewardship Letter
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
              Monthly reflections on building, leading, and creating lasting
              impact — straight from the work.
            </p>
          </motion.div>

          {/* Handwritten signature */}
          <motion.p
            variants={fadeUp}
            className="text-foreground"
            style={{
              fontFamily: "var(--font-handwriting)",
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              lineHeight: 1.3,
            }}
          >
            Damilare Oshokoya
          </motion.p>

          {/* Subscribe form */}
          <motion.div variants={fadeUp} className="w-full max-w-sm">
            {submitted ? (
              <div className="flex flex-col gap-2 items-center">
                <p className="text-foreground font-medium">You&apos;re on the list.</p>
                <p className="text-sm text-muted-foreground">
                  Expect thoughtful writing on building and leading well.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
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
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200 shrink-0"
                >
                  Subscribe
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
