import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AquaPrime",

    short_name: "AquaPrime",

    description:
      "Современные системы очистки воды для частных домов и коммерческих объектов.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#0B2E59",

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },

      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
