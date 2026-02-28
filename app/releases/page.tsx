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
          <Card title="v0.4.1 — DEPENDENCY_ON_DEPRECATED + --strict flag">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[color:var(--color-ink-subtle)]">
              <span>Release date: 2026-03-01</span>
              <span>Packages: @decisiongraph/core, @decisiongraph/cli</span>
              <span>Type: Minor</span>
            </div>

            <SectionTitle>What changed</SectionTitle>
            <p className="mt-2 text-sm text-[color:var(--color-ink-subtle)]">
              v0.4.1 completes the two-tier violation model defined in
              Constitution Section 6. All four packages are now published on
              npm.
            </p>

            <SectionTitle>Added</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--color-ink-subtle)]">
              <li>
                <code>DEPENDENCY_ON_DEPRECATED</code> — WARN severity when a{" "}
                <code>depends_on</code> target is <code>Deprecated</code>.
                Signals that migration is needed before the target is
                superseded.
              </li>
              <li>
                CLI <code>--strict</code> flag — treat WARN as ERROR. Useful for
                pre-release CI gates.
              </li>
              <li>
                <code>@decisiongraph/cli@0.1.0</code> — initial npm publish.
              </li>
            </ul>

            <SectionTitle>Violation severity model</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--color-ink-subtle)]">
              <li>
                <code>DEPENDENCY_ON_SUPERSEDED</code> → ERROR — CI fails.
                Dependency is already invalid.
              </li>
              <li>
                <code>DEPENDENCY_ON_DEPRECATED</code> → WARN — CI passes.
                Dependency is still valid but should be migrated.
              </li>
              <li>
                <code>--strict</code> — promotes all WARNs to ERROR.
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

          <div className="mt-6"></div>
          <Card title="v0.3.1 — Multi-graph kernel + traverse CLI">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[color:var(--color-ink-subtle)]">
              <span>Release date: 2026-02-28</span>
              <span>Package: @decisiongraph/core</span>
              <span>Type: Breaking</span>
            </div>

            <SectionTitle>What changed</SectionTitle>
            <p className="mt-2 text-sm text-[color:var(--color-ink-subtle)]">
              v0.3.1 introduces GraphStore as the top-level container, enabling
              cross-graph edge validation and deterministic replay across
              multiple decision graphs. The{" "}
              <code className="text-[color:var(--color-ink)]">traverse</code>{" "}
              CLI command provides violation tree display with dependency chain
              visualization.
            </p>

            <SectionTitle>Constitutional additions</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--color-ink-subtle)]">
              <li>
                <code>GraphStore</code> introduced as top-level container.
                GraphStore = one world; commitId = shared time coordinate.
              </li>
              <li>
                <code>graphId</code> is required on all Graphs and log files.
              </li>
              <li>
                All IDs (<code>NodeId</code>, <code>EdgeId</code>,{" "}
                <code>CommitId</code>) are now GraphStore-wide unique.
                Graph-local uniqueness is intentionally not supported in v0.x.
              </li>
              <li>
                Cross-graph edges are supported and validated.{" "}
                <code>EDGE_NOT_RESOLVED</code> is raised for unresolvable
                references.
              </li>
              <li>
                <code>DEPENDENCY_ON_SUPERSEDED</code> enforced (Constitution
                Section 6).
              </li>
              <li>
                Circular dependency detection across graph boundaries (DFS).
              </li>
            </ul>

            <SectionTitle>New kernel operations</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--color-ink-subtle)]">
              <li>
                <code>lintStore</code> — store-wide cross-graph validation.
              </li>
              <li>
                <code>resolveNode</code> / <code>resolveEdge</code> — locate any
                Node or Edge across all Graphs.
              </li>
              <li>
                <code>traceDependencyPath</code> — chain traversal for violation
                display.
              </li>
            </ul>

            <SectionTitle>CLI</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--color-ink-subtle)]">
              <li>
                <code>decisiongraph traverse {"<directory>"}</code> — replays
                all decision logs into GraphStore and renders violations as
                dependency trees.
              </li>
            </ul>

            <SectionTitle>Breaking changes</SectionTitle>
            <p className="mt-2 text-sm text-[color:var(--color-ink-subtle)]">
              If you are migrating from v0.2:
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--color-ink-subtle)]">
              <li>
                Add <code>graphId</code> to every log file and Graph.
              </li>
              <li>
                Update <code>"version"</code> from <code>"0.2"</code> to{" "}
                <code>"0.3"</code> in all log files.
              </li>
              <li>
                Audit all Node IDs, Edge IDs, commitIds for GraphStore-wide
                uniqueness.
              </li>
              <li>
                Update <code>applyBatch</code>, <code>lint</code>,{" "}
                <code>replay</code> calls to accept <code>GraphStore</code> and{" "}
                <code>GraphId</code>.
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

          <div className="mt-6">
            <Card title="v0.2.0 — Constitutional tightening">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[color:var(--color-ink-subtle)]">
                <span>Release date: 2026-02-24</span>
                <span>Package: @decisiongraph/core</span>
                <span>Type: Breaking</span>
              </div>

              <SectionTitle>What changed</SectionTitle>
              <p className="mt-2 text-sm text-[color:var(--color-ink-subtle)]">
                v0.2 formalizes and enforces constitutional invariants. This
                release moves DecisionGraph Core from a conceptual prototype to
                a structurally enforceable kernel boundary.
              </p>

              <SectionTitle>Breaking changes</SectionTitle>
              <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--color-ink-subtle)]">
                <li>Edge IDs are required.</li>
                <li>Edge status is required.</li>
                <li>Author is required on all nodes and edges.</li>
                <li>
                  Replace <code>remove_edge</code> with{" "}
                  <code>supersede_edge</code>.
                </li>
                <li>Unified status vocabulary and state model clarified.</li>
                <li>Commit immutability enforcement hardened.</li>
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
          </div>

          <div className="mt-6 text-xs text-[color:var(--color-ink-subtle)]">
            Older releases will be added as the version history stabilizes.
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
