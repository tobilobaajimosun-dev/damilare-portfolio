import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { About } from "@/components/sections/About";
import { LeadershipJourney } from "@/components/sections/LeadershipJourney";
import { Philosophy } from "@/components/sections/Philosophy";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "About",
  description:
    "Faith-driven entrepreneur, business strategist, and founder committed to building companies and developing people across Africa.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <About />
        <LeadershipJourney />
        <Philosophy />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
