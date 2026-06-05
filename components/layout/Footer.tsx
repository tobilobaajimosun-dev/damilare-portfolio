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

function BrandLogo() {
  return (
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
  );
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto w-full max-w-[var(--container-default)] px-6 md:px-10 lg:px-16 pt-16 md:pt-20 pb-10">

        {/* Main columns — mirrors &Fold layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-16 border-b border-border">

          {/* Col 1 — Navigate */}
          <div className="flex flex-col gap-5">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground font-sans">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
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

          {/* Col 2 — Follow */}
          <div className="flex flex-col gap-5">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground font-sans">
              Follow
            </p>
            <div className="flex flex-col gap-3">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors duration-200 self-start"
                >
                  {label}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — Find */}
          <div className="col-span-2 md:col-span-2 flex flex-col gap-8 md:pl-8">

            {/* Address */}
            <div className="flex flex-col gap-2">
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground font-sans">
                Location
              </p>
              <div className="flex items-start gap-2 text-sm text-foreground">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <span className="leading-snug">
                  Lagos, Nigeria
                  <span className="text-muted-foreground"> — Global Reach</span>
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground font-sans">
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
        <div className="pt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <BrandLogo />
          <p className="text-xs text-muted-foreground">
            © 2026 {brand.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
