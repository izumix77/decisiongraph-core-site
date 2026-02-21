import React from "react";
import Link from "next/link";
import { Brand } from "@ui/Brand";

export function Footer({
  variant = "minimal",
}: {
  variant?: "minimal" | "site";
}) {
  const year = new Date().getFullYear();

  if (variant === "minimal") {
    return (
      <footer className="border-t border-(--color-border)/70">
        <div className="mx-auto w-full max-w-6xl px-6 py-10 text-sm text-(--color-ink-subtle)">
          © {year} <Brand>DecisionGraph Core</Brand>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-(--color-border)/70">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 text-sm text-(--color-ink-subtle)">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="font-semibold text-(--color-ink)">
              <Brand>DecisionGraph Core</Brand>
            </div>
            <div className="mt-2 max-w-sm">
              Deterministic kernel for recording, traversing, and replaying
              human decisions.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-1">
            <a
              href="https://github.com/izumix77/decisiongraph-core"
              target="_blank"
              rel="noreferrer"
              className="hover:text-(--color-ink)"
            >
              GitHub
            </a>

            <a
              href="https://github.com/izumix77/decisiongraph-core/tree/main/docs/constitution"
              target="_blank"
              rel="noreferrer"
              className="hover:text-(--color-ink)"
            >
              Constitution (Normative)
            </a>

            <a
              href="https://github.com/izumix77/decisiongraph-core/blob/main/ROADMAP.md"
              target="_blank"
              rel="noreferrer"
              className="hover:text-(--color-ink)"
            >
              Roadmap
            </a>

            <a
              href="https://github.com/izumix77/decisiongraph-core/tree/main/packages/schema"
              target="_blank"
              rel="noreferrer"
              className="hover:text-(--color-ink)"
            >
              JSON Schema
            </a>
          </div>
        </div>

        <div className="mt-10">
          © {year} <Brand>DecisionGraph Core</Brand>
        </div>
      </div>
    </footer>
  );
}
