import React from "react";
import Link from "next/link";
import { Brand } from "@ui/Brand";
import { Button } from "@ui/Button";

export type NavItem = { label: string; href: string };
export type Cta = { label: string; href: string };

export function TopNav({
  tagline = "Deterministic decision ledger kernel",
  navItems = [
    {
      label: "README",
      href: "https://github.com/izumix77/decisiongraph-core#readme",
    },
    {
      label: "Constitution",
      href: "https://github.com/izumix77/decisiongraph-core/tree/main/docs/constitution",
    },
    {
      label: "Kernel API",
      href: "https://github.com/izumix77/decisiongraph-core/blob/main/DecisionGraph%20Core%20%E2%80%94%20Minimal%20Kernel%20API%20v0.2(%E5%B7%AE%E3%81%97%E6%9B%BF%E3%81%88%E7%89%88).md",
    },
    {
      label: "Schema",
      href: "https://github.com/izumix77/decisiongraph-core/tree/main/packages/schema",
    },
    {
      label: "Roadmap",
      href: "https://github.com/izumix77/decisiongraph-core/blob/main/ROADMAP.md",
    },
  ],
  primaryCta = {
    label: "GitHub",
    href: "https://github.com/izumix77/decisiongraph-core",
  },
  secondaryCta = {
    label: "Discussions",
    href: "https://github.com/izumix77/decisiongraph-core/discussions",
  },
}: {
  tagline?: string;
  navItems?: NavItem[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border)/70 bg-(--color-bg)/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" className="shrink-0">
            <Brand>DecisionGraph Core</Brand>
          </Link>
          <div className="hidden min-w-0 text-xs text-[color:var(--color-ink-subtle)] sm:block">
            <span className="truncate">{tagline}</span>
          </div>
        </div>

        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-(--color-ink-subtle) hover:text-(--color-ink)"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {secondaryCta && (
            <Button variant="secondary">
              <a href={secondaryCta.href} target="_blank" rel="noreferrer">
                {secondaryCta.label}
              </a>
            </Button>
          )}
          {primaryCta && (
            <Button>
              <a href={primaryCta.href} target="_blank" rel="noreferrer">
                {primaryCta.label}
              </a>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
