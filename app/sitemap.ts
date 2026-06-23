import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://purplepie.in",
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: "https://purplepie.in/products",
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: "https://purplepie.in/team",
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: "https://purplepie.in/about",
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: "https://purplepie.in/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}