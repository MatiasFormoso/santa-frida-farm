// src/app/sitemap.ts
import { getSiteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const currentDate = new Date();
  
  return [
    // Páginas principales
    {
      url: base,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/es`,
      lastModified: currentDate,
      changeFrequency: "weekly", 
      priority: 1.0,
    },
    {
      url: `${base}/en`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    
    // Páginas de historia
    {
      url: `${base}/es/historia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/en/historia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    
    // Secciones de productos (para SEO de long-tail keywords)
    {
      url: `${base}/es#aguacate-hass`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/en#hass-avocado`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/es#cafe-catimor`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/en#catimor-coffee`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/es#hortalizas`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/en#fresh-greens`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    
    // Sección de contacto para exportaciones
    {
      url: `${base}/es#contacto`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/en#contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
