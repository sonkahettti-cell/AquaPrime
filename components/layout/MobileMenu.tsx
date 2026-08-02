"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";

const navigation = [
  {
    title: "Преимущества",
    href: "#advantages",
  },
  {
    title: "Услуги",
    href: "#services",
  },
  {
    title: "Этапы",
    href: "#process",
  },
  {
    title: "Контакты",
    href: "#contacts",
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Открыть меню"
        onClick={() => setOpen(true)}
        className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
      >
        <Menu size={28} />
      </button>

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 p-6">
          <h2 className="text-2xl font-black text-[#0B2E59]">
            AquaPrime
          </h2>

          <button
            aria-label="Закрыть меню"
            onClick={() => setOpen(false)}
            className="rounded-xl p-2 transition hover:bg-slate-100"
          >
            <X />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex flex-1 flex-col p-6">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-4 text-lg font-medium text-slate-700 transition hover:bg-slate-100 hover:text-cyan-600"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <Button className="w-full">
              Получить консультацию
            </Button>
          </div>
        </nav>
      </aside>
    </>
  );
}
