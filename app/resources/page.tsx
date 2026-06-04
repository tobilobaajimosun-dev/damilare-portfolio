import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ResourcesHero } from "@/components/sections/ResourcesHero";
import { Publications } from "@/components/sections/Publications";
import { Speaking } from "@/components/sections/Speaking";
import { Mentorship } from "@/components/sections/Mentorship";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Books, speaking topics, and mentorship from Oshokoya Damilare — resources for entrepreneurs, leaders, and founders.",
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ResourcesHero />
        <Publications />
        <Speaking />
        <Mentorship />
      </main>
      <Footer />
    </>
  );
}
