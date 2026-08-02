import Link from "next/link";

export const metadata = {
  title: "Пользовательское соглашение",
};

export default function TermsPage() {
  return (
    <main className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-sm lg:p-14">

        <h1 className="text-4xl font-black text-[#0B2E59]">
          Пользовательское соглашение
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
              Настоящее Пользовательское соглашение регулирует использование
              сайта <strong>aqprime.ru</strong> и определяет права и обязанности
              посетителей сайта и компании AquaPrime.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0B2E59]">
              2. Использование сайта
            </h2>

            <p>
              Пользователь обязуется использовать сайт исключительно в законных
              целях и не предпринимать действий, способных нарушить работу сайта
              или причинить ущерб компании AquaPrime.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0B2E59]">
              3. Информация на сайте
            </h2>

            <p>
              Информация, размещённая на сайте, носит информационный характер и
              не является публичной офертой, если иное прямо не указано.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0B2E59]">
              4. Ограничение ответственности
            </h2>

            <p>
              Компания AquaPrime не несёт ответственности за возможные убытки,
              возникшие вследствие использования информации, размещённой на
              сайте, либо невозможности использования сайта по причинам,
              не зависящим от компании.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0B2E59]">
              5. Интеллектуальная собственность
            </h2>

            <p>
              Все материалы сайта, включая тексты, фотографии, логотипы,
              графику и элементы дизайна, принадлежат AquaPrime и защищаются
              действующим законодательством.
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
