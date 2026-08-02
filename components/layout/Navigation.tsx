"use client";

import { site } from "@/data/site";

export default function Navigation() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {site.navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-slate-700 transition-colors hover:text-cyan-600"
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}
