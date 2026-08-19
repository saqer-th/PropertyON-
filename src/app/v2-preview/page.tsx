import type { Metadata } from "next";
import V2Preview from "@/components/landing-v2/V2Preview";

export const metadata: Metadata = {
  title: "PropertyON V2 Preview",
  description: "Isolated high-fidelity preview of the PropertyON connected office operating system landing page.",
  robots: { index: false, follow: false }
};

export default function V2PreviewPage() {
  return <V2Preview />;
}
