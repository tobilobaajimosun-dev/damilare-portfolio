import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ResourcesHero } from "@/components/sections/ResourcesHero";
import { Publications } from "@/components/sections/Publications";
import { Speaking } from "@/components/sections/Speaking";
import { InTheNews } from "@/components/sections/InTheNews";
import { Mentorship } from "@/components/sections/Mentorship";
import { HomeNewsletter } from "@/components/sections/HomeNewsletter";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Books, talks, press, speaking, and mentorship from Oshokoya Damilare — resources for entrepreneurs, leaders, and founders.",
  openGraph: {
    title: "Resources — Oshokoya Damilare",
    description: "Books, speaking topics, press features, and mentorship programmes from entrepreneur and founder Damilare Oshokoya.",
    url: "https://damilareoshokoya.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ResourcesHero />
        <Publications />
        <Speaking />
<InTheNews />
        <Mentorship />
        <HomeNewsletter />
      </main>
      <Footer />
    </>
  );
}
