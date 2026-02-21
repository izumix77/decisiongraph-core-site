import React from "react";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export function Button({
  href,
  children,
  className = "",
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-medium shadow-sm transition-colors";
  const primary =
    "text-(--color-on-primary) bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]";
  const secondary =
    "text-(--color-ink) border border-[var(--color-border)] bg-(--color-surface) hover:bg-white";

  const cls = `${base} ${variant === "primary" ? primary : secondary} ${className}`;

  if (href)
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  return <button className={cls}>{children}</button>;
}
