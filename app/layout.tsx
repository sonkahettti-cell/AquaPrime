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
    default: "Водоочистка в Нижнем Новгороде и области — AquaPrime",
    template: "%s | AquaPrime",
  },

  description:
    "Водоочистка в Нижнем Новгороде и Нижегородской области. Умягчение и обезжелезивание воды, обратный осмос, монтаж и обслуживание систем очистки воды для дома и дачи.",

  keywords: [
    "AquaPrime",
    "водоочистка",
    "очистка воды",
    "системы очистки воды",
    "водоподготовка",
    "водоочистка Нижний Новгород",
    "очистка воды Нижний Новгород",
    "водоочистка Нижегородская область",
    "умягчение воды",
    "умягчитель воды",
    "обезжелезивание воды",
    "обезжелезиватель",
    "обратный осмос",
    "фильтр для воды",
    "монтаж водоочистки",
    "обслуживание водоочистки",
    "анализ воды",
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
    canonical: "/",
  },

  category: "business",

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://aqprime.ru/",
    siteName: "AquaPrime",

    title: "Водоочистка в Нижнем Новгороде и области — AquaPrime",

    description:
      "Системы очистки воды для частных домов и коттеджей. Умягчение, обезжелезивание, обратный осмос, монтаж и обслуживание в Нижнем Новгороде и области.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AquaPrime — водоочистка в Нижнем Новгороде и области",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Водоочистка в Нижнем Новгороде и области — AquaPrime",

    description:
      "Системы очистки воды для дома и дачи в Нижнем Новгороде и Нижегородской области.",

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
