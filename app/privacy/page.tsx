import Link from "next/link";

export const metadata = {
  title: "Политика конфиденциальности",
};

export default function PrivacyPage() {
  return (
    <main className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-sm lg:p-14">

        <h1 className="text-4xl font-black text-[#0B2E59]">
          Политика конфиденциальности
        </h1>

        <p className="mt-3 text-slate-500">
          Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
        </p>

        <div className="mt-10 space-y-10 leading-8 text-slate-700">

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0B2E59]">
              1. Общие положения
            </h2>

            <p>
              Настоящая Политика конфиденциальности определяет порядок
              обработки и защиты персональных данных пользователей сайта
              <strong> aqprime.ru</strong>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0B2E59]">
              2. Какие данные мы собираем
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Имя пользователя.</li>
              <li>Номер телефона.</li>
              <li>Комментарий, оставленный в форме.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0B2E59]">
              3. Для чего используются данные
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Связь с клиентом.</li>
              <li>Подготовка коммерческого предложения.</li>
              <li>Консультация по подбору оборудования.</li>
              <li>Выполнение договорных обязательств.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0B2E59]">
              4. Передача данных третьим лицам
            </h2>

            <p>
              AquaPrime не продаёт и не передаёт персональные данные третьим
              лицам, за исключением случаев, предусмотренных законодательством
              Российской Федерации.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0B2E59]">
              5. Защита информации
            </h2>

            <p>
              Мы принимаем необходимые организационные и технические меры для
              защиты персональных данных от неправомерного доступа, изменения,
              раскрытия или уничтожения.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0B2E59]">
              6. Контакты
            </h2>

            <div className="space-y-2">
              <p>
                Телефон:{" "}
                <a
                  href="tel:+79334230201"
                  className="font-semibold text-cyan-600 hover:underline"
                >
                  +7 (933) 423-02-01
                </a>
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:info@aqprime.ru"
                  className="font-semibold text-cyan-600 hover:underline"
                >
                  info@aqprime.ru
                </a>
              </p>
            </div>
          </section>

        </div>

        <div className="mt-14 border-t pt-8">
          <Link
            href="/"
            className="font-semibold text-cyan-600 transition hover:text-cyan-700"
          >
            ← Вернуться на главную
          </Link>
        </div>

      </div>
    </main>
  );
}
