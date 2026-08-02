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
  ShieldCheck,
  Waves,
  Settings,
};

export default function Services() {
  return (
    <Section id="services">
      <Container>

        <FadeIn>
          <SectionTitle
            badge="Наши услуги"
            title="Подберём систему именно для вашей воды"
            description="Проектируем, поставляем, устанавливаем и обслуживаем современные системы очистки воды для частных домов и коммерческих объектов."
          />
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon =
              icons[service.icon as keyof typeof icons];

            return (
              <FadeIn
                key={service.title}
                delay={index * 0.08}
              >
                <a
                  href="#contacts"
                  className="block"
                >
                  <Card className="cursor-pointer">

                    <IconBox>
                      <Icon
                        size={30}
                        className="text-cyan-600 transition-colors duration-300 group-hover:text-white"
                      />
                    </IconBox>

                    <h3 className="mt-8 text-2xl font-bold text-[#0B2E59]">
                      {service.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {service.description}
                    </p>

                    <p className="mt-4 text-sm text-slate-400">
                      Нажмите, чтобы получить консультацию
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600 transition-all duration-300 group-hover:gap-4 group-hover:text-cyan-700">
                      Подобрать решение

                      <ArrowRight
                        size={18}
                        strokeWidth={2.2}
                      />
                    </div>

                  </Card>
                </a>
              </FadeIn>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}
