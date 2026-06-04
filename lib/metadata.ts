import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://damilareoshokoya.com";

export const siteConfig = {
  name: "Oshokoya Damilare",
  title: "Oshokoya Damilare — Entrepreneur, Founder & Speaker",
  description:
    "Entrepreneur, founder, mentor, and speaker building businesses that matter. Explore insights on business building, leadership, and impact.",
  url: baseUrl,
  ogImage: `${baseUrl}/opengraph-image`,
  twitter: "@damilareoshokoya",
  locale: "en_NG",
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Oshokoya Damilare",
    "entrepreneur",
    "founder",
    "speaker",
    "mentor",
    "business builder",
    "Nigeria",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
