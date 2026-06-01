import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
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
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
    {
      url: `${siteUrl}/de`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
  ];
}
