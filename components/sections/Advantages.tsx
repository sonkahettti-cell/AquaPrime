import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

import { advantages } from "@/data/advantages";

export default function Advantages() {
  return (
    <Section id="advantages" background="gray">
      <Container>
        <FadeIn>
          <SectionTitle
            badge="Почему выбирают AquaPrime"
            title="Надёжные решения для чистой воды"
            description="Мы сопровождаем клиента на каждом этапе — от анализа воды до сервисного обслуживания установленной системы."
          />
        </FadeIn>

        <div className="mt-20 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <Card className="group flex h-full flex-col items-center text-center">

                <div className="mb-6 flex h-16 w-16 items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="min-h-[72px] text-2xl font-bold text-[#0B2E59]">
                  {item.title}
                </h3>

                <p className="mt-5 flex-1 leading-8 text-slate-600">
                  {item.description}
                </p>

              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
