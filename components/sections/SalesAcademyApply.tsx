"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Detroit Paris easing
const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;
const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, ease: EXPO_OUT, delay: i * 0.1 },
  }),
};

const scrollFade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 1, ease: POWER3_INOUT, delay },
});

const stages = [
  "Pre-revenue, still building",
  "Early revenue (0–₦5M/year)",
  "Growing business (₦5M–₦50M/year)",
  "Established business (₦50M+/year)",
  "Sales professional / employee",
];

const includes = [
  "8 live group sessions with Damilare",
  "Sales frameworks, scripts & pipeline templates",
  "Private cohort community",
  "1-on-1 coaching call",
  "12-month access to all recordings",
  "Certificate of completion",
];

export function SalesAcademyApply() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", stage: "", goal: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const field =
    "px-4 py-3 text-sm bg-background/5 border border-background/15 rounded-xl text-background placeholder:text-background/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-300 w-full";

  return (
    <section id="apply" className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-foreground border-t border-background/10">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div className="flex flex-col gap-12">

            {/* Heading — line reveal */}
            <div className="flex flex-col gap-4">
              <motion.p {...scrollFade(0)} className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans">
                Apply
              </motion.p>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="font-display font-normal text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight text-background"
              >
                {["Ready to build", "a business", "that sells?"].map((line, i) => (
                  <span key={line} className="block overflow-hidden">
                    <motion.span className="block" custom={i} variants={lineReveal}>
                      {line}
                    </motion.span>
                  </span>
                ))}
              </motion.h2>

              <motion.p {...scrollFade(0.4)} className="text-background/50 leading-relaxed text-sm md:text-base">
                Cohort sizes are limited to 30. Every applicant is reviewed to
                ensure the right fit.
              </motion.p>
            </div>

            {/* Next cohort */}
            <motion.div {...scrollFade(0.5)} className="border-t border-background/10 pt-8 flex flex-col gap-1">
              <p className="text-[0.65rem] tracking-[0.22em] uppercase text-background/30">Next Cohort</p>
              <p className="font-display text-2xl text-background mt-2">Enrolling Now</p>
              <p className="text-sm text-background/40 mt-1">Applications reviewed on a rolling basis.</p>
            </motion.div>

            {/* What's included — dots animate like Detroit Paris dot-links (scale 0.8→1) */}
            <motion.div {...scrollFade(0.6)} className="border-t border-background/10 pt-8 flex flex-col gap-4">
              <p className="text-[0.65rem] tracking-[0.22em] uppercase text-background/30">What's Included</p>
              <div className="flex flex-col">
                {includes.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease: POWER3_INOUT, delay: 0.6 + i * 0.07 }}
                    className={`flex items-center gap-3 py-3 ${
                      i < includes.length - 1 ? "border-b border-background/[0.08]" : ""
                    }`}
                  >
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    <p className="text-sm text-background/60">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — form, fades in at 1.4s power3.out like Detroit Paris footer image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
          >
            {submitted ? (
              <div className="flex flex-col gap-4 p-8 bg-background/5 border border-background/10 rounded-2xl">
                <p className="font-display text-2xl text-background">Application received.</p>
                <p className="text-background/50 leading-relaxed text-sm">
                  Thank you. We'll be in touch within 3–5 business days to discuss next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.65rem] text-background/30 uppercase tracking-widest">Full Name</label>
                  <input type="text" required placeholder="Your full name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.65rem] text-background/30 uppercase tracking-widest">Email</label>
                    <input type="email" required placeholder="your@email.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.65rem] text-background/30 uppercase tracking-widest">Phone</label>
                    <input type="tel" required placeholder="+234..." value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} className={field} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.65rem] text-background/30 uppercase tracking-widest">Where are you in your business?</label>
                  <select required value={form.stage}
                    onChange={(e) => setForm({ ...form, stage: e.target.value })} className={field}>
                    <option value="">Select your stage</option>
                    {stages.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.65rem] text-background/30 uppercase tracking-widest">Biggest sales challenge</label>
                  <textarea required rows={3} placeholder="Tell us briefly what you want to improve..."
                    value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })}
                    className={`${field} resize-none`} />
                </div>

                <button type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200 mt-2"
                >
                  Submit Application
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
