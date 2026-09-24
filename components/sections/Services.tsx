import Link from "next/link";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Умягчение воды",
    description:
      "Системы для снижения жёсткости воды и защиты сантехники и бытовой техники.",
    href: "/umyagchenie-vody/",
  },
  {
    title: "Обезжелезивание воды",
    description:
      "Системы очистки воды от железа и других примесей с подбором под состав исходной воды.",
    href: "/obezhelezivanie-vody/",
  },
  {
    title: "Обратный осмос",
    description:
      "Мембранная очистка питьевой воды для дома и квартиры.",
    href: "/obratny-osmos/",
  },
];

export default function Services() {
  return (
    <Section background="white" id="services">
      <Container>
        <SectionTitle
          badge="Услуги"
          title="Водоочистка для дома и дачи"
          description="Подбираем, устанавливаем и обслуживаем системы очистки воды с учётом состава исходной воды."
          center
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#0B2E59]">
                {service.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {service.description}
              </p>

              <span className="mt-7 font-semibold text-cyan-600">
                Подробнее →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
