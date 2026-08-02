import Link from "next/link";

import Container from "@/components/ui/Container";

export default function Bottom() {
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-white/10">
      <Container>
        <div className="flex flex-col gap-8 py-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Левая часть */}

          <div className="space-y-2 text-center lg:text-left">

            <p className="text-sm text-slate-400">
              © {year} AquaPrime. Все права защищены.
            </p>

            <p className="text-sm text-slate-500">
              Современные системы очистки воды для частных домов,
              коттеджей и коммерческих объектов.
            </p>

          </div>

          {/* Правая часть */}

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">

            <Link
              href="/privacy"
              className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
            >
              Политика конфиденциальности
            </Link>

            <span className="hidden h-4 w-px bg-white/10 lg:block" />

            <Link
              href="/terms"
              className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
            >
              Пользовательское соглашение
            </Link>

            <span className="hidden h-4 w-px bg-white/10 lg:block" />

            <a
              href="https://aqprime.ru"
              className="font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              aqprime.ru
            </a>

          </div>

        </div>
      </Container>
    </div>
  );
}
