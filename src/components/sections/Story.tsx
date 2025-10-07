// src/components/sections/Story.tsx
import { Section } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

export default function Story({ t }: { t: Dict; locale: Locale }) {
  return (
    <Section
      id="historia"
      eyebrow={t.company.historyTitle}
      title={t.company.historyTitle}
      intro={t.company.historyBody}
    />
  );
}
