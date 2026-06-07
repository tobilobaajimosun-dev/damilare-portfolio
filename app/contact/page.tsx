import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { HomeNewsletter } from "@/components/sections/HomeNewsletter";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a discovery call, apply for mentorship, or reach out to Oshokoya Damilare — entrepreneur, founder, and speaker.",
  openGraph: {
    title: "Contact — Oshokoya Damilare",
    description: "Get in touch to discuss mentorship, speaking engagements, consulting, or business partnerships.",
    url: "https://damilareoshokoya.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Contact />
        <HomeNewsletter />
      </main>
      <Footer />
    </>
  );
}
