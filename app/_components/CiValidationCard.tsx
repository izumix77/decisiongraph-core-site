import Link from "next/link";
import { Card } from "@ui/Card";
import { Button } from "@ui/Button";
import styles from "./CiValidationCard.module.css";

// ─── Terminal colour tokens (Mac-leaning palette) ────────────────────────────

const C = {
  dim: { color: "rgba(255,255,255,0.28)" } as React.CSSProperties,
  muted: { color: "rgba(255,255,255,0.48)" } as React.CSSProperties,
  fg: { color: "var(--terminal-text)" } as React.CSSProperties,
  green: { color: "#28c840" } as React.CSSProperties,
  red: { color: "#ff5f57" } as React.CSSProperties,
  amber: { color: "#febc2e" } as React.CSSProperties,
  blue: { color: "#7dd3fc" } as React.CSSProperties,
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function TLine({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", whiteSpace: "pre" }}>
      {children}
    </div>
  );
}

function TBlank() {
  return <div style={{ height: "0.4em" }} />;
}

// ─── CiValidationCard ────────────────────────────────────────────────────────

export function CiValidationCard() {
  return (
    <Card title="Deterministic validation in CI">
      <p className="text-sm text-[color:var(--color-ink-subtle)]">
        DecisionGraph Core validates the <em>structure</em> of decisions — not
        just code. If a decision depends on a superseded assumption, CI fails
        deterministically. The code didn&apos;t change. The{" "}
        <strong style={{ color: "var(--color-ink)" }}>assumption</strong> did.
      </p>

      {/* ── Terminal ── */}
      <div style={{ marginTop: "1.75rem" }}>
        <div className={styles.macTerminal}>
          <div className={styles.bar}>
            <div className={`${styles.dot} ${styles.red}`} />
            <div className={`${styles.dot} ${styles.yellow}`} />
            <div className={`${styles.dot} ${styles.green}`} />
            <span className={styles.title}>
              izzy@macbook — decisiongraph lint ./decisions
            </span>
          </div>

          <div className={styles.body}>
            <TLine>
              <span style={C.green}>% </span>
              <span style={C.fg}>decisiongraph lint ./decisions --strict</span>
            </TLine>
            <TBlank />

            <TLine>
              <span style={C.dim}>Resolving GraphStore from </span>
              <span style={C.blue}>./decisions</span>
              <span style={C.dim}> …</span>
            </TLine>
            <TBlank />

            <TLine>
              <span style={C.green}>✔ </span>
              <span style={C.blue}>[01-security-policy.decisionlog.json]</span>
              <span style={C.dim}> 2 ops applied</span>
            </TLine>

            <TLine>
              <span style={C.green}>✔ </span>
              <span style={C.blue}>
                [02-adr-auth-strategy.decisionlog.json]
              </span>
              <span style={C.dim}> 3 ops applied</span>
            </TLine>

            <TLine>
              <span style={C.red}>✖ </span>
              <span style={C.blue}>[03-adr-passwordless.decisionlog.json]</span>
              <span style={C.dim}> op rejected: add_edge</span>
            </TLine>
            <TBlank />

            {/* error block */}
            <div className={styles.errorBlock}>
              <TLine>
                <span style={C.red}>DEPENDENCY_ON_SUPERSEDED</span>
              </TLine>
              <TLine>
                <span style={C.muted}> path : </span>
                <span style={C.dim}>
                  graphs.G:adr-auth.edges.E:adr-042-depends-sec
                </span>
              </TLine>
              <TLine>
                <span style={C.muted}> target: </span>
                <span style={C.amber}>N:sec-017</span>
                <span style={C.dim}> (status: Superseded)</span>
              </TLine>
              <TBlank />
              <TLine>
                <span style={C.dim}> N:adr-042 </span>
                <span style={C.muted}>Use passwordless auth</span>
                <span style={C.dim}> [dev-team-alpha]</span>
              </TLine>
              <TLine>
                <span style={C.dim}> └─ depends_on ──▶ </span>
                <span style={C.red}>N:sec-017</span>
                <span style={C.dim}> Passkey policy </span>
                <span style={{ ...C.red, fontSize: "11px" }}>[SUPERSEDED]</span>
              </TLine>
            </div>
            <TBlank />

            <TLine>
              <span style={C.dim}>
                ──────────────────────────────────────────
              </span>
            </TLine>
            <TLine>
              <span style={C.red}>✖ Validation failed </span>
              <span style={C.dim}>1 error · 0 warnings</span>
            </TLine>
            <TLine>
              <span style={C.dim}>exit code 1</span>
            </TLine>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
        The code did not change. The assumption did.
      </p>

      <div className="mt-6">
        <Button variant="secondary">
          <Link href="/docs/quickstart">View Quickstart</Link>
        </Button>
      </div>
    </Card>
  );
}
