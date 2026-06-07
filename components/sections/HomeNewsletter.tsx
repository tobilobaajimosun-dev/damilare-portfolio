"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";

function fireConfetti() {
  const colors = ["#0f3d2e", "#40916c", "#52b788", "#b7e4c7", "#ffffff", "#d8f3dc"];

  // Left burst
  confetti({
    particleCount: 60,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.75 },
    colors,
    scalar: 0.9,
  });

  // Right burst
  confetti({
    particleCount: 60,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.75 },
    colors,
    scalar: 0.9,
  });

  // Centre shower (delayed slightly)
  setTimeout(() => {
    confetti({
      particleCount: 80,
      angle: 90,
      spread: 70,
      origin: { x: 0.5, y: 0.6 },
      colors,
      scalar: 1.1,
      gravity: 0.9,
    });
  }, 180);
}

export function HomeNewsletter() {
  const [email, setEmail]         = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    fireConfetti();
    setShowToast(true);
  };

  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 5000);
    return () => clearTimeout(t);
  }, [showToast]);

  return (
    <>
      {/* ── Section ── */}
      <section
        className="py-24 md:py-36 px-6 md:px-10 lg:px-16"
        style={{ backgroundColor: "oklch(0.93 0.04 152)" }}
      >
        <div className="mx-auto w-full max-w-2xl">

          {/* Card stack — main card sits on a subtle tilted shadow card */}
          <div className="relative">

            {/* Back card — decorative depth */}
            <div
              className="absolute inset-0 rounded-3xl border border-primary/10"
              style={{
                backgroundColor: "oklch(0.92 0.035 152)",
                transform: "rotate(-1.5deg) translateY(6px)",
              }}
            />

            {/* Main letter card */}
            <div className="relative bg-white rounded-3xl px-10 py-12 md:px-14 md:py-14 shadow-[0_20px_60px_oklch(0.26_0.07_152_/12%)] border border-primary/8 z-10">

              {/* Icon */}
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                <Mail size={18} className="text-primary" strokeWidth={1.5} />
              </div>

              {/* Eyebrow */}
              <p className="text-[0.6rem] tracking-[0.28em] uppercase text-primary font-sans font-medium mb-3">
                Monthly Dispatch
              </p>

              {/* Heading */}
              <h2 className="font-display font-normal text-[clamp(1.9rem,3.2vw,2.8rem)] text-foreground tracking-tight leading-tight mb-5">
                The Stewardship Letter
              </h2>

              {/* Copy */}
              <p className="text-muted-foreground leading-relaxed text-base mb-8 max-w-md">
                Once a month, I share what I&apos;m learning across business,
                leadership, and building — written for founders who are serious
                about the long game. No noise. Just the thinking that shapes
                how I lead.
              </p>

              {/* Form / success state */}
              {submitted ? (
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle size={18} strokeWidth={1.5} />
                  <p className="text-sm font-medium">You&apos;re on the list — good things are coming.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm">
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

            </div>
          </div>
        </div>
      </section>

      {/* ── Toast ── */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{    opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-5 py-3.5 bg-foreground text-background rounded-full shadow-2xl whitespace-nowrap"
          >
            <CheckCircle size={15} strokeWidth={2} className="text-primary shrink-0" />
            <span className="text-sm font-medium">
              You&apos;re in — check your inbox for a welcome note from Damilare.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
