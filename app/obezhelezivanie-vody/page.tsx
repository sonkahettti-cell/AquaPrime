import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Обезжелезивание воды в Нижнем Новгороде",
  description:
    "Обезжелезивание воды для частных домов и коттеджей в Нижнем Новгороде и Нижегородской области. Подбор, монтаж и обслуживание систем очистки воды от железа.",
  alternates: {
    canonical: "/obezhelezivanie-vody/",
  },
  openGraph: {
    title: "Обезжелезивание воды в Нижнем Новгороде | AquaPrime",
    description:
      "Подбор и установка систем обезжелезивания воды для частных домов и коттеджей в Нижнем Новгороде и Нижегородской области.",
    url: "https://aqprime.ru/obezhelezivanie-vody/",
    type: "website",
    locale: "ru_RU",
  },
};

const faqItems = [
  {
    question: "Почему в воде появляется железо?",
    answer:
      "Железо может присутствовать в подземной воде в растворённом виде или вместе с другими соединениями. После контакта с воздухом оно может окисляться и образовывать характерный осадок.",
  },
  {
    question: "Как понять, что в воде много железа?",
    answer:
      "На повышенное содержание железа могут указывать металлический или неприятный запах, изменение цвета воды, рыжий налёт на сантехнике и пятна на раковинах и других поверхностях. Точное содержание определяется лабораторным анализом.",
  },
  {
    question: "Нужен ли анализ воды перед установкой обезжелезивателя?",
    answer:
      "Да. Анализ необходим для определения содержания железа и других показателей, которые влияют на выбор технологии очистки и фильтрующей загрузки.",
  },
  {
    question: "Можно ли установить обезжелезиватель в частном доме?",
    answer:
      "Да. Системы обезжелезивания применяются в частных домах и коттеджах. Конкретное оборудование подбирается с учётом состава воды, расхода и особенностей источника.",
  },
  {
    question: "Можно ли одновременно убрать железо и жёсткость?",
    answer:
      "Да. При наличии нескольких проблем с водой система может включать несколько последовательных ступеней очистки. Например, обезжелезивание и умягчение могут быть частью одной комплексной схемы водоподготовки.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://aqprime.ru/obezhelezivanie-vody/#service",
  name: "Обезжелезивание воды",
  description:
    "Подбор, установка и обслуживание систем обезжелезивания воды для частных домов и коттеджей.",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://aqprime.ru/#business",
    name: "AquaPrime",
    url: "https://aqprime.ru/",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Нижегородская область",
  },
  serviceType: "Обезжелезивание воды",
  url: "https://aqprime.ru/obezhelezivanie-vody/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function IronRemovalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <main>
        {/* Intro */}

        <Section background="white">
          <Container>
            <FadeIn>
              <div className="mx-auto max-w-4xl text-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
                >
                  AquaPrime
                  <ArrowRight className="h-4 w-4" />
                  Обезжелезивание воды
                </Link>

                <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight text-[#0B2E59] md:text-6xl">
                  Обезжелезивание воды в Нижнем Новгороде и области
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  Подбираем и устанавливаем системы очистки воды от железа
                  для частных домов и коттеджей в Нижнем Новгороде и
                  Нижегородской области. Конфигурация системы определяется
                  по результатам анализа воды и особенностям источника.
                </p>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Problem */}

        <Section background="gray">
          <Container>
            <SectionTitle
              badge="Железо в воде"
              title="Когда требуется обезжелезивание воды"
              description="Повышенное содержание железа может влиять на внешний вид воды, сантехнику и бытовые процессы."
              center
            />

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <FadeIn>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-[#0B2E59]">
                    Рыжий налёт
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    На сантехнике и других поверхностях могут появляться
                    характерные рыжие или коричневые следы.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-[#0B2E59]">
                    Запах и вкус
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    При повышенном содержании железа вода может иметь
                    металлический привкус или неприятный запах.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.16}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-[#0B2E59]">
                    Изменение цвета
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    После контакта с воздухом растворённое железо может
                    окисляться и приводить к изменению цвета воды.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Selection */}

        <Section background="white">
          <Container>
            <SectionTitle
              badge="Подбор системы"
              title="Как подбирается обезжелезивание"
              description="Технология очистки зависит от состава воды и концентрации загрязнений."
              center
            />

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <FadeIn>
                <div className="rounded-3xl border border-slate-200 p-7">
                  <div className="text-sm font-bold text-cyan-600">
                    01
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-[#0B2E59]">
                    Анализ воды
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Определяем содержание железа и другие показатели,
                    которые влияют на выбор технологии очистки.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="rounded-3xl border border-slate-200 p-7">
                  <div className="text-sm font-bold text-cyan-600">
                    02
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-[#0B2E59]">
                    Подбор оборудования
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Учитываем источник воды, расход, концентрацию
                    загрязнений и особенности водоснабжения дома.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.16}>
                <div className="rounded-3xl border border-slate-200 p-7">
                  <div className="text-sm font-bold text-cyan-600">
                    03
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-[#0B2E59]">
                    Монтаж и настройка
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    После установки оборудование настраивается под
                    параметры системы водоснабжения и режим эксплуатации.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Private house */}

        <Section background="gray">
          <Container>
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <SectionTitle
                  badge="Для частного дома"
                  title="Обезжелезивание воды для дома и коттеджа"
                  description="Система обезжелезивания может быть частью комплексной схемы водоподготовки."
                  center
                />

                <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
                  <p className="text-lg leading-8 text-slate-600">
                    Если кроме железа в воде присутствует повышенная
                    жёсткость, систему можно дополнить ступенью умягчения.
                    Это позволяет решить несколько задач водоподготовки
                    в рамках одной схемы.
                  </p>

                  <div className="mt-7">
                    <Link
                      href="/umyagchenie-vody/"
                      className="inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
                    >
                      Умягчение воды
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Internal linking */}

        <Section background="white">
          <Container>
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                  Другие решения
                </span>

                <h2 className="mt-4 text-3xl font-black text-[#0B2E59] md:text-4xl">
                  Комплексная водоочистка для дома
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Если в воде одновременно присутствуют железо и соли
                  жёсткости, может потребоваться комплексная система
                  водоподготовки.
                </p>

                <Link
                  href="/umyagchenie-vody/"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
                >
                  Умягчение воды
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* FAQ */}

        <Section background="gray">
          <Container>
            <SectionTitle
              badge="FAQ"
              title="Частые вопросы об обезжелезивании воды"
              description="Основная информация о выборе и эксплуатации систем очистки воды от железа."
              center
            />

            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[#0B2E59]">
                    {item.question}
                  </summary>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </Section>

        <CTA />
      </main>
    </>
  );
}
