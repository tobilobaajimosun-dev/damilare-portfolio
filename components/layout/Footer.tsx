import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand } from "@/content/brand";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Twitter / X", href: brand.social.twitter },
  { label: "LinkedIn", href: brand.social.linkedin },
  { label: "Instagram", href: brand.social.instagram },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border overflow-hidden">
      <div className="mx-auto w-full max-w-[var(--container-default)] px-6 md:px-10 lg:px-16 pt-20 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <p className="font-display text-lg font-medium tracking-tight text-foreground">
              {brand.firstName} {brand.lastName}
            </p>
            <p className="text-sm text-muted-foreground max-w-[24ch] leading-relaxed">
              Building businesses. Developing leaders. Creating lasting impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground hover:text-primary transition-colors duration-200 self-start"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Get in touch
            </p>
            <a
              href="mailto:hello@damilareoshokoya.com"
              className="inline-flex items-center self-start bg-gold-subtle text-foreground text-sm font-medium px-3.5 py-2 rounded-lg hover:bg-primary/20 transition-colors duration-200"
            >
              hello@damilareoshokoya.com
            </a>
            <div className="flex flex-col gap-2.5 mt-2">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 self-start"
                >
                  {label}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="border-t border-border pt-10">
          <p className="font-display font-normal tracking-tight text-foreground/[0.06] leading-[0.85] text-[clamp(3.5rem,17vw,16rem)] select-none">
            {brand.firstName}
            <br />
            {brand.lastName}
          </p>
          <p className="text-xs text-muted-foreground mt-8">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
