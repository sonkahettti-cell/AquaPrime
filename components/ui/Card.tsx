import { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={clsx(
        "group relative overflow-hidden rounded-3xl",
        "border border-slate-200/80",
        "bg-white",
        "p-8",
        "shadow-[0_12px_40px_rgba(15,23,42,0.06)]",
        "transition-all duration-500",
        "hover:-translate-y-2",
        "hover:border-cyan-200",
        "hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]",
        className
      )}
    >
      {/* Glow */}
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-sky-500 transition-transform duration-500 group-hover:scale-x-100" />

      {children}
    </div>
  );
}
