"use server";

import { Resend } from "resend";

export type ApplicationState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const APPLICATION_TO   = "hello@damilareoshokoya.com";
const APPLICATION_FROM = "Associate Program <onboarding@resend.dev>"; // replace with verified domain

export async function sendApplication(
  _prev: ApplicationState,
  formData: FormData
): Promise<ApplicationState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName  = String(formData.get("lastName")  ?? "").trim();
  const email     = String(formData.get("email")     ?? "").trim();
  const phone     = String(formData.get("phone")     ?? "").trim();
  const source    = String(formData.get("source")    ?? "").trim();

  if (!firstName || !email || !phone) {
    return { status: "error", message: "Please fill in your name, email, and phone number." };
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      status: "error",
      message: "Applications aren't connected yet. Please email hello@damilareoshokoya.com directly.",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: APPLICATION_FROM,
      to:   APPLICATION_TO,
      replyTo: email,
      subject: `New Associate Program Application — ${firstName} ${lastName}`.trim(),
      text: [
        `Name:   ${firstName} ${lastName}`,
        `Email:  ${email}`,
        `Phone:  +234${phone}`,
        source ? `Source: ${source}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please email hello@damilareoshokoya.com directly.",
    };
  }
}
