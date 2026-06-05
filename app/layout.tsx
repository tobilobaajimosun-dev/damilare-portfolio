import type { Metadata } from "next";
import { generalSans, ltSuperiorSerif, archivo, geistMono, dancingScript } from "@/lib/fonts";
import { baseMetadata } from "@/lib/metadata";
import { ScrollBlur } from "@/components/layout/ScrollBlur";
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
      className={`${generalSans.variable} ${ltSuperiorSerif.variable} ${archivo.variable} ${geistMono.variable} ${dancingScript.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollBlur />
      </body>
    </html>
  );
}
