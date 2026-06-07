import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutCarousel } from "@/components/sections/AboutCarousel";
import { AboutStory } from "@/components/sections/AboutStory";
import { About } from "@/components/sections/About";
import { LeadershipJourney } from "@/components/sections/LeadershipJourney";
import { Philosophy } from "@/components/sections/Philosophy";
import { Testimonials } from "@/components/sections/Testimonials";
import { HomeNewsletter } from "@/components/sections/HomeNewsletter";

export const metadata: Metadata = {
  title: "About",
  description:
    "Faith-driven entrepreneur, business strategist, and founder committed to building companies and developing people across Africa.",
  openGraph: {
    title: "About — Oshokoya Damilare",
    description: "Faith-driven entrepreneur, business strategist, and founder committed to building companies and developing people across Africa.",
    url: "https://damilareoshokoya.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <AboutHero />
        <AboutCarousel />
        <AboutStory />
        <About />
        <LeadershipJourney />
        <Philosophy />
        <Testimonials />
        <HomeNewsletter />
      </main>
      <Footer />
    </>
  );
}
