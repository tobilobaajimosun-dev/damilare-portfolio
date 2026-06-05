import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SalesAcademyHero } from "@/components/sections/SalesAcademyHero";
import { SalesAcademyCurriculum } from "@/components/sections/SalesAcademyCurriculum";
import { SalesAcademyWhoIsItFor } from "@/components/sections/SalesAcademyWhoIsItFor";
import { SalesAcademyIncludes } from "@/components/sections/SalesAcademyIncludes";
import { SalesAcademyApply } from "@/components/sections/SalesAcademyApply";

export const metadata: Metadata = {
  title: "Sales Masterclass — Damilare Oshokoya",
  description:
    "Join Damilare Oshokoya's Sales Masterclass. Learn the systems, psychology, and execution frameworks that close deals and build businesses.",
};

export default function SalesAcademyPage() {
  return (
    <>
      <Navbar />
      <main>
        <SalesAcademyHero />
        <SalesAcademyCurriculum />
        <SalesAcademyWhoIsItFor />
        <SalesAcademyIncludes />
        <SalesAcademyApply />
      </main>
      <Footer />
    </>
  );
}
