import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-[80dvh] flex flex-col items-center justify-center px-6 text-center"
      >
        <p className="text-[0.65rem] tracking-[0.1em] uppercase text-primary font-sans mb-6">
          404
        </p>
        <h1 className="font-display font-normal text-[clamp(2.5rem,5.5vw,4.75rem)] tracking-tight text-foreground leading-[1.06] mb-6">
          Page not found.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/85 transition-all duration-200"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
