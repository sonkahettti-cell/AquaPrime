import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "dark";
  id?: string;
}

export default function Section({
  children,
  className,
  background = "white",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-24 lg:py-32",
        {
          "bg-white": background === "white",
          "bg-slate-50": background === "gray",
          "bg-[#081F3F]": background === "dark",
        },
        className
      )}
    >
      {children}
    </section>
  );
}
