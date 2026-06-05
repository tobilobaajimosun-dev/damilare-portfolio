import { Archivo, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    { path: "../app/fonts/GeneralSans-Variable.woff2", style: "normal" },
    { path: "../app/fonts/GeneralSans-VariableItalic.woff2", style: "italic" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const ltSuperiorSerif = localFont({
  src: [
    { path: "../app/fonts/lt-superior-serif-regular.otf", weight: "400", style: "normal" },
    { path: "../app/fonts/lt-superior-serif-medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-lt-superior",
  display: "swap",
});

export const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});
