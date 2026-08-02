import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

import Brand from "./Brand";
import Navigation from "./Navigation";
import Contacts from "./Contacts";
import Bottom from "./Bottom";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#0B2E59] text-white">

      {/* Верхняя фирменная линия */}

      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <Section
        background="dark"
        className="py-20 lg:py-24"
      >
        <Container>

          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1.2fr]">

            <Brand />

            <Navigation />

            <Contacts />

          </div>

        </Container>
      </Section>

      <Bottom />

    </footer>
  );
}
