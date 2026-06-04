import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Custom display face — Stablecoin Opportunity HBSet (Light only)
export const stablecoin = localFont({
  src: "../app/fonts/stablecoin-opportunity-light.woff2",
  variable: "--font-stablecoin",
  weight: "300",
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
