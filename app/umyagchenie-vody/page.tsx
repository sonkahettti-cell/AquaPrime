import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Умягчение воды в Нижнем Новгороде",
  description:
    "Умягчение воды для частных домов и коттеджей в Нижнем Новгороде и Нижегородской области. Подбор, монтаж и обслуживание систем умягчения воды.",
  alternates: {
    canonical: "/umyagchenie-vody/",
  },
  openGraph: {
    title: "Умягчение воды в Нижнем Новгороде | AquaPrime",
    description:
      "Подбор и установка систем умягчения воды для частных домов и коттеджей в Нижнем Новгороде и Нижегородской области.",
    url: "https://aqprime.ru/umyagchenie-vody/",
    type: "website",
    locale: "ru_RU",
  },
};

const faqItems = [
  {
    question: "Зачем нужно умягчение воды?",
    answer:
      "Жёсткая вода содержит повышенное количество солей кальция и магния. При нагревании они могут образовывать накипь на нагревательных элементах, сантехнике и бытовой технике. Система умягчения снижает жёсткость воды и помогает уменьшить образование отложений.",
  },
  {
    question: "Как понять, что вода жёсткая?",
    answer:
      "О возможной высокой жёсткости могут говорить белый налёт на сантехнике, накипь в чайнике и бойлере, снижение эффективности моющих средств и сухость кожи после контакта с водой. Точно определить жёсткость можно только после анализа воды.",
  },
  {
    question: "Нужен ли анализ воды перед установкой умягчителя?",
    answer:
      "Да. Анализ позволяет определить жёсткость и другие показатели воды, которые могут влиять на выбор оборудования и фильтрующей загрузки. Это помогает подобрать систему под конкретный источник воды.",
  },
  {
    question: "Подходит ли умягчитель для частного дома?",
    answer:
      "Да. Системы умягчения широко применяются в частных домах и коттеджах. Конкретная конфигурация зависит от анализа воды, количества жильцов, расхода воды и режима водопотребления.",
  },
  {
    question: "Нужно ли обслуживать систему умягчения?",
    answer:
      "Да. Система требует периодического контроля и обслуживания. В зависимости от оборудования может потребоваться пополнение реагента, контроль работы клапана и периодическая замена или обслуживание фильтрующей загрузки.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://aqprime.ru/umyagchenie-vody/#service",
  name: "Умягчение воды",
  description:
    "Подбор, установка и обслуживание систем умягчения воды для частных домов и коттеджей.",
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
  serviceType: "Умягчение воды",
  url: "https://aqprime.ru/umyagchenie-vody/",
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

export default function WaterSofteningPage() {
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
                  Умягчение воды
                </Link>

                <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight text-[#0B2E59] md:text-6xl">
                  Умягчение воды в Нижнем Новгороде и области
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  Подбираем и устанавливаем системы умягчения воды для
                  частных домов и коттеджей в Нижнем Новгороде и
                  Нижегородской области. Конфигурация системы определяется
                  после анализа воды и оценки водопотребления.
                </p>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Problem */}

        <Section background="gray">
          <Container>
            <SectionTitle
              badge="Жёсткая вода"
              title="Почему вода требует умягчения"
              description="Повышенная жёсткость воды может приводить к образованию накипи и отложений при нагревании."
              center
            />

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <FadeIn>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-[#0B2E59]">
                    Накипь
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Отложения могут появляться в чайниках, бойлерах,
                    водонагревателях и других устройствах, где вода
                    нагревается.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-[#0B2E59]">
                    Сантехника
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    На поверхности сантехники может оставаться белый
                    известковый налёт, который приходится регулярно
                    удалять.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.16}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-[#0B2E59]">
                    Бытовая техника
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Жёсткость воды учитывают при эксплуатации бойлеров,
                    стиральных и посудомоечных машин и другой техники.
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
              title="Как подбирается умягчение воды"
              description="Оборудование подбирается не только по количеству воды, но и по результатам анализа."
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
                    Определяем жёсткость и другие показатели воды,
                    которые важны для выбора оборудования.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="rounded-3xl border border-slate-200 p-7">
                  <div className="text-sm font-bold text-cyan-600">
                    02
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-[#0B2E59]">
                    Расчёт
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Учитываем расход воды, количество пользователей
                    и особенности системы водоснабжения дома.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.16}>
                <div className="rounded-3xl border border-slate-200 p-7">
                  <div className="text-sm font-bold text-cyan-600">
                    03
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-[#0B2E59]">
                    Установка
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    После подбора оборудования выполняем монтаж,
                    настройку и проверку работы системы.
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
                  title="Умягчение воды для дома и коттеджа"
                  description="Система может быть встроена в общую схему водоочистки и работать как один из этапов подготовки воды."
                  center
                />

                <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
                  <p className="text-lg leading-8 text-slate-600">
                    Если кроме высокой жёсткости в воде присутствуют
                    железо, марганец, неприятный запах или другие
                    загрязнения, одного умягчителя может быть недостаточно.
                    В таком случае система проектируется комплексно.
                  </p>

                  <div className="mt-7">
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
                  Другие системы водоочистки AquaPrime
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Если проблема с водой связана не только с жёсткостью,
                  возможно, потребуется комплексная система очистки.
                </p>

                <Link
                  href="/obezhelezivanie-vody/"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
                >
                  Обезжелезивание воды
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
              title="Частые вопросы об умягчении воды"
              description="Основная информация о выборе и эксплуатации систем умягчения."
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
