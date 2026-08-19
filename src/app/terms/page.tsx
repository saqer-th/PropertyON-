import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "شروط الاستخدام والوصول المبكر | Website & Early Access Terms",
  description: "شروط استخدام موقع PropertyON وحسابات الوصول المبكر.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "شروط الاستخدام والوصول المبكر | PropertyON",
    description: "الشروط المحدودة للموقع وتقييم PropertyON خلال مرحلة الوصول المبكر.",
    url: "https://www.f4lcon.tech/terms",
    type: "website"
  }
};

export default function TermsPage() {
  return <LegalDocument kind="terms" />;
}
