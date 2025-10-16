// src/app/robots.ts
import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: [
      { 
        userAgent: "*", 
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"]
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 1
      }
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
