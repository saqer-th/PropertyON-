import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.f4lcon.tech/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: "https://www.f4lcon.tech/privacy",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.4,
        },
        {
            url: "https://www.f4lcon.tech/terms",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.4,
        }
    ];
}
