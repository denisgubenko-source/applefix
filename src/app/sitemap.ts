import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://applefix.ee";
  const now = new Date();

  return [
    { url: `${base}/en/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/et/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/ru/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];
}