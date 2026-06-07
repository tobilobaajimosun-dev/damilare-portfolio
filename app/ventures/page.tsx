import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VenturesHero } from "@/components/sections/VenturesHero";
import { Ventures } from "@/components/sections/Ventures";
import { HomeNewsletter } from "@/components/sections/HomeNewsletter";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "A collection of ventures built to solve practical challenges across real estate, finance, agriculture, and technology in Africa.",
  openGraph: {
    title: "Ventures — Oshokoya Damilare",
    description: "Realvest, Abode, Agbeloba, Pettysave — ventures built at the intersection of capital, technology, and entrepreneurship across African markets.",
    url: "https://damilareoshokoya.com/ventures",
  },
};

export default function VenturesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <VenturesHero />
        <Ventures />
        <HomeNewsletter />
      </main>
      <Footer />
    </>
  );
}
