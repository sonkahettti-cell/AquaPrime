import Hero from "@/components/sections/Hero";
import Advantages from "@/components/sections/Advantages";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Advantages />
      <Services />
      <Gallery />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
