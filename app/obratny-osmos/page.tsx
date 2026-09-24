import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Обратный осмос в Нижнем Новгороде",
  description:
    "Обратный осмос для питьевой воды в частных домах и квартирах Нижнего Новгорода и Нижегородской области. Подбор, монтаж и обслуживание систем обратного осмоса.",
  alternates: {
    canonical: "/obratny-osmos/",
  },
  openGraph: {
    title: "Обратный осмос в Нижнем Новгороде | AquaPrime",
    description:
      "Подбор и установка систем обратного осмоса для дополнительной очистки питьевой воды в Нижнем Новгороде и Нижегородской области.",
    url: "https://aqprime.ru/obratny-osmos/",
    type: "website",
    locale: "ru_RU",
  },
};

const faqItems = [
  {
    question: "Что такое обратный осмос?",
    answer:
      "Обратный осмос — это технология мембранной очистки воды. Вода проходит через полупроницаемую мембрану, которая задерживает значительную часть растворённых примесей. Такая система обычно используется как отдельная ступень для подготовки питьевой воды.",
  },
  {
    question: "Для чего нужен обратный осмос?",
    answer:
      "Система обратного осмоса применяется для дополнительной очистки питьевой воды. Она может использоваться, когда требуется более глубокая очистка воды непосредственно для питья и приготовления пищи.",
  },
  {
    question: "Нужен ли анализ воды перед установкой обратного осмоса?",
    answer:
      "Анализ воды помогает понять её состав и определить, какие ступени предварительной очистки необходимы перед мембраной. Для частного дома это особенно важно, если вода поступает из скважины или другого автономного источника.",
  },
  {
    question: "Подходит ли обратный осмос для воды из скважины?",
    answer:
      "Да, но конфигурацию системы необходимо подбирать с учётом состава исходной воды. При наличии повышенного содержания железа, жёсткости или других загрязнений перед мембраной могут потребоваться дополнительные ступени водоподготовки.",
  },
  {
    question: "Чем обратный осмос отличается от системы очистки всей воды в доме?",
    answer:
      "Системы водоочистки всего дома работают с общим потоком воды и подготавливают её для бытовых нужд. Обратный осмос обычно используется как отдельная питьевая ступень, например для воды на кухне.",
  },
  {
    question: "Нужно ли обслуживать систему обратного осмоса?",
    answer:
      "Да. Фильтрующие элементы имеют ограниченный ресурс и требуют периодической замены. Периодичность обслуживания зависит от качества исходной воды, расхода и конкретной конфигурации системы.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://aqprime.ru/obratny-osmos/#service",
  name: "Обратный осмос",
  description:
    "Подбор, установка и обслуживание систем обратного осмоса для дополнительной очистки питьевой воды.",
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
  serviceType: "Обратный осмос",
  url: "https://aqprime.ru/obratny-osmos/",
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

export default function ReverseOsmosisPage() {
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
                  Обратный осмос
                </Link>

                <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight text-[#0B2E59] md:text-6xl">
                  Обратный осмос в Нижнем Новгороде и области
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  Подбираем и устанавливаем системы обратного осмоса для
                  дополнительной очистки питьевой воды в квартирах и частных
                  домах Нижнего Новгорода и Нижегородской области.
                  Конфигурация системы определяется по составу исходной воды
                  и условиям эксплуатации.
                </p>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* What is reverse osmosis */}

        <Section background="gray">
          <Container>
            <SectionTitle
              badge="Обратный осмос"
              title="Дополнительная очистка питьевой воды"
              description="Обратный осмос используется как отдельная ступень для подготовки воды, предназначенной для питья и приготовления пищи."
              center
            />

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <FadeIn>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-[#0B2E59]">
                    Мембранная очистка
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Основным элементом системы является полупроницаемая
                    мембрана, через которую проходит подготовленная вода.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-[#0B2E59]">
                    Питьевая вода
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Систему можно использовать как отдельную питьевую
                    ступень на кухне для воды, используемой для питья
                    и приготовления пищи.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.16}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-[#0B2E59]">
                    Компактная система
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Питьевая система может устанавливаться непосредственно
                    под мойкой и дополняться накопительным баком и
                    отдельным краном.
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
              title="Как подбирается обратный осмос"
              description="Перед установкой важно учитывать состав воды, давление и условия эксплуатации системы."
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
                    Изучаем состав исходной воды и определяем, какие
                    предварительные ступени необходимы перед мембраной.
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
                    Учитываем давление воды, необходимый расход,
                    расположение системы и особенности исходной воды.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.16}>
                <div className="rounded-3xl border border-slate-200 p-7">
                  <div className="text-sm font-bold text-cyan-600">
                    03
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-[#0B2E59]">
                    Монтаж и запуск
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Устанавливаем систему, подключаем её к водоснабжению,
                    проверяем работу и объясняем основные правила
                    эксплуатации.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Whole house vs drinking water */}

        <Section background="gray">
          <Container>
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <SectionTitle
                  badge="Важно"
                  title="Обратный осмос и водоочистка всего дома — разные задачи"
                  description="Питьевой обратный осмос не заменяет комплексную водоподготовку, если проблемы присутствуют во всём объёме воды."
                  center
                />

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl bg-white p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-[#0B2E59]">
                      Водоочистка всего дома
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      Если исходная вода содержит повышенное количество
                      железа или имеет высокую жёсткость, сначала может
                      потребоваться комплексная система подготовки воды.
                    </p>

                    <Link
                      href="/obezhelezivanie-vody/"
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
                    >
                      Обезжелезивание воды
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="rounded-3xl bg-white p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-[#0B2E59]">
                      Питьевая вода
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      После предварительной подготовки воды обратный осмос
                      может использоваться как отдельная ступень для
                      дополнительной очистки питьевой воды.
                    </p>

                    <Link
                      href="/umyagchenie-vody/"
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
                    >
                      Умягчение воды
                      <ArrowRight className="h-4 w-4"
                    />
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
                  Комплексная водоочистка
                </span>

                <h2 className="mt-4 text-3xl font-black text-[#0B2E59] md:text-4xl">
                  Подбираем систему под состав вашей воды
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Если кроме проблем с питьевой водой требуется убрать
                  железо или снизить жёсткость во всём доме, оборудование
                  подбирается комплексно.
                </p>

                <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/umyagchenie-vody/"
                    className="inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
                  >
                    Умягчение воды
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/obezhelezivanie-vody/"
                    className="inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
                  >
                    Обезжелезивание воды
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* FAQ */}

        <Section background="gray">
          <Container>
            <SectionTitle
              badge="FAQ"
              title="Частые вопросы об обратном осмосе"
              description="Основная информация о подборе, установке и эксплуатации систем обратного осмоса."
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

