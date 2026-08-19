import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "إشعار الخصوصية | Privacy Notice",
  description: "إشعار الخصوصية لموقع PropertyON وخدمة الوصول المبكر.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "إشعار الخصوصية | PropertyON",
    description: "كيفية التعامل مع المعلومات في موقع PropertyON وخدمة الوصول المبكر.",
    url: "https://www.f4lcon.tech/privacy",
    type: "website"
  }
};

export default function PrivacyPage() {
  return <LegalDocument kind="privacy" />;
}
