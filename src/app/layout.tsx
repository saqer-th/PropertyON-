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
  title: {
    default: "برنامج إدارة الأملاك والعقارات | PropertyON",
    template: "%s | PropertyON"
  },
  description: "نظام PropertyON هو الحل الأمثل لإدارة الأملاك والعقارات في السعودية. برنامج سحابي شامل لإدارة عقود الإيجار، متابعة المستأجرين، تحصيل الدفعات، والصيانة.",
  keywords: ["برنامج إدارة الأملاك", "نظام إدارة العقار", "برنامج إيجارات", "إدارة عقود الإيجار", "برنامج إدارة العقارات للمكاتب", "إدارة المستأجرين", "نظام إدارة الدفعات والعقود", "برنامج عقار سعودي"],
  openGraph: {
    title: "برنامج إدارة الأملاك والعقارات | PropertyON",
    description: "أدر عقاراتك بذكاء مع أفضل نظام سحابي لإدارة الأملاك في السعودية. عقود، دفعات، صيانة، وتقارير شاملة.",
    url: "https://f4lcon.tech",
    siteName: "PropertyON",
    images: [
      {
        url: "https://f4lcon.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PropertyON Dashboard",
      }
    ],
    locale: "ar_SA",
    type: "website",
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "PropertyON",
      "url": "https://f4lcon.tech",
      "logo": "https://f4lcon.tech/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966-50-000-0000",
        "contactType": "customer service",
        "areaServed": "SA",
        "availableLanguage": ["Arabic", "English"]
      },
      "sameAs": [
        "https://twitter.com/propertyon",
        "https://linkedin.com/company/propertyon"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "PropertyON",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cloud-based",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "SAR",
        "description": "Free for a limited time"
      },
      "description": "برنامج إدارة أملاك وعقارات سحابي شامل للمكاتب والملاك في السعودية.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "150"
      }
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
