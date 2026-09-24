import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Умягчение воды в Нижнем Новгороде — AquaPrime",

  description:
    "Умягчение воды для частных домов и дач в Нижнем Новгороде и Нижегородской области. Подбор, монтаж и обслуживание систем умягчения воды.",

  alternates: {
    canonical: "/umyagchenie-vody/",
  },

  openGraph: {
    title: "Умягчение воды в Нижнем Новгороде — AquaPrime",
    description:
      "Подбор и монтаж систем умягчения воды для домов и коттеджей в Нижнем Новгороде и Нижегородской области.",
    url: "https://aqprime.ru/umyagchenie-vody/",
    type: "website",
  },
};

const faq = [
  {
    question: "Зачем нужно умягчение воды?",
    answer:
      "Умягчение помогает снизить содержание солей жёсткости в воде. Это уменьшает образование накипи на сантехнике, нагревательных элементах, бойлерах и бытовой технике.",
  },
  {
    question: "Как понять, что вода слишком жёсткая?",
    answer:
      "На жёсткость воды могут указывать быстрое появление накипи, белый налёт на сантехнике, повышенный расход моющих средств и ухудшение работы нагревательной техники. Точно определить состав воды помогает анализ.",
  },
  {
    question: "Нужно ли делать анализ воды перед подбором системы?",
    answer:
      "Да. Состав воды влияет на выбор оборудования и фильтрующих материалов. Поэтому перед подбором системы желательно учитывать результаты анализа воды.",
  },
  {
    question: "Подойдёт ли система умягчения для частного дома?",
    answer:
      "Система может использоваться в частном доме, если её производительность и характеристики соответствуют расходу воды и её составу. Оборудование подбирается индивидуально.",
  },
  {
    question: "Нужно ли обслуживать систему умягчения?",
    answer:
      "Да. Система требует периодического обслуживания в соответствии с её конструкцией и режимом эксплуатации. AquaPrime также занимается сервисным обслуживанием систем водоочистки.",
  },
];

export default function SofteningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://aqprime.ru/umyagchenie-vody/#service",
    name: "Умягчение воды",
    serviceType: "Умягчение воды",
    description:
      "Подбор, монтаж и обслуживание систем умягчения воды для частных домов и коттеджей.",
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
    url: "https://aqprime.ru/umyagchenie-vody/",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main>
        <section className="bg-[#081F3F] py-24 lg:py-32">
          <Container>
            <FadeIn>
              <div className="max-w-4xl">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white"
                >
                  ← AquaPrime
                </Link>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">
                  <Droplets size={16} />
                  Водоочистка
                </div>

                <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
                  Умягчение воды
                  <br />
                  в Нижнем Новгороде
                  <br />
                  и области
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                  Подбираем и устанавливаем системы умягчения воды для
                  частных домов и коттеджей. Помогаем снизить жёсткость
                  воды и защитить сантехнику, бойлеры и бытовую технику
                  от образования накипи.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/#contacts"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-7 py-4 font-bold text-white transition hover:bg-cyan-400"
                  >
                    Получить консультацию
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                  >
                    Вернуться на главную
                  </Link>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        <Section background="gray">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <FadeIn>
                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                    Жёсткая вода
                  </span>

                  <h2 className="mt-4 text-4xl font-black text-[#0B2E59]">
                    Почему воде может понадобиться умягчение?
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    Жёсткая вода содержит повышенное количество солей
                    кальция и магния. При нагревании они могут становиться
                    причиной образования накипи на нагревательных элементах
                    и бытовой технике.
                  </p>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    Для частного дома это особенно актуально, если вода
                    поступает из скважины или другого автономного источника.
                    Перед подбором оборудования важно учитывать реальный
                    состав воды и расход в доме.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <Card className="p-8 lg:p-10">
                  <h3 className="text-2xl font-bold text-[#0B2E59]">
                    Признаки жёсткой воды
                  </h3>

                  <ul className="mt-7 space-y-5">
                    {[
                      "Белый налёт на сантехнике",
                      "Накипь на нагревательных элементах",
                      "Быстрое загрязнение смесителей",
                      "Повышенный расход моющих средств",
                      "Накипь в бойлере и бытовой технике",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate-600"
                      >
                        <CheckCircle2
                          size={21}
                          className="mt-0.5 shrink-0 text-cyan-500"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                  Решение AquaPrime
                </span>

                <h2 className="mt-4 text-4xl font-black text-[#0B2E59]">
                  Как подбирается система умягчения воды
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Универсальной системы для каждого дома нет. Оборудование
                  подбирается с учётом состава воды, расхода и особенностей
                  объекта.
                </p>
              </div>
            </FadeIn>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Droplets,
                  title: "Анализ воды",
                  text: "Изучаем показатели воды и определяем, какие проблемы необходимо решить.",
                },
                {
                  icon: ShieldCheck,
                  title: "Подбор системы",
                  text: "Выбираем оборудование с учётом состава воды и предполагаемого расхода.",
                },
                {
                  icon: Wrench,
                  title: "Монтаж и сервис",
                  text: "Устанавливаем систему и при необходимости выполняем её дальнейшее обслуживание.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeIn key={item.title} delay={index * 0.08}>
                    <Card className="h-full p-8">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                        <Icon
                          size={27}
                          className="text-cyan-600"
                        />
                      </div>

                      <h3 className="mt-7 text-2xl font-bold text-[#0B2E59]">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </Card>
                  </FadeIn>
                );
              })}
            </div>
          </Container>
        </Section>

        <Section background="gray">
          <Container>
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                  Частые вопросы
                </span>

                <h2 className="mt-4 text-4xl font-black text-[#0B2E59]">
                  Вопросы об умягчении воды
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-4xl space-y-5">
              {faq.map((item, index) => (
                <FadeIn key={item.question} delay={index * 0.04}>
                  <details className="group rounded-2xl bg-white p-6 shadow-sm">
                    <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-[#0B2E59]">
                      {item.question}
                    </summary>

                    <p className="mt-4 leading-7 text-slate-600">
                      {item.answer}
                    </p>
                  </details>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>

        <CTA />
      </main>
    </>
  );
}
