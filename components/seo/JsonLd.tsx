export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "AquaPrime",

    url: "https://aqprime.ru",

    logo: "https://aqprime.ru/logo/logo_header.png",

    image: "https://aqprime.ru/opengraph-image.png",

    telephone: "+79334230201",

    email: "info@aqprime.ru",

    address: {
      "@type": "PostalAddress",
      addressRegion: "Нижегородская область",
      addressCountry: "RU",
    },

    areaServed: {
      "@type": "AdministrativeArea",
      name: "Нижегородская область",
    },

    description:
      "Проектирование, монтаж и обслуживание систем очистки воды для частных домов, коттеджей и коммерческих объектов.",

    sameAs: [
      "https://wa.me/79334230201"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
