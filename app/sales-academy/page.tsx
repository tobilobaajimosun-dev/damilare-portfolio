import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SalesAcademyHero } from "@/components/sections/SalesAcademyHero";
import { SalesAcademyCurriculum } from "@/components/sections/SalesAcademyCurriculum";
import { SalesAcademyWhoIsItFor } from "@/components/sections/SalesAcademyWhoIsItFor";
import { SalesAcademyIncludes } from "@/components/sections/SalesAcademyIncludes";
import { SalesAcademyApply } from "@/components/sections/SalesAcademyApply";
import { HomeNewsletter } from "@/components/sections/HomeNewsletter";

export const metadata: Metadata = {
  title: "Sales Masterclass — Damilare Oshokoya",
  description:
    "Join Damilare Oshokoya's Sales Masterclass. Learn the systems, psychology, and execution frameworks that close deals and build businesses.",
  openGraph: {
    title: "Sales Masterclass — Oshokoya Damilare",
    description: "Learn the sales systems, psychology, and execution frameworks that close deals and build businesses — with Damilare Oshokoya.",
    url: "https://damilareoshokoya.com/sales-academy",
  },
};

export default function SalesAcademyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <SalesAcademyHero />
        <SalesAcademyCurriculum />
        <SalesAcademyWhoIsItFor />
        <SalesAcademyIncludes />
        <SalesAcademyApply />
        <HomeNewsletter />
      </main>
      <Footer />
    </>
  );
}
