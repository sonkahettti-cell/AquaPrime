import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function HeroContent() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Badge */}

      <Badge className="w-fit">
        <Sparkles className="mr-2 h-4 w-4" />
        Современные системы очистки воды
      </Badge>

      {/* Title */}

      <h1 className="mt-8 max-w-xl text-5xl font-black leading-tight tracking-tight text-[#0B2E59] md:text-6xl">
        Водоочистка для дома
        <br />
        в Нижнем Новгороде
        <br />
        и области
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
        Подбираем, устанавливаем и обслуживаем системы водоочистки
        для частных домов и коттеджей в Нижнем Новгороде и Нижегородской
        области. Подбор оборудования — с учётом анализа воды и особенностей
        вашего объекта.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button>
          Получить консультацию

          <ArrowRight
            size={18}
            className="ml-2"
          />
        </Button>

        <Button variant="secondary">
          Наши услуги
        </Button>
      </div>

      {/* Features */}

      <div className="mt-12 space-y-5">
        <div className="flex items-center gap-4">
          <CheckCircle2
            size={22}
            className="text-cyan-500"
          />

          <span className="text-slate-700">
            Подбор оборудования с учётом анализа воды
          </span>
        </div>

        <div className="flex items-center gap-4">
          <ShieldCheck
            size={22}
            className="text-cyan-500"
          />

          <span className="text-slate-700">
            Монтаж и дальнейшее сервисное обслуживание
          </span>
        </div>
      </div>
    </div>
  );
}
