import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VenturesHero } from "@/components/sections/VenturesHero";
import { Ventures } from "@/components/sections/Ventures";
import { VenturesClosing } from "@/components/sections/VenturesClosing";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "A collection of ventures built to solve practical challenges across real estate, finance, agriculture, and technology in Africa.",
};

export default function VenturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <VenturesHero />
        <Ventures />
        <VenturesClosing />
      </main>
      <Footer />
    </>
  );
}
