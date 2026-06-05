import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeVision } from "@/components/sections/HomeImpact";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { HomePhilosophy } from "@/components/sections/HomePhilosophy";
import { HomeVenturesPreview } from "@/components/sections/HomeVenturesPreview";
import { HomeBooks } from "@/components/sections/HomeBooks";
import { HomeRealEstate } from "@/components/sections/HomeRealEstate";
import { HomeMentorship } from "@/components/sections/HomeMentorship";
import { HomeNewsletter } from "@/components/sections/HomeNewsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <HomeVision />
        <ImpactStats />
        <HomePhilosophy />
        <HomeVenturesPreview />
        <HomeBooks />
        <HomeRealEstate />
        <HomeMentorship />
        <HomeNewsletter />
      </main>
      <Footer />
    </>
  );
}
