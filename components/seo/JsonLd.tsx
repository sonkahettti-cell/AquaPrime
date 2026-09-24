import { contacts } from "@/data/contacts";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://aqprime.ru/#business",

        name: "AquaPrime",

        url: contacts.website,

        logo: "https://aqprime.ru/logo/logo_header.png",

        image: "https://aqprime.ru/og-image.jpg",

        telephone: contacts.phone,

        email: contacts.email,

        description:
          "Водоочистка в Нижнем Новгороде и Нижегородской области. Подбор, монтаж и обслуживание систем очистки воды для частных домов и коттеджей.",

        address: {
          "@type": "PostalAddress",
          addressRegion: "Нижегородская область",
          addressCountry: "RU",
        },

        areaServed: {
          "@type": "AdministrativeArea",
          name: "Нижегородская область",
        },

        knowsAbout: [
          "Водоочистка",
          "Очистка воды",
          "Умягчение воды",
          "Обезжелезивание воды",
          "Обратный осмос",
          "Водоподготовка",
          "Монтаж систем очистки воды",
          "Обслуживание систем водоочистки",
        ],

        sameAs: [
          contacts.whatsapp,
          contacts.telegram,
        ],

        availableLanguage: ["ru"],

        priceRange: "$$",
      },

      {
        "@type": "WebSite",
        "@id": "https://aqprime.ru/#website",

        url: "https://aqprime.ru/",

        name: "AquaPrime",

        description:
          "Водоочистка в Нижнем Новгороде и Нижегородской области.",

        inLanguage: "ru-RU",

        publisher: {
          "@id": "https://aqprime.ru/#business",
        },
      },

      {
        "@type": "ItemList",
        "@id": "https://aqprime.ru/#services",

        name: "Услуги AquaPrime по водоочистке",

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Анализ воды",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Водоочистка для дома",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Обезжелезивание воды",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Умягчение воды",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Обратный осмос",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Сервисное обслуживание",
          },
        ],
      },
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
