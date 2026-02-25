import { TopNav } from "../../_components/TopNav";
import { Footer } from "../../_components/Footer";
import { Brand } from "@ui/Brand";
import { Card } from "@ui/Card";
import { Button } from "@ui/Button";

export default function QuickstartPage() {
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
                  Quickstart
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-semibold leading-tight">
                Validate decisions in CI (minimal setup)
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-[color:var(--color-ink-subtle)]">
                This page intentionally stays minimal. Copy, run, and confirm
                the kernel is real.
              </p>
            </div>

          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-6">
          <Card title="1) Install">
            <div className="mt-4 rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4 backdrop-blur">
              <pre className="overflow-x-auto text-xs leading-6 text-[color:var(--color-ink)]">
                <code>{`npm i @decisiongraph/core`}</code>
              </pre>
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-6">
          <Card title="2) Create a decision log">
            <p className="text-sm text-[color:var(--color-ink-subtle)]">
              Create{" "}
              <code className="text-[color:var(--color-ink)]">
                decisions/example.decisionlog.json
              </code>
              .
            </p>

            <div className="mt-4 rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4 backdrop-blur">
              <pre className="overflow-x-auto text-xs leading-6 text-[color:var(--color-ink)]">
                <code>{`{
  "version": "0.2",
  "ops": [
    {
      "type": "add_node",
      "node": {
        "id": "ADR-001",
        "kind": "Decision",
        "status": "Active",
        "createdAt": "2026-01-01T00:00:00Z",
        "author": "team",
        "payload": {
          "statement": "Use PostgreSQL for primary data storage"
        }
      }
    },
    {
      "type": "commit",
      "commitId": "C-1",
      "createdAt": "2026-01-01T00:00:01Z",
      "author": "team"
    }
  ]
}`}</code>
              </pre>
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-6">
          <Card title="3) Validate (local / CI)">
            <p className="text-sm text-[color:var(--color-ink-subtle)]">
              Minimal pattern: read logs → replay → lint → exit non-zero on
              ERROR.
            </p>

            <div className="mt-4 rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4 backdrop-blur">
              <pre className="overflow-x-auto text-xs leading-6 text-[color:var(--color-ink)]">
                <code>{`node scripts/validate-decisions.mjs`}</code>
              </pre>
            </div>

            <div className="mt-4 rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4 backdrop-blur">
              <pre className="overflow-x-auto text-xs leading-6 text-[color:var(--color-ink)]">
                <code>{`# .github/workflows/decisions.yml
name: DecisionGraph Validation

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: node scripts/validate-decisions.mjs`}</code>
              </pre>
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20">
          <Card title="Guarantees">
            <ul className="mt-2 list-disc pl-5 text-sm text-[color:var(--color-ink-subtle)]">
              <li>Validation results are deterministic.</li>
              <li>Replay is first-class.</li>
              <li>
                After commit, graphs are append-only (changes via supersession).
              </li>
            </ul>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
