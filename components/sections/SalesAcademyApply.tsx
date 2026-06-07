"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stages = [
  "Pre-revenue, still building",
  "Early revenue (0–₦5M/year)",
  "Growing business (₦5M–₦50M/year)",
  "Established business (₦50M+/year)",
  "Sales professional / employee",
];

export function SalesAcademyApply() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", stage: "", goal: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to server action / form provider
    setSubmitted(true);
  };

  const field = "px-4 py-3 text-sm bg-surface border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors duration-200 w-full";

  return (
    <section id="apply" className="py-24 md:py-36 px-6 md:px-10 lg:px-16 bg-background border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — context */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <p className="text-xs tracking-[0.22em] uppercase text-primary font-sans">Apply</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight">
                Ready to build a business that sells?
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              Cohort sizes are kept small intentionally. Every applicant is
              reviewed to ensure the right fit — for you and the group.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 p-6 bg-surface rounded-2xl border border-border">
              <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans">Next Cohort</p>
              <p className="font-display text-2xl text-foreground">Enrolling Now</p>
              <p className="text-sm text-muted-foreground">
                Limited to 30 participants per cohort. Applications reviewed on a rolling basis.
              </p>
            </motion.div>

            {/* Image spot */}
            <motion.div variants={fadeUp}>
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-surface border border-border flex items-end p-6">
                {/* 👉 Add: <Image src="/images/damilare-speaking.jpg" alt="Damilare Speaking" fill className="object-cover" /> */}
                <p className="text-xs text-muted-foreground tracking-widest uppercase">Image — Damilare Speaking</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="flex flex-col gap-4 p-8 bg-surface border border-border rounded-2xl">
                <p className="font-display text-2xl text-foreground">Application received.</p>
                <p className="text-muted-foreground leading-relaxed">
                  Thank you for applying. Damilare or a member of the team will
                  be in touch within 3–5 business days to discuss next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-muted-foreground uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={field}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-muted-foreground uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={field}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-muted-foreground uppercase tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234..."
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={field}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-muted-foreground uppercase tracking-widest">Where are you in your business?</label>
                  <select
                    required
                    value={form.stage}
                    onChange={(e) => setForm({ ...form, stage: e.target.value })}
                    className={field}
                  >
                    <option value="">Select your stage</option>
                    {stages.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-muted-foreground uppercase tracking-widest">What is your biggest sales challenge?</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us briefly what you want to improve or achieve..."
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value })}
                    className={`${field} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-full [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200 mt-2"
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
