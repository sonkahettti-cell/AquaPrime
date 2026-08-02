"use client";

import clsx from "clsx";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import useScrolled from "@/hooks/useScrolled";

import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const scrolled = useScrolled();

  return (
    <header
      role="banner"
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container className="relative">
        <div
          className={clsx(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-20" : "h-24"
          )}
        >
          <Logo />

          <DesktopNavigation />

          <div className="hidden lg:block">
            <Button>
              Получить консультацию
            </Button>
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
