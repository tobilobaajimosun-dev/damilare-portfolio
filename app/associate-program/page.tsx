import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SalesAcademyHero } from "@/components/sections/SalesAcademyHero";
import { SalesAcademyCurriculum } from "@/components/sections/SalesAcademyCurriculum";
import { AssociateProgramWhoIsItFor } from "@/components/sections/AssociateProgramWhoIsItFor";
import { Testimonials } from "@/components/sections/Testimonials";
import { AssociateProgramFAQ } from "@/components/sections/AssociateProgramFAQ";
import { SalesAcademyApply } from "@/components/sections/SalesAcademyApply";
import { AssociateProgramJoinForm } from "@/components/sections/AssociateProgramJoinForm";
import { HomeFounderNote } from "@/components/sections/HomeFounderNote";

export const metadata: Metadata = {
  title: "The Associate Program — Damilare Oshokoya",
  description:
    "A structured community designed to train, develop, and reward ambitious professionals seeking long-term growth in real estate.",
  openGraph: {
    title: "The Associate Program — Oshokoya Damilare",
    description:
      "A structured community designed to train, develop, and reward ambitious professionals seeking long-term growth in real estate.",
    url: "https://damilareoshokoya.com/associate-program",
  },
};

export default function AssociateProgramPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <SalesAcademyHero />
        <SalesAcademyCurriculum />
        <AssociateProgramWhoIsItFor />
        <Testimonials />
        <AssociateProgramFAQ />
        <SalesAcademyApply />
        <AssociateProgramJoinForm />
        <HomeFounderNote />
      </main>
      <Footer />
    </>
  );
}
