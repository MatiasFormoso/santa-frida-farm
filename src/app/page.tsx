// src/app/page.tsx
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Santa Frida Farm — Exportador Premium a Emiratos Árabes y Canadá",
  description: "Finca familiar premium en Marinilla, Antioquia. Exportador líder de aguacate Hass, café Catimor de especialidad y hortalizas orgánicas a Emiratos Árabes Unidos y Canadá.",
  alternates: {
    canonical: "/es",
    languages: { es: "/es", en: "/en" }
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Root() {
  redirect("/es", "replace"); // Redirección permanente
}
