import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommercialSeoPage from "@/components/seo/CommercialSeoPage";
import { seoPageBySlug, seoPages } from "@/data/seo-pages";

const SITE_URL = "https://www.f4lcon.tech";

export const dynamicParams = false;

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPageBySlug.get(slug);
  if (!page) return {};
  const canonical = `/ar/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${page.metaTitle} | PropertyON`,
      description: page.metaDescription,
      url: `${SITE_URL}${canonical}`,
      siteName: "PropertyON",
      locale: "ar_SA",
      type: "website",
      images: [{ url: page.proof.src, width: page.proof.width, height: page.proof.height, alt: page.proof.alt }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle} | PropertyON`,
      description: page.metaDescription,
      images: [page.proof.src]
    }
  };
}

export default async function SeoCommercialRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = seoPageBySlug.get(slug);
  if (!page) notFound();

  const url = `${SITE_URL}/ar/${page.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${page.metaTitle} | PropertyON`,
        description: page.metaDescription,
        inLanguage: "ar-SA",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${page.proof.src}` },
        dateModified: page.reviewedAt
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: page.slug === "property-management-software"
          ? [
              { "@type": "ListItem", position: 1, name: "PropertyON", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: page.primaryKeyword, item: url }
            ]
          : [
              { "@type": "ListItem", position: 1, name: "PropertyON", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "الحلول", item: `${SITE_URL}/ar/property-management-software` },
              { "@type": "ListItem", position: 3, name: page.primaryKeyword, item: url }
            ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <CommercialSeoPage page={page} />
    </>
  );
}
