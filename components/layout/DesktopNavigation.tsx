"use client";

import Link from "next/link";
import clsx from "clsx";

import useActiveSection from "@/hooks/useActiveSection";

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

export default function DesktopNavigation() {
  const activeSection = useActiveSection();

  return (
    <nav
      aria-label="Основная навигация"
      className="hidden items-center gap-10 lg:flex"
    >
      {navigation.map((item) => {
        const active =
          activeSection === item.href.replace("#", "");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "relative font-medium transition-all duration-300",
              active
                ? "text-cyan-600"
                : "text-slate-700 hover:text-cyan-600"
            )}
          >
            {item.title}

            <span
              className={clsx(
                "absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-500 transition-all duration-300",
                active
                  ? "scale-x-100"
                  : "scale-x-0"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
