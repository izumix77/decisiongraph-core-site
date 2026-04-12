import { Brand } from "@ui/Brand";
import { Card } from "@ui/Card";

type ConceptPageTemplateProps = {
  title: string;
  category: string;
  subtitle: string;
  sectionTitle?: string;
  children: React.ReactNode;
};

export function ConceptPageTemplate({
  title,
  category,
  subtitle,
  sectionTitle = "1. Overview",
  children,
}: ConceptPageTemplateProps) {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-10">
        <div className="flex items-center gap-3">
          <Brand>DecisionGraph Core</Brand>
          <span className="text-xs text-[color:var(--color-ink-subtle)]">
            {category}
          </span>
        </div>

        <h1 className="mt-6 text-3xl font-semibold leading-tight">
          {title}
        </h1>

        <p className="mt-3 max-w-3xl text-sm text-[color:var(--color-ink-subtle)]">
          {subtitle}
        </p>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Card title="">
          <div className="space-y-4 leading-7">
            <h2 className="text-lg font-semibold text-[color:var(--color-ink)]">
              {sectionTitle}
            </h2>

            <div className="space-y-4 text-sm text-[color:var(--color-ink-subtle)]">
              {children}
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
