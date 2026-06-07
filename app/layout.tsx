import type { Metadata } from "next";
import { generalSans, ltSuperiorSerif, archivo, geistMono, homemadeApple } from "@/lib/fonts";
import { baseMetadata, siteConfig } from "@/lib/metadata";
import { ScrollBlur } from "@/components/layout/ScrollBlur";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = baseMetadata;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oshokoya Damilare",
  url: siteConfig.url,
  sameAs: [
    "https://x.com/DamiOshokoya",
    "https://www.linkedin.com/in/damilare-oshokoya-6b3989b1/",
    "https://www.instagram.com/oshokoyadamilare/",
  ],
  jobTitle: "Entrepreneur & Founder",
  description: siteConfig.description,
  knowsAbout: ["Entrepreneurship", "Real Estate", "Fintech", "Agritech", "Mentorship", "Business Strategy"],
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${ltSuperiorSerif.variable} ${archivo.variable} ${geistMono.variable} ${homemadeApple.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        {children}
        <ScrollBlur />
        <Analytics />
      </body>
    </html>
  );
}
