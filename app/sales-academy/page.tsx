import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sales Academy",
  description:
    "Damilare Oshokoya's Sales Academy — practical training and mentorship for sales professionals and entrepreneurs across Africa.",
};

export default function SalesAcademyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-1 flex items-center justify-center px-6 pt-32 pb-24">
        <div className="text-center max-w-xl">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Coming Soon
          </p>
          <h1 className="text-5xl md:text-6xl font-display tracking-tight text-foreground mb-6">
            Sales Academy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A dedicated programme for sales professionals and founders who want
            to close with conviction. Details launching soon.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
