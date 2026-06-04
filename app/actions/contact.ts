"use server";

import { Resend } from "resend";

export type ContactState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const CONTACT_TO = "hello@damilareoshokoya.com";
const CONTACT_FROM = "Website <onboarding@resend.dev>"; // replace with a verified domain sender

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Validation
  if (!firstName || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email, and a message.",
    };
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // If no API key is configured yet, fail gracefully without crashing.
  if (!process.env.RESEND_API_KEY) {
    return {
      status: "error",
      message:
        "Messaging isn't connected yet. Please email hello@damilareoshokoya.com directly.",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName}`.trim(),
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return {
      status: "success",
      message: "Thank you — your message is on its way. I'll be in touch soon.",
    };
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please email hello@damilareoshokoya.com directly.",
    };
  }
}
