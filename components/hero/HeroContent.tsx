import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { contacts } from "@/data/contacts";

export default function HeroContent() {
  return (
    <div className="flex flex-col">

      {/* Logo */}

      <Image
        src="/logo/logo_header.png"
        alt="AquaPrime"
        width={300}
        height={90}
        priority
        className="mb-5 h-auto w-auto max-w-[300px]"
      />

      {/* Badge */}

      <Badge className="w-fit">
        <Sparkles className="mr-2 h-4 w-4" />
        Современные системы очистки воды
      </Badge>

      {/* Title */}

      <h1 className="mt-8 max-w-xl text-5xl font-black leading-tight tracking-tight text-[#0B2E59] md:text-7xl">
        Чистая вода
        <br />
        для вашего дома
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
        Подбираем, устанавливаем и обслуживаем системы водоочистки
        для частных домов, коттеджей и коммерческих объектов.
        Индивидуальное решение после анализа воды.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <a href="#contacts">
          <Button>
            Получить консультацию

            <ArrowRight
              size={18}
              className="ml-2"
            />
          </Button>
        </a>

        <a href="#services">
          <Button variant="secondary">
            Наши услуги
          </Button>
        </a>

      </div>

      {/* Features */}

      <div className="mt-12 space-y-5">

        <div className="flex items-center gap-4">

          <CheckCircle2
            size={22}
            className="text-cyan-500"
          />

          <span className="text-slate-700">
            Бесплатный подбор оборудования
          </span>

        </div>

        <div className="flex items-center gap-4">

          <ShieldCheck
            size={22}
            className="text-cyan-500"
          />

          <span className="text-slate-700">
            Гарантия на оборудование и монтаж
          </span>

        </div>

      </div>

    </div>
  );
}
