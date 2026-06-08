import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SalesAcademyHero } from "@/components/sections/SalesAcademyHero";
import { SalesAcademyCurriculum } from "@/components/sections/SalesAcademyCurriculum";
import { AssociateProgramIncludes } from "@/components/sections/AssociateProgramIncludes";
import { AssociateProgramWhoIsItFor } from "@/components/sections/AssociateProgramWhoIsItFor";
import { Testimonials } from "@/components/sections/Testimonials";
import { AssociateProgramFAQ } from "@/components/sections/AssociateProgramFAQ";
import { AssociateProgramJoinForm } from "@/components/sections/AssociateProgramJoinForm";
import { HomeNewsletter } from "@/components/sections/HomeNewsletter";

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
        <AssociateProgramIncludes />
        <AssociateProgramWhoIsItFor />
        <Testimonials />
        <AssociateProgramFAQ />
        <AssociateProgramJoinForm />
        <HomeNewsletter />
      </main>
      <Footer />
    </>
  );
}
