"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { fadeUp, staggerContainer } from "@/lib/motion";

const initialState: ContactState = { status: "idle" };

const inputClasses =
  "w-full px-4 py-3 text-sm bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors duration-200";

const reasons = [
  "Mentorship",
  "Speaking Engagement",
  "Business Consulting",
  "Real Estate Enquiry",
  "Media & Press",
  "Partnership",
  "General Enquiry",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/85 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Sending…" : "Send Message"}
      {!pending && <ArrowRight size={14} />}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContact, initialState);

  return (
    <motion.form
      action={formAction}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col gap-4"
    >
      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          required
          className={inputClasses}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          className={inputClasses}
        />
      </motion.div>

      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
          className={inputClasses}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone number (optional)"
          className={inputClasses}
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <select
          name="reason"
          required
          defaultValue=""
          className={`${inputClasses} cursor-pointer`}
        >
          <option value="" disabled>
            Reason for contacting
          </option>
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div variants={fadeUp}>
        <textarea
          name="message"
          placeholder="Tell me a little about what you're building…"
          required
          rows={5}
          className={`${inputClasses} resize-none`}
        />
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <SubmitButton />
        {state.status === "success" && (
          <p className="text-sm text-primary font-medium">{state.message}</p>
        )}
        {state.status === "error" && (
          <p className="text-sm text-destructive">{state.message}</p>
        )}
      </motion.div>
    </motion.form>
  );
}
