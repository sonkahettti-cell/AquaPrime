import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Обезжелезивание воды в Нижнем Новгороде",
  description:
    "Обезжелезивание воды для частных домов и коттеджей в Нижнем Новгороде и Нижегородской области. Подбор системы по анализу воды, монтаж и сервис AquaPrime.",
  alternates: {
    canonical: "https://aqprime.ru/obezhelezivanie-vody/",
  },
  openGraph: {
    title: "Обезжелезивание воды в Нижнем Новгороде | AquaPrime",
    description:
      "Системы обезжелезивания воды для дома и коттеджа в Нижнем Новгороде и Нижегородской области. Подбор оборудования, монтаж и обслуживание.",
    url: "https://aqprime.ru/obezhelezivanie-vody/",
    locale: "ru_RU",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Зачем нужно обезжелезивание воды?",
    answer:
      "Повышенное содержание железа может влиять на вкус и запах воды, оставлять желтоватый или ржавый налёт на сантехнике и постепенно загрязнять оборудование. Система обезжелезивания помогает снизить содержание железа до подходящего уровня.",
  },
  {
    question: "Как понять, что в воде повышенное содержание железа?",
    answer:
      "На повышенное содержание железа могут указывать металлический привкус, характерный запах, желтоватый оттенок воды после отстаивания и ржавые пятна на сантехнике. Однако точно определить содержание железа можно только с помощью анализа воды.",
  },
  {
    question: "Можно ли очистить от железа воду из скважины?",
    answer:
      "Да. Для частного дома можно подобрать систему обезжелезивания с учётом состава исходной воды, производительности системы и особенностей водопотребления.",
  },
  {
    question: "Можно ли одновременно убрать железо и жёсткость?",
    answer:
      "Да, в зависимости от состава воды можно подобрать комплексную систему водоочистки, которая решает сразу несколько задач — например, снижение содержания железа и умягчение воды.",
  },
  {
    question: "Нужен ли анализ воды перед установкой системы?",
    answer:
      "Обязательно. Для правильного подбора оборудования важно знать не только содержание железа, но и другие параметры воды, включая жёсткость, марганец, pH и другие показатели.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://aqprime.ru/obezhelezivanie-vody/#service",
  name: "Обезжелезивание воды",
  serviceType: "Обезжелезивание воды",
  description:
    "Подбор, установка и обслуживание систем обезжелезивания воды для частных домов и коттеджей в Нижнем Новгороде и Нижегородской области.",
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
      <main>
        <Section>
          <Container>
            <SectionTitle
              badge="Обезжелезивание воды"
              title="Обезжелезивание воды в Нижнем Новгороде и области"
              description="Подбираем системы очистки воды от железа для частных домов и коттеджей с учётом состава исходной воды, водопотребления и особенностей объекта."
            />

            <div className="mx-auto mt-12 max-w-4xl space-y-10 text-base leading-8 text-slate-600">
              <section>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Почему в воде появляется железо
                </h2>

                <p className="mt-4">
                  Повышенное содержание железа часто встречается в воде из
                  скважин и других индивидуальных источников. В воде железо
                  может присутствовать в разных формах, поэтому для выбора
                  подходящей системы важно учитывать не только сам факт его
                  наличия, но и общий состав воды.
                </p>

                <p className="mt-4">
                  При повышенном содержании железа вода может приобретать
                  металлический привкус и запах, менять цвет после контакта с
                  воздухом, а на сантехнике и бытовом оборудовании могут
                  появляться характерные желтоватые или ржавые отложения.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Когда требуется обезжелезивание воды
                </h2>

                <p className="mt-4">
                  Обратить внимание на качество воды стоит, если после
                  набора она со временем меняет цвет, появляется металлический
                  привкус или запах, а на сантехнике остаются пятна и налёт.
                </p>

                <p className="mt-4">
                  При этом визуальных признаков недостаточно для точного
                  подбора оборудования. Один и тот же внешний симптом может
                  быть связан с разными показателями воды, поэтому перед
                  установкой системы желательно выполнить анализ.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Как подбирается система обезжелезивания
                </h2>

                <p className="mt-4">
                  Система подбирается не только по концентрации железа.
                  Важны также производительность, расход воды, жёсткость,
                  марганец, pH и другие характеристики исходной воды.
                </p>

                <p className="mt-4">
                  После анализа можно определить подходящую технологию
                  очистки и подобрать оборудование, которое будет соответствовать
                  условиям конкретного дома.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="text-sm font-semibold text-sky-600">
                      01
                    </div>

                    <h3 className="mt-3 text-lg font-semibold text-slate-900">
                      Анализ воды
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Определяем основные показатели исходной воды.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="text-sm font-semibold text-sky-600">
                      02
                    </div>

                    <h3 className="mt-3 text-lg font-semibold text-slate-900">
                      Подбор системы
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Подбираем оборудование под состав воды и расход.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="text-sm font-semibold text-sky-600">
                      03
                    </div>

                    <h3 className="mt-3 text-lg font-semibold text-slate-900">
                      Монтаж и настройка
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Устанавливаем и настраиваем систему водоочистки.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Обезжелезивание воды для частного дома
                </h2>

                <p className="mt-4">
                  Для частного дома система должна учитывать реальное
                  водопотребление и характеристики источника. Слишком маленькая
                  производительность может привести к недостатку очищенной воды,
                  а неправильно подобранная технология — к неудовлетворительному
                  результату очистки.
                </p>

                <p className="mt-4">
                  Поэтому мы рекомендуем сначала разобраться с составом воды,
                  а уже затем выбирать оборудование для обезжелезивания.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Частые вопросы
                </h2>

                <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                  {faqItems.map((item) => (
                    <details key={item.question} className="group p-6">
                      <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-slate-900">
                        <span className="relative block">
                          {item.question}
                        </span>
                      </summary>

                      <p className="mt-4 text-base leading-7 text-slate-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </div>
          </Container>
        </Section>

        <CTA />
      </main>

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
    </>
  );
}
