import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://opcient.com";

  return [
    { url: `${baseUrl}/`, priority: 1.0 },

    { url: `${baseUrl}/how-it-works`, priority: 0.7 },

    { url: `${baseUrl}/industrial-screening`, priority: 0.9 },

    { url: `${baseUrl}/extraction-screening`, priority: 0.8 },

    { url: `${baseUrl}/material-handling-screening`, priority: 0.7 },

    { url: `${baseUrl}/about`, priority: 0.6 },

    { url: `${baseUrl}/work-with-us`, priority: 0.4 },

    { url: `${baseUrl}/privacy-policy`, priority: 0.3 },

    { url: `${baseUrl}/terms`, priority: 0.3 },
  ];
}
