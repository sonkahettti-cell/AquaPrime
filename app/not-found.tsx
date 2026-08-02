import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

      <div className="max-w-2xl text-center">

        <Image
          src="/logo/logo_header.png"
          alt="AquaPrime"
          width={260}
          height={80}
          priority
          className="mx-auto mb-10 h-auto w-auto"
        />

        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-600">
          Ошибка 404
        </span>

        <h1 className="mt-8 text-5xl font-black text-[#0B2E59] md:text-6xl">
          Такой страницы не существует
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Возможно, ссылка устарела или была введена с ошибкой.
          Вернитесь на главную страницу и продолжите знакомство
          с AquaPrime.
        </p>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-cyan-600"
          >
            Вернуться на главную
          </Link>
        </div>

      </div>

    </main>
  );
}
