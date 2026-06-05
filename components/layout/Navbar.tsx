"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/content/brand";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures" },
  { label: "Resources", href: "/resources" },
];

function MailFilled({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8.868l8 5 8-5V18z" />
    </svg>
  );
}

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

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < lastScrollY.current) {
        setVisible(true);
      } else if (currentY > lastScrollY.current && currentY > 80) {
        setVisible(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/40"
    >
      <div className="mx-auto max-w-[var(--container-default)] px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Damilare Oshokoya — home">
          <BrandLogo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors duration-200",
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="mailto:damilareoshokoya@gmail.com"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/85 transition-colors duration-200"
          >
            <MailFilled size={14} />
            Contact Me
          </Link>
          <button
            className="md:hidden p-1.5 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-background/80 backdrop-blur-xl border-b border-border/40"
          >
            <div className="flex flex-col px-6 py-5 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base py-1 transition-colors",
                    pathname === link.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="mailto:damilareoshokoya@gmail.com"
                className="inline-flex items-center gap-2 text-base font-semibold text-foreground pt-3 mt-1 border-t border-border"
              >
                <MailFilled size={16} />
                Contact Me →
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
