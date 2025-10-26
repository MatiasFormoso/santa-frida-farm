// src/app/[locale]/layout.tsx
import type { Locale } from "@/i18n/config";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale} className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-stone-800`}>{children}</body>
    </html>
  );
}
