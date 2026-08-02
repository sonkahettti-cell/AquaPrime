import Image from "next/image";

export default function Brand() {
  return (
    <div className="flex flex-col gap-6">

      <Image
        src="/logo/logo_footer.png"
        alt="AquaPrime — системы очистки воды"
        width={260}
        height={90}
        priority
        className="h-auto w-auto"
      />

      <span className="inline-flex w-fit rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-300">
        Современные системы очистки воды
      </span>

      <p className="max-w-sm leading-8 text-slate-300">
        Проектируем, подбираем, устанавливаем и обслуживаем
        системы водоочистки для частных домов, коттеджей
        и коммерческих объектов.
      </p>

      <div className="h-px w-20 bg-cyan-500/40" />

      <p className="max-w-sm text-sm leading-7 text-slate-400">
        Индивидуальный подбор оборудования после анализа воды.
        Качественный монтаж, гарантия и дальнейшее сервисное
        обслуживание.
      </p>

    </div>
  );
}
