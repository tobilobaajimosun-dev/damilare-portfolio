"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { sendApplication, type ApplicationState } from "@/app/actions/application";

const POWER3_INOUT = [0.7, 0, 0.3, 1] as const;

const scrollFade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: POWER3_INOUT, delay },
});

const referralOptions = [
  "Social Media",
  "A Friend or Colleague",
  "An Event or Conference",
  "Online Search",
  "News or Blog",
  "Existing Member",
  "Other",
];

const inputBase =
  "w-full px-4 py-3 text-sm bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-200";

const initialState: ApplicationState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground text-sm rounded-xl [box-shadow:var(--primary-shadow)] hover:bg-primary/90 hover:[box-shadow:var(--primary-shadow-hover)] hover:-translate-y-px transition-all duration-200 font-medium disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
    >
      {pending ? "Submitting…" : "Apply to Join"}
      {!pending && <ArrowRight size={14} />}
    </button>
  );
}

export function AssociateProgramJoinForm() {
  const [state, formAction] = useActionState(sendApplication, initialState);

  return (
    <section
      id="apply"
      className="py-20 md:py-28 px-6 bg-foreground relative overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 24px)",
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 24px)",
          ].join(", "),
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-xl">

        {/* Card */}
        <motion.div
          {...scrollFade(0)}
          className="bg-background rounded-2xl border border-border shadow-2xl overflow-hidden"
        >
          <div className="px-8 md:px-10 py-10 md:py-12">

            <motion.h2
              {...scrollFade(0.05)}
              className="font-display font-normal text-[clamp(1.6rem,3vw,2.2rem)] leading-tight tracking-tight text-primary mb-3"
            >
              Interested in joining the network?
            </motion.h2>
            <motion.p
              {...scrollFade(0.1)}
              className="text-sm text-muted-foreground leading-relaxed mb-8"
            >
              Submit your details below to begin the review process. Selected
              applicants will be contacted with onboarding information and next
              steps.
            </motion.p>

            {state.status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-10 text-center flex flex-col gap-3"
              >
                <p className="font-display text-xl text-foreground">Application received.</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thank you for reaching out — every application is reviewed personally.
                  If it&apos;s the right fit, we&apos;ll be in touch within a few days
                  with everything you need to get started.
                </p>
              </motion.div>
            ) : (
              <form action={formAction} className="flex flex-col gap-5">

                {/* First / Last name */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-foreground/70 font-medium">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      placeholder="Enter your first name"
                      className={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-foreground/70 font-medium">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      placeholder="Enter your last name"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Email / Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-foreground/70 font-medium">
                      Email Address <span className="text-primary">(required)</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-foreground/70 font-medium">
                      Phone Number <span className="text-primary">(required)</span>
                    </label>
                    <div className="flex items-stretch border border-border rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/40 transition-all duration-200 bg-background">
                      <div className="flex items-center gap-1.5 px-3 py-3 bg-surface border-r border-border shrink-0 text-sm text-foreground/70">
                        <span>🇳🇬</span>
                        <span>+234</span>
                        <ChevronDown size={11} className="text-muted-foreground" />
                      </div>
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="000000000"
                        className="flex-1 px-3 py-3 text-sm bg-transparent outline-none placeholder:text-muted-foreground/50 text-foreground"
                      />
                    </div>
                  </div>
                </div>

                {/* Referral source */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-foreground/70 font-medium">
                    How did you hear about this network?
                  </label>
                  <div className="relative">
                    <select
                      name="source"
                      required
                      defaultValue=""
                      className={`${inputBase} appearance-none pr-10 cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {referralOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                    />
                  </div>
                </div>

                <SubmitButton />

                {state.status === "error" && (
                  <p className="text-xs text-destructive text-center">{state.message}</p>
                )}

              </form>
            )}

          </div>
        </motion.div>
      </div>
    </section>
  );
}
