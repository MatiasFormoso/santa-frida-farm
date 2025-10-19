// src/app/robots.ts
import { getSiteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: [
      { 
        userAgent: "*", 
        allow: "/",
        disallow: [
          "/api/", 
          "/_next/", 
          "/admin/", 
          "/private/",
          "/temp/",
          "/*.json$",
          "/*.xml$"
        ]
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 1
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1
      },
      {
        userAgent: "Slurp",
        allow: "/",
        crawlDelay: 2
      }
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
