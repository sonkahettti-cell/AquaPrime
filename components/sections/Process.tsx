import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <Section id="process" background="gray">
      <Container>
        <FadeIn>
          <SectionTitle
            badge="Как мы работаем"
            title="От заявки до чистой воды"
            description="Весь процесс прозрачен. Вы всегда понимаете, что происходит на каждом этапе сотрудничества."
          />
        </FadeIn>

        <div className="mt-20 grid items-stretch gap-8 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <FadeIn
              key={step.number}
              delay={index * 0.08}
            >
              <Card className="group relative flex h-full flex-col items-center overflow-hidden text-center">

                {/* Верхняя линия */}
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-cyan-500 transition-transform duration-300 group-hover:scale-x-100" />

                {/* Номер этапа */}
                <div className="mb-8 flex h-20 items-center justify-center text-6xl font-black leading-none text-cyan-100 transition-colors duration-300 group-hover:text-cyan-500">
                  {step.number}
                </div>

                {/* Заголовок */}
                <h3 className="min-h-[72px] text-2xl font-bold text-[#0B2E59] flex items-center justify-center">
                  {step.title}
                </h3>

                {/* Описание */}
                <p className="mt-5 flex-1 leading-8 text-slate-600">
                  {step.description}
                </p>

              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
