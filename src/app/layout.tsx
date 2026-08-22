import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-arabic",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.f4lcon.tech"),
  title: {
    default: "PropertyON | منظومة تشغيل المكاتب العقارية",
    template: "%s | PropertyON"
  },
  description: "PropertyON يربط العقارات والوحدات والعقود وجداول الدفعات والتحصيلات والسندات والمصروفات والتقارير في منظومة تشغيل واحدة للمكاتب العقارية في السعودية.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "PropertyON | منظومة تشغيل المكاتب العقارية",
    description: "اربط العقارات والعقود والتحصيلات والسندات والمصروفات والتقارير في منظومة تشغيل واحدة.",
    url: "https://www.f4lcon.tech/",
    siteName: "PropertyON",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "PropertyON operating system for Saudi real-estate offices" }],
    locale: "ar_SA",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "PropertyON | منظومة تشغيل المكاتب العقارية", description: "منظومة تشغيل مترابطة للمكاتب العقارية في السعودية.", images: ["/opengraph-image"] }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.f4lcon.tech/#website",
      "name": "PropertyON",
      "url": "https://www.f4lcon.tech/"
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.f4lcon.tech/#software",
      "name": "PropertyON",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "availableLanguage": ["Arabic", "English"],
      "description": "منظومة تشغيل تربط سجلات وعمليات المكاتب العقارية في السعودية."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.variable} ${ibmPlexSansArabic.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
