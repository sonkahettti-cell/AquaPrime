import Link from "next/link";
import { ArrowRight } from "lucide-react";

const links = [
  {
    label: "Преимущества",
    href: "#advantages",
  },
  {
    label: "Услуги",
    href: "#services",
  },
  {
    label: "Наши работы",
    href: "#gallery",
  },
  {
    label: "Этапы работы",
    href: "#process",
  },
  {
    label: "Контакты",
    href: "#contacts",
  },
];

export default function Navigation() {
  return (
    <nav>
      <h3 className="mb-6 text-lg font-semibold text-white">
        Навигация
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-3 text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              <ArrowRight className="h-4 w-4 text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100" />

              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
