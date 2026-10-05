import type { MetadataRoute } from "next";
import { absoluteUrl, isIndexable } from "@/lib/seo";

const publicPages: MetadataRoute.Sitemap = [
  { url: "/", changeFrequency: "weekly", priority: 1 },
  { url: "/tatuajes", changeFrequency: "monthly", priority: 0.9 },
  { url: "/estudio", changeFrequency: "yearly", priority: 0.7 },
  { url: "/contacto", changeFrequency: "yearly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];

  return publicPages.map((page) => ({
    ...page,
    url: absoluteUrl(page.url),
  }));
}
