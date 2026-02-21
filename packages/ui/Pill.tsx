import React from "react";

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-(--color-border) bg-white/60 px-3 py-1 text-xs font-medium text-(--color-ink-muted) backdrop-blur">
      {children}
    </span>
  );
}
