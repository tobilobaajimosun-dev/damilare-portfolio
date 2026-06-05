import type { Metadata } from "next";
import { generalSans, ltSuperiorSerif, archivo, geistMono } from "@/lib/fonts";
import { baseMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${ltSuperiorSerif.variable} ${archivo.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
