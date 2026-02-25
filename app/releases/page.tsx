import Link from "next/link";
import { TopNav } from "../_components/TopNav";
import { Footer } from "../_components/Footer";
import { Brand } from "@ui/Brand";
import { Card } from "@ui/Card";
import { Button } from "@ui/Button";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 text-xl font-semibold text-[color:var(--color-ink)]">
      {children}
    </h2>
  );
}

export default function ReleasesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <Brand>DecisionGraph Core</Brand>
                <span className="text-xs text-[color:var(--color-ink-subtle)]">
                  Releases
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-[color:var(--color-ink-subtle)]">
                Version history and constitutional deltas. No hype—just the
                structural changes that affect determinism, immutability, and
                replay.
              </p>
            </div>


          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20">
          <Card title="v0.2.0 — Constitutional tightening">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[color:var(--color-ink-subtle)]">
              <span>Release date: 2026-02-24</span>
              <span>Package: @decisiongraph/core</span>
              <span>Type: Breaking</span>
            </div>

            <SectionTitle>What changed</SectionTitle>
            <p className="mt-2 text-sm text-[color:var(--color-ink-subtle)]">
              v0.2 formalizes and enforces constitutional invariants. This
              release moves DecisionGraph Core from a conceptual prototype to a
              structurally enforceable kernel boundary.
            </p>

            <SectionTitle>Constitutional strengthening</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--color-ink-subtle)]">
              <li>Edge IDs are required.</li>
              <li>Edge status is required.</li>
              <li>Author is required on all nodes and edges.</li>
              <li>
                Edge deletion is forbidden; relationship changes must be
                expressed via supersession.
              </li>
              <li>Unified status vocabulary and state model clarified.</li>
              <li>Commit immutability enforcement hardened.</li>
            </ul>

            <SectionTitle>Determinism impact</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--color-ink-subtle)]">
              <li>Replay results are stable for identical inputs.</li>
              <li>
                The kernel remains non-judging; enforcement happens at the
                policy boundary.
              </li>
              <li>Minimal Kernel API surface is stabilized for v0.2.</li>
            </ul>

            <SectionTitle>JSON schema alignment</SectionTitle>
            <p className="mt-2 text-sm text-[color:var(--color-ink-subtle)]">
              Decision Log transport format v0.2 is intentionally minimal; core
              semantic guarantees are enforced at runtime.
            </p>

            <SectionTitle>Breaking changes</SectionTitle>
            <p className="mt-2 text-sm text-[color:var(--color-ink-subtle)]">
              If you are migrating from v0.1:
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--color-ink-subtle)]">
              <li>
                Add stable <code>id</code> to all edges.
              </li>
              <li>
                Add <code>status</code> to all edges.
              </li>
              <li>
                Ensure all nodes/edges include <code>author</code>.
              </li>
              <li>
                Replace <code>remove_edge</code> with{" "}
                <code>supersede_edge</code>.
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button>
                <a
                  href="https://www.npmjs.com/package/@decisiongraph/core"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on npm
                </a>
              </Button>
              <Button variant="secondary">
                <a
                  href="https://github.com/izumix77/decisiongraph-core"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </Button>
            </div>
          </Card>

          <div className="mt-6 text-xs text-[color:var(--color-ink-subtle)]">
            Older releases will be added as the version history stabilizes.
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
