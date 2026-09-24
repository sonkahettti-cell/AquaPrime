import {
  ArrowRight,
  Droplets,
  FlaskConical,
  Filter,
  Settings,
  ShieldCheck,
  Waves,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import IconBox from "@/components/ui/IconBox";

import { services } from "@/data/services";

const icons = {
  Droplets,
  FlaskConical,
  Filter,
  Settings,
  ShieldCheck,
  Waves,
};

const serviceLinks: Record<string, string> = {
  "Умягчение воды": "/umyagchenie-vody/",
  "Обезжелезивание воды": "/obezhelezivanie-vody/",
};

export default function Services() {
  return (
    <Section id="services" background="gray">
      <Container>
        <FadeIn>
          <SectionTitle
            badge="Наши услуги"
            title="Водоочистка для дома и коттеджа"
            description="Подбираем системы очистки воды с учётом анализа воды, водопотребления и особенностей объекта в Нижнем Новгороде и Нижегородской области."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            const href = serviceLinks[service.title] ?? "#contacts";
            const isSeoPage = Boolean(serviceLinks[service.title]);

            return (
              <FadeIn key={service.title} delay={index * 0.05}>
                <Card className="group flex h-full flex-col">
                  <IconBox>
                    <Icon className="h-6 w-6" />
                  </IconBox>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <a
                    href={href}
                    aria-label={
                      isSeoPage
                        ? `Подробнее: ${service.title}`
                        : `Получить консультацию по услуге: ${service.title}`
                    }
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-colors group-hover:text-sky-700"
                  >
                    {isSeoPage ? "Подробнее" : "Подобрать решение"}

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-base leading-7 text-slate-600">
              Если вы не знаете, какая система подойдёт именно для вашей воды,
              начните с анализа воды. После этого можно подобрать подходящее
              решение для дома.
            </p>

            <a
              href="#contacts"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-sky-600 transition-colors hover:text-sky-700"
            >
              Получить консультацию
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
