"use client";

import Image from "next/image";

import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

import { gallery } from "@/data/gallery";

export default function Gallery() {
  return (
    <Section id="gallery" background="white">
      <Container>

        <FadeIn>
          <SectionTitle
            badge="Наши работы"
            title="Реальные объекты AquaPrime"
            description="Каждая система очистки воды подбирается индивидуально после анализа воды. Ниже представлены некоторые из выполненных нами объектов."
          />
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {gallery.map((item, index) => (

            <FadeIn
              key={item.image}
              delay={index * 0.08}
            >

              <Card className="overflow-hidden p-0">

                <div className="relative aspect-[4/3] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#0B2E59]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-500">
                    {item.location}
                  </p>

                </div>

              </Card>

            </FadeIn>

          ))}

        </div>

      </Container>
    </Section>
  );
}
