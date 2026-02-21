// packages/ui/src/Brand.tsx
import * as React from "react";

export function Brand({
  children,
  as: Comp = "span",
  className = "",
}: {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}) {
  return (
    <Comp className={`[font-family:var(--font-brand)] ${className}`.trim()}>
      {children}
    </Comp>
  );
}
