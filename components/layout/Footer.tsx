import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { brand } from "@/content/brand";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Sales Academy", href: "/sales-academy" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: brand.social.linkedin },
  { label: "Twitter / X", href: brand.social.twitter },
  { label: "Instagram", href: brand.social.instagram },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)] px-6 md:px-10 lg:px-16 pt-16 md:pt-20 pb-10">

        {/* Main section — 3 zones like &Fold */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-12 md:gap-6 pb-16 border-b border-border">

          {/* Zone 1 — Navigate (large display links) */}
          <div className="flex flex-col gap-6">
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground font-sans">
              Explore
            </p>
            <nav className="flex flex-col gap-1">
              {nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display font-normal text-foreground hover:text-primary transition-colors duration-200 leading-tight self-start"
                  style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.5rem)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Zone 2 — Follow (large display links) */}
          <div className="flex flex-col gap-6">
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground font-sans">
              Follow
            </p>
            <div className="flex flex-col gap-1">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display font-normal text-foreground hover:text-primary transition-colors duration-200 leading-tight self-start"
                  style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.5rem)" }}
                >
                  {label}
                  <ArrowUpRight size={16} className="opacity-40" />
                </a>
              ))}
            </div>
          </div>

          {/* Zone 3 — Contact details (small, right-aligned like &Fold) */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-8 md:justify-items-start md:min-w-[220px]">

            {/* Location */}
            <div className="flex flex-col gap-2">
              <p className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground font-sans">
                Location
              </p>
              <div className="flex items-start gap-1.5">
                <MapPin size={13} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground leading-snug">
                  Lagos, Nigeria
                  <br />
                  <span className="text-muted-foreground">Global Reach</span>
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <p className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground font-sans">
                Email
              </p>
              <a
                href="mailto:hello@damilareoshokoya.com"
                className="text-sm text-foreground hover:text-primary transition-colors duration-200 self-start"
              >
                hello@damilareoshokoya.com
              </a>
            </div>

          </div>
        </div>

        {/* Bottom bar — logo left, copyright right */}
        {/* Swap the div below for <Image src="/logo.png" ... /> once the file is in /public */}
        <div className="pt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex items-center leading-none select-none">
            <span
              className="font-display font-normal text-foreground"
              style={{ fontSize: "2.6rem", lineHeight: 1 }}
            >
              D
            </span>
            <div className="flex flex-col justify-center ml-0.5">
              <span
                className="font-display font-normal text-foreground leading-none"
                style={{ fontSize: "0.95rem" }}
              >
                amilare
              </span>
              <span
                className="font-sans font-medium text-foreground leading-none tracking-[0.17em] uppercase"
                style={{ fontSize: "0.58rem", marginTop: "0.15rem" }}
              >
                Oshokoya
              </span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 {brand.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
