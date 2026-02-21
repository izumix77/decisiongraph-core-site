import React from "react";

export type ReferenceField = { label: string; value: React.ReactNode };

export type ReferenceBadgeData = {
  caption: React.ReactNode; // Desktop caption (1 line)
  mobileLines: React.ReactNode[]; // Mobile caption (2 lines)
  title?: React.ReactNode; // Popover title
  fields: ReferenceField[];
};

export function ReferenceBadge({ data }: { data: ReferenceBadgeData }) {
  return (
    <div className="mt-2">
      {/* Mobile: always visible (no hover) */}
      <p className="text-right text-[11px] leading-5 text-(--color-ink-subtle) sm:hidden">
        {data.mobileLines.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < data.mobileLines.length - 1 ? <br /> : null}
          </React.Fragment>
        ))}
      </p>

      {/* Desktop+: caption + hover popover */}
      <div className="hidden items-start justify-between gap-3 sm:flex">
        <p className="text-[11px] tracking-wide text-(--color-ink-subtle)">
          {data.caption}
        </p>

        <div className="group relative shrink-0">
          <button
            type="button"
            aria-label="Reference"
            className="inline-flex items-center rounded-full border border-(--color-border) bg-white/60 px-2 py-1 text-[11px] font-medium text-neutral-600 shadow-sm hover:bg-white"
          >
            Reference
          </button>

          <div className="pointer-events-none absolute right-0 top-full z-50 mt-2 w-[360px] rounded-xl border border-(--color-border) bg-white/95 p-3 text-[11px] leading-5 text-(--color-ink-muted) shadow-lg opacity-0 translate-y-1 transition group-hover:opacity-100 group-hover:translate-y-0">
            <div className="font-semibold tracking-wide text-neutral-900">
              {data.title ?? "Reference"}
            </div>
            <div className="mt-2 space-y-0.5">
              {data.fields.map((f) => (
                <div key={String(f.label)}>
                  <span className="font-medium">{f.label}:</span> {f.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
