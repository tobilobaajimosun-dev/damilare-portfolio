import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeImpact } from "@/components/sections/HomeImpact";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { HomeVenturesPreview } from "@/components/sections/HomeVenturesPreview";
import { HomeMentorship } from "@/components/sections/HomeMentorship";
import { HomeNewsletter } from "@/components/sections/HomeNewsletter";
import { HomeClosing } from "@/components/sections/HomeClosing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <HomeImpact />
        <ImpactStats />
        <HomeVenturesPreview />
        <HomeMentorship />
        <HomeNewsletter />
        <HomeClosing />
      </main>
      <Footer />
    </>
  );
}
