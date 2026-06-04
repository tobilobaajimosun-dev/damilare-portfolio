import { brand } from "@/content/brand";

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-10 lg:px-16 bg-foreground border-t border-background/10">
      <div className="mx-auto w-full max-w-[var(--container-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-background/30 font-sans">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <p className="text-xs text-background/20 font-sans">{brand.location}</p>
      </div>
    </footer>
  );
}
