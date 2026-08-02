import Link from "next/link";
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-[#0B2E59] text-white hover:bg-[#16427D] shadow-lg hover:shadow-xl",

  secondary:
    "bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg hover:shadow-xl",

  outline:
    "border border-slate-300 bg-white text-[#0B2E59] hover:border-cyan-500 hover:text-cyan-600",

  ghost:
    "bg-transparent text-[#0B2E59] hover:bg-slate-100",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center",
    "rounded-2xl",
    "px-7 py-4",
    "font-semibold",
    "transition-all duration-300",
    "hover:-translate-y-0.5",
    "active:translate-y-0",
    "focus-visible:outline-none",
    "focus-visible:ring-4",
    "focus-visible:ring-cyan-200",
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
