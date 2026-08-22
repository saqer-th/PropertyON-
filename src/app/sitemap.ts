import { MetadataRoute } from 'next'
import { seoPages } from '@/data/seo-pages'

export default function sitemap(): MetadataRoute.Sitemap {
    const coreRoutes: MetadataRoute.Sitemap = [
        {
            url: "https://www.f4lcon.tech/",
            lastModified: "2026-08-19",
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: "https://www.f4lcon.tech/privacy",
            lastModified: "2026-08-19",
            changeFrequency: "monthly",
            priority: 0.4,
        },
        {
            url: "https://www.f4lcon.tech/terms",
            lastModified: "2026-08-19",
            changeFrequency: "monthly",
            priority: 0.4,
        }
    ];

    const commercialRoutes: MetadataRoute.Sitemap = seoPages.map((page, index) => ({
        url: `https://www.f4lcon.tech/ar/${page.slug}`,
        lastModified: page.reviewedAt,
        changeFrequency: "monthly",
        priority: index < 4 ? 0.9 : 0.8,
    }));

    return [...coreRoutes, ...commercialRoutes];
}
