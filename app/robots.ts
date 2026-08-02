import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://aqprime.ru/sitemap.xml",

    host: "https://aqprime.ru",
  };
}
