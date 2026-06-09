"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;
const EXPO_OUT     = [0.16, 1, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, ease: EXPO_OUT, delay: i * 0.1 },
  }),
};

const faqs = [
  {
    q: "Do I need experience?",
    a: "No prior real estate experience is required. The Associate Program is designed to meet you where you are, whether you're starting from scratch or looking to formalise existing knowledge. What matters most is commitment to learning and execution.",
  },
  {
    q: "Can I join while working a 9–5?",
    a: "Absolutely. The programme is structured to fit around existing professional commitments. Many members join while in full-time employment and use the programme to build additional income streams or prepare for a transition.",
  },
  {
    q: "How does the training work?",
    a: "Training is delivered through a combination of structured learning materials, group sessions, and one-on-one mentorship. You'll work through core frameworks at your own pace while staying accountable to the community and your mentor.",
  },
  {
    q: "How are opportunities shared?",
    a: "Active members gain access to a curated deal flow and network of projects, partnerships, and referral opportunities. These are shared exclusively within the programme ecosystem as members demonstrate readiness and performance.",
  },
  {
    q: "Is mentorship included?",
    a: "Yes. Practical mentorship is one of the five pillars of the programme. Every member has access to guidance from experienced professionals who have built businesses and navigated the real estate landscape.",
  },
  {
    q: "How do members grow within the network?",
    a: "Growth is performance-based. Members who demonstrate consistent learning, execution, and accountability unlock higher-level opportunities, leadership roles within the community, and access to advanced projects and partnerships.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: POWER3_INOUT, delay: index * 0.06 },
        },
      }}
      className="border-b border-border"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-base md:text-lg font-display font-normal text-foreground leading-snug">
          {faq.q}
        </span>
        <span className="shrink-0 text-muted-foreground">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function AssociateProgramFAQ() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-background border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)]">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: POWER3_INOUT }}
              className="text-[0.65rem] tracking-[0.1em] uppercase text-primary font-sans mb-6"
            >
              FAQ
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="font-display font-normal text-[clamp(2rem,4.5vw,3.75rem)] leading-tight tracking-tight text-foreground"
            >
              {["Frequently", "Asked", "Questions"].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span className="block" custom={i} variants={lineReveal}>
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h2>
          </div>

          {/* Right — accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
