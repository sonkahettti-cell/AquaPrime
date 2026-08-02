import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import JsonLd from "@/components/seo/JsonLd";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aqprime.ru"),

  title: {
    default: "AquaPrime — Системы водоочистки",
    template: "%s | AquaPrime",
  },

  description:
    "Подбор, монтаж и обслуживание систем водоочистки для частных домов, коттеджей и коммерческих объектов. Бесплатная консультация и подбор оборудования.",

  keywords: [
    "AquaPrime",
    "водоочистка",
    "очистка воды",
    "водоподготовка",
    "умягчитель воды",
    "обезжелезиватель",
    "обезжелезивание воды",
    "осмос",
    "система очистки воды",
    "фильтр для воды",
    "монтаж водоочистки",
    "анализ воды",
    "водоочистка Нижний Новгород",
    "водоочистка Нижегородская область",
  ],

  authors: [
    {
      name: "AquaPrime",
    },
  ],

  creator: "AquaPrime",
  publisher: "AquaPrime",
  applicationName: "AquaPrime",

  alternates: {
    canonical: "https://aqprime.ru",
  },

  category: "business",

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://aqprime.ru",
    siteName: "AquaPrime",

    title: "AquaPrime — Современные системы очистки воды",

    description:
      "Проектирование, подбор, монтаж и сервисное обслуживание систем водоочистки для частных домов, коттеджей и коммерческих объектов.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AquaPrime",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AquaPrime",
    description:
      "Современные системы очистки воды для дома и бизнеса.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${manrope.variable} bg-white font-sans antialiased text-slate-900`}
      >
        <JsonLd />

        {children}
      </body>
    </html>
  );
}
