import clsx from "clsx";
import { ReactNode } from "react";

interface IconBoxProps {
  children: ReactNode;
  className?: string;
}

export default function IconBox({
  children,
  className,
}: IconBoxProps) {
  return (
    <div
      className={clsx(
        "flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 transition-all duration-300",
        "group-hover:bg-cyan-500",
        className
      )}
    >
      {children}
    </div>
  );
}
