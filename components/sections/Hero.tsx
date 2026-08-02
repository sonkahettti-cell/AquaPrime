import HeroContent from "@/components/hero/HeroContent";
import HeroImage from "@/components/hero/HeroImage";

import FadeIn from "@/components/ui/FadeIn";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="absolute -right-32 top-40 h-[420px] w-[420px] rounded-full bg-sky-200/30 blur-3xl" />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#0B2E59 1px,transparent 1px),
            linear-gradient(to bottom,#0B2E59 1px,transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <Container className="relative">
        <div className="grid min-h-screen items-center gap-12 pt-4 pb-16 lg:grid-cols-2 lg:gap-16 lg:pt-6 lg:pb-20">
          <FadeIn>
            <HeroContent />
          </FadeIn>

          <FadeIn delay={0.2}>
            <HeroImage />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
