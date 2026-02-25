import Link from "next/link";
import { TopNav } from "./_components/TopNav";
import { Footer } from "./_components/Footer";
import { Brand } from "@ui/Brand";
import { Button } from "@ui/Button";
import { Card } from "@ui/Card";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-12">
          <div className="flex items-center gap-3">
            <Brand>DecisionGraph Core</Brand>
            <span className="text-xs text-[color:var(--color-ink-subtle)]">
              v0.2
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight">
            Deterministic kernel for recording, traversing, and replaying human
            decisions.
          </h1>

          <p className="mt-4 max-w-2xl text-[color:var(--color-ink-subtle)]">
            Infrastructure for replayable, immutable, auditable decision graphs
            — without inference.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button>
              <a
                href="https://github.com/izumix77/decisiongraph-core"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </Button>

            <Button variant="secondary">
              <a
                href="https://github.com/izumix77/decisiongraph-core/tree/main/docs/constitution"
                target="_blank"
                rel="noreferrer"
              >
                Read the Constitution
              </a>
            </Button>

            {/* 🔹 NEW: Release notes button */}
            <Button variant="secondary">
              <Link href="/releases">Release notes</Link>
            </Button>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-16 grid gap-4 md:grid-cols-3">
          <Card title="Determinism">
            <p className="text-sm text-[color:var(--color-ink-subtle)]">
              Same input → same output. Stable ordering and replay across time.
            </p>
          </Card>

          <Card title="Immutability">
            <p className="text-sm text-[color:var(--color-ink-subtle)]">
              After commit, the graph is append-only. Changes are expressed via
              supersession.
            </p>
          </Card>

          <Card title="Replay">
            <p className="text-sm text-[color:var(--color-ink-subtle)]">
              Reconstruct graph state as-of a boundary (commitId / timestamp)
              deterministically.
            </p>
          </Card>
        </section>

        {/* 🔹 NEW: Latest Release Section */}
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <Card title="Latest release">
            <p className="text-sm text-[color:var(--color-ink-subtle)]">
              v0.2.0 is now published on npm. Constitutional invariants have
              been hardened and immutability rules clarified.
            </p>

            <div className="mt-6">
              <Button variant="secondary">
                <Link href="/releases">
                  Read v0.2.0 release notes
                </Link>
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
