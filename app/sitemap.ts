import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-01");
  const alternates = {
    languages: {
      en: `${siteUrl}/`,
      de: `${siteUrl}/de`,
      "x-default": `${siteUrl}/`,
    },
  };
  return [
    {
      url: `${siteUrl}/`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
    {
      url: `${siteUrl}/de`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
  ];
}
