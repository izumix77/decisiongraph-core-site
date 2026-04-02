
import Link from "next/link";
import { CiValidationCard } from "./_components/CiValidationCard";
import { Brand } from "@ui/Brand";
import { Button } from "@ui/Button";
import { Card } from "@ui/Card";

import { getLatestRelease, getReleaseSummary } from "@/lib/releases";

const ecosystem = [
  {
    title: "TraceOS",
    description:
      "Built on DecisionGraph Core — an append-only WHY engine for causal evidence, replay, and audit trails.",
    github: "https://github.com/izumix77/traceos",
    npm: "https://www.npmjs.com/package/@trace-os/core",
  },
  // Future entries:
  // {
  //   title: "DecisionRoom",
  //   description: "Collaborative decision protocol and review workflow.",
  //   github: "https://github.com/izumix77/decisionroom",
  // },
];

export default function Page() {
  const latest = getLatestRelease();
  const summary = getReleaseSummary(latest);

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12">
        <div className="flex items-center gap-3">
          <Brand>DecisionGraph Core</Brand>
          <span className="text-xs text-[color:var(--color-ink-subtle)]">
            v{latest.version}
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight">
          Deterministic Decision Kernel for Replayable Human Judgment
        </h1>

        <p className="mt-4 max-w-2xl text-[color:var(--color-ink-subtle)]">
          Infrastructure for replayable, immutable, auditable decision graphs —
          without inference.
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

          <Button variant="secondary">
            <Link href="/releases">Release notes</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-16 md:grid-cols-3">
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

      {/* CI Validation */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <CiValidationCard />
      </section>

      {/* Ecosystem */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">
              Ecosystem
            </h2>
            <p className="mt-1 text-sm text-[color:var(--color-ink-subtle)]">
              Companion projects built on top of DecisionGraph Core.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((item) => (
            <Card key={item.title} title={item.title}>
              <p className="text-sm text-[color:var(--color-ink-subtle)]">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="secondary">
                  <a href={item.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </Button>

                {item.npm && (
                  <Button variant="secondary">
                    <a href={item.npm} target="_blank" rel="noreferrer">
                      npm
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Release */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Card title="Latest release">
          <p className="text-sm text-[color:var(--color-ink-subtle)] leading-7">
            <span className="font-medium text-[color:var(--color-ink)]">
              v{latest.version}
            </span>{" "}
            {summary.split(" ").map((word, i) =>
              word === "DEPENDENCY_ON_DEPRECATED" || word === "--strict" ? (
                <code
                  key={i}
                  className="rounded bg-[color:var(--color-surface-subtle)] px-1 py-0.5 text-[color:var(--color-ink)]"
                >
                  {word}
                </code>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
          </p>

          <div className="mt-6">
            <Button variant="secondary">
              <Link href="/releases">Read release notes</Link>
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
