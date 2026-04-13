import { ConceptPageTemplate } from "../../_components/ConceptPageTemplate";

export default function Page() {
  return (
    <ConceptPageTemplate
      category="Runtime Layer"
      title="Incremental Reachability Engine (IRE)"
      subtitle="GTCA Extension / Performance Layer · Draft v0.1 · Published 2026-04"
      sectionTitle="1. Overview"
    >
      <p>
        The <strong>Incremental Reachability Engine (IRE)</strong> is an
        execution-layer extension of the{" "}
        <strong>Graph Traversal Control Algorithm (GTCA)</strong>.
      </p>

      <p>
        While GTCA defines how to compute a reachable set from a static graph
        snapshot, IRE defines how to{" "}
        <strong>
          maintain that reachable set in real time under continuous change
        </strong>
        .
      </p>

      <p>
        Instead of recomputing the entire graph after every update, the engine
        computes only the affected delta.
      </p>

      <blockquote className="border-l-2 pl-4 italic">
        <strong>
          Do not recompute the world. Recompute only the change.
        </strong>
      </blockquote>

      <p>This enables low-latency, AI-native control systems.</p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        2. Core Problem
      </h2>

      <p>
        In large-scale dynamic systems, the graph and its execution context
        change continuously.
      </p>

      <p>Examples include:</p>

      <ul className="list-disc pl-5 space-y-2">
        <li>new approvals</li>
        <li>revoked permissions</li>
        <li>incident escalation</li>
        <li>role changes</li>
        <li>trust score updates</li>
        <li>time-based expiration</li>
      </ul>

      <p>A full recomputation of:</p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`ReachableSet(G, ...)`}
        </pre>
      </div>

      <p>for every small change is computationally expensive.</p>

      <blockquote className="border-l-2 pl-4 italic">
        <strong>
          update the reachable state space using only the minimal affected
          subgraph
        </strong>
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        3. Delta Model
      </h2>

      <p>System changes are represented as deltas.</p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        3.1 Structural Delta
      </h3>

      <p>Graph topology changes.</p>

      <pre className="overflow-x-auto text-xs leading-6">{`ΔG`}</pre>

      <ul className="list-disc pl-5 space-y-2">
        <li>edge addition</li>
        <li>edge removal</li>
        <li>node insertion</li>
        <li>node deactivation</li>
      </ul>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        3.2 State Delta
      </h3>

      <p>Metadata or runtime state changes.</p>

      <pre className="overflow-x-auto text-xs leading-6">{`ΔS`}</pre>

      <ul className="list-disc pl-5 space-y-2">
        <li>status: Draft → Approved</li>
        <li>trust_score: 0.4 → 0.9</li>
        <li>incident severity updates</li>
        <li>timestamp expiration</li>
      </ul>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        3.3 Context Delta
      </h3>

      <p>Actor or environment changes.</p>

      <pre className="overflow-x-auto text-xs leading-6">{`ΔC`}</pre>

      <ul className="list-disc pl-5 space-y-2">
        <li>role changes</li>
        <li>emergency mode activation</li>
        <li>audit context entry</li>
        <li>escalation handoff</li>
      </ul>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        4. Reachability Update Function
      </h2>

      <p>The updated reachable set is defined as:</p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`R' = R ∪ ΔR_gain \\ ΔR_loss`}
        </pre>
      </div>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          <code>R</code> = previous reachable set
        </li>
        <li>
          <code>ΔR_gain</code> = newly reachable nodes
        </li>
        <li>
          <code>ΔR_loss</code> = invalidated nodes
        </li>
      </ul>

      <p>This is the core formalism of incremental reachability.</p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        5. Forward Propagation
      </h2>

      <p>
        Triggered when constraints are relaxed or new paths appear.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>edge added</li>
        <li>approval granted</li>
        <li>trust threshold satisfied</li>
      </ul>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        Rule
      </h3>

      <p>
        If the source node of a changed edge is already reachable:
      </p>

      <pre className="overflow-x-auto text-xs leading-6">{`u ∈ R`}</pre>

      <p>then traversal resumes from that node.</p>

      <pre className="overflow-x-auto text-xs leading-6">
{`u → v

ΔR_gain`}
      </pre>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        Flow
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`Changed edge
    ↓
Check source reachability
    ↓
Resume GTCA traversal
    ↓
Expand only new branch
    ↓
Merge into R`}
      </pre>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        6. Invalidation and Pruning
      </h2>

      <p>Triggered when paths become invalid.</p>

      <ul className="list-disc pl-5 space-y-2">
        <li>approval revoked</li>
        <li>edge removed</li>
        <li>policy tightened</li>
        <li>time window expired</li>
      </ul>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        Rule
      </h3>

      <p>
        All nodes depending exclusively on the invalidated path are removed.
      </p>

      <pre className="overflow-x-auto text-xs leading-6">
{`ΔR_loss`}
      </pre>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        Flow
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`Invalidated edge
    ↓
Find dependent paths
    ↓
Temporarily remove descendants
    ↓
Check alternative valid paths
    ↓
Restore if reachable`}
      </pre>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        7. Alternative Path Recovery
      </h2>

      <p>
        Removing one path does <strong>not necessarily</strong> make a node
        unreachable.
      </p>

      <pre className="overflow-x-auto text-xs leading-6">
{`A → B → D
A → C → D`}
      </pre>

      <p>If:</p>

      <pre className="overflow-x-auto text-xs leading-6">
{`B → D`}
      </pre>

      <p>is invalidated,</p>

      <p>
        <code>D</code> may still remain reachable via:
      </p>

      <pre className="overflow-x-auto text-xs leading-6">
{`C → D`}
      </pre>

      <blockquote className="border-l-2 pl-4 italic">
        <strong>
          path invalidation must be graph-aware, not tree-based
        </strong>
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        8. Dependency Tracking Graph
      </h2>

      <p>
        To support efficient incremental updates, IRE maintains a dependency
        structure.
      </p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        Reverse Dependency Index
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`edge_id → dependent reachable nodes`}
      </pre>

      <p>This enables fast invalidation lookup.</p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        Formal Definition
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`Dep(e) = {
  v ∈ R |
  every valid path to v uses e
}`}
      </pre>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        9. Dirty Flag Propagation
      </h2>

      <p>For runtime state changes:</p>

      <pre className="overflow-x-auto text-xs leading-6">{`ΔS`}</pre>

      <p>affected policies are marked dirty.</p>

      <pre className="overflow-x-auto text-xs leading-6">
{`dirty(edge)
dirty(node)`}
      </pre>

      <p>Only dirty regions are re-evaluated.</p>

      <p>This dramatically reduces recomputation cost.</p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        10. Computational Complexity
      </h2>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        Full Recompute (GTCA)
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`O(V + E)`}
      </pre>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        Incremental Update (IRE)
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`O(ΔV + ΔE)`}
      </pre>

      <p>
        Where <code>ΔV</code> = affected nodes and <code>ΔE</code> =
        affected edges.
      </p>

      <p>This is the major performance advantage.</p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        11. Integration with TraceOS
      </h2>

      <pre className="overflow-x-auto text-xs leading-6">
{`IntentReceived
ApprovalGranted
PolicyChanged
IncidentEscalated`}
      </pre>

      <p>Each event becomes a delta trigger.</p>

      <pre className="overflow-x-auto text-xs leading-6">
{`TraceOS Event → Δ → Reachability Sync`}
      </pre>

      <p>This enables reactive execution boundaries.</p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        12. AI Cognitive Boundary
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        <strong>the AI’s visible world changes in real time</strong>
      </blockquote>

      <pre className="overflow-x-auto text-xs leading-6">
{`reachable_subgraph(t)`}
      </pre>

      <p>
        This means the cognitive boundary of the agent is continuously
        synchronized with system reality.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        13. Safety Interlock
      </h2>

      <p>Critical operations can be disabled instantly.</p>

      <pre className="overflow-x-auto text-xs leading-6">
{`EmergencyStop → remove action path`}
      </pre>

      <p>
        The AI becomes structurally unable to execute the action.
      </p>

      <p>
        This is much stronger than prompt-based safeguards.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        14. Design Principle
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        GTCA defines:
        <br />
        <strong>what is reachable</strong>
        <br />
        <br />
        IRE defines:
        <br />
        <strong>
          how reachability stays synchronized with change
        </strong>
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        15. Closing Principle
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        <strong>
          The world changes.
          <br />
          Reachability must change with it.
        </strong>
      </blockquote>

      <p>
        The Incremental Reachability Engine transforms GTCA from a static
        evaluation algorithm into a{" "}
        <strong>real-time causal control system</strong>.
      </p>
    </ConceptPageTemplate>
  );
}
