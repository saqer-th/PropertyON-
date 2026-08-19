import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/v2-preview" },
    sitemap: "https://www.f4lcon.tech/sitemap.xml",
    host: "https://www.f4lcon.tech"
  };
}
