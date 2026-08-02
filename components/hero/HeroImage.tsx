import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">

      {/* Background glow */}
      <div className="absolute inset-0 rounded-[40px] bg-cyan-200/20 blur-3xl" />

      <div className="relative">

        {/* Main image */}
        <div className="overflow-hidden rounded-[32px] shadow-2xl">
          <Image
            src="/works/work-1.jpg"
            alt="Монтаж системы водоочистки"
            width={900}
            height={900}
            priority
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Top card */}
        <div className="absolute -left-8 top-10 hidden w-44 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-xl lg:block">
          <Image
            src="/works/work-2.jpg"
            alt="Монтаж"
            width={400}
            height={400}
            className="h-36 w-full object-cover"
          />
        </div>

        {/* Bottom card */}
        <div className="absolute -right-8 bottom-10 hidden w-44 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-xl lg:block">
          <Image
            src="/works/work-3.jpg"
            alt="Оборудование"
            width={400}
            height={400}
            className="h-36 w-full object-cover"
          />
        </div>

      </div>

    </div>
  );
}
