import React from "react";

export function Card({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-(--color-border) bg-white/70 p-6 shadow-(--shadow-card) backdrop-blur">
      <div className="text-sm font-semibold text-(--color-ink)">{title}</div>
      <div className="mt-3 text-sm leading-6 text-(--color-ink-muted)">
        {children}
      </div>
    </div>
  );
}
