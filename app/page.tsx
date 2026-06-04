import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Ventures } from "@/components/sections/Ventures";
import { Speaking } from "@/components/sections/Speaking";
import { Mentorship } from "@/components/sections/Mentorship";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Speaking />
        <Mentorship />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
