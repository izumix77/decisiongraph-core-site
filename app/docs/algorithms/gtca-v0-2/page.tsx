import { ConceptPageTemplate } from "../../_components/ConceptPageTemplate";

export default function Page() {
  return (
    <ConceptPageTemplate
      category="Algorithm Spec"
      title="Graph Traversal Control Algorithm (GTCA)"
      subtitle="Core Algorithm · Draft v0.2 · Published 2026-04"
      sectionTitle="1. Overview"
    >
      <p>
        The <strong>Graph Traversal Control Algorithm (GTCA)</strong> is the
        execution kernel of the <strong>Causal Reachability Model (CRM)</strong>.
      </p>

      <p>
        It determines what nodes, actions, or states are accessible by
        computing a <strong>constrained traversal over a causal graph</strong>.
      </p>

      <blockquote className="border-l-2 pl-4 italic">
        <strong>Access is not granted. Traversal is constrained.</strong>
      </blockquote>

      <p>
        This transforms authorization from a predicate evaluation problem into a{" "}
        <strong>state-space reachability problem</strong>.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        2. Core Principle
      </h2>

      <p>
        A node is reachable <strong>if and only if</strong> there exists a
        valid path from a starting state under all constraints.
      </p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`reachable(v) ⇔ ∃ path(start → v) satisfying all constraints`}
        </pre>
      </div>

      <p>If no such path exists:</p>

      <blockquote className="border-l-2 pl-4 italic">
        <strong>
          The state is unreachable and therefore impossible to execute.
        </strong>
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        3. Graph Model
      </h2>

      <p>Let:</p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">{`G = (V, E)`}</pre>
      </div>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          <code>V</code>: set of nodes (states, decisions, resources, actions)
        </li>
        <li>
          <code>E</code>: set of directed edges
        </li>
      </ul>

      <p>Each edge:</p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`e = (u, v, type, metadata)`}
        </pre>
      </div>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        4. Reachability Function
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`ReachableSet(
  G,
  start,
  actor,
  role,
  context,
  policy,
  max_depth
) → R ⊆ V`}
        </pre>
      </div>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        5. Constraint Layers
      </h2>

      <p>Traversal is governed by multiple constraint layers.</p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        5.1 Role Constraints
      </h3>

      <p>Defines allowed edge types:</p>

      <pre className="overflow-x-auto text-xs leading-6">
{`allowed_types(role)`}
      </pre>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        5.2 Context Constraints
      </h3>

      <p>Dynamic execution conditions:</p>

      <pre className="overflow-x-auto text-xs leading-6">
{`context ∈ {normal, incident, audit, emergency}`}
      </pre>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        5.3 Edge Policy (Local Constraint)
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`EdgePolicy(edge, node, actor, context, path) → bool`}
      </pre>

      <ul className="list-disc pl-5 space-y-2">
        <li>time validity</li>
        <li>ownership</li>
        <li>approval flags</li>
        <li>node state</li>
      </ul>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        5.4 Path Policy (Global Constraint)
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`PathPolicy(path, actor, context) → bool`}
      </pre>

      <ul className="list-disc pl-5 space-y-2">
        <li>approval chain completeness</li>
        <li>separation of duty</li>
        <li>multi-step constraints</li>
        <li>cumulative trust thresholds</li>
      </ul>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        5.5 Depth Constraint
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`depth ≤ max_depth`}
      </pre>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        5.6 Weight / Ranking
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`score(v) = f(relevance, trust, priority)`}
      </pre>

      <p>Used for ordering traversal or output.</p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        6. Traversal State
      </h2>

      <p>Traversal must be stateful.</p>

      <pre className="overflow-x-auto text-xs leading-6">
{`TraversalState = {
  node,
  depth,
  path,
  context_snapshot
}`}
      </pre>

      <p>Visited tracking must include state:</p>

      <pre className="overflow-x-auto text-xs leading-6">
{`visited_key = (node, path_signature, context_snapshot, depth)`}
      </pre>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        7. Core Algorithm (v0.2)
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`reachable = {}
visited = {}

initial_path = Path.empty()
initial_state = (start, 0, initial_path)

queue = priority_queue()
push(queue, initial_state)

while queue not empty:

    node, depth, path = pop(queue)

    state_key = (node, path.signature(), context, depth)

    if state_key in visited:
        continue

    visited.add(state_key)

    if not PathPolicy(path, actor, context):
        continue

    reachable.add(node)

    if depth >= max_depth:
        continue

    for edge in outgoing(node):

        if edge.type not in allowed_types(role):
            continue

        if not EdgePolicy(edge, node, actor, context, path):
            continue

        next_node = edge.target
        next_path = path.extend(edge)

        next_state = (next_node, depth + 1, next_path)

        push(queue, next_state)`}
        </pre>
      </div>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        8. Traversal Flow
      </h2>

      <pre className="overflow-x-auto text-xs leading-6">
{`Start (Case / Situation)
    ↓
Initialize traversal state
    ↓
Apply Role constraints
    ↓
Apply EdgePolicy (local validation)
    ↓
Extend path
    ↓
Apply PathPolicy (global validation)
    ↓
Check depth bound
    ↓
Expand traversal
    ↓
Rank reachable nodes
    ↓
Return reachable subgraph`}
      </pre>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        9. Key Properties
      </h2>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        9.1 Structural Security
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`No valid path → No access`}
      </pre>

      <p>Security is enforced structurally, not procedurally.</p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        9.2 Determinism
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`Same graph + same inputs → identical reachable set`}
      </pre>

      <ul className="list-disc pl-5 space-y-2">
        <li>replay</li>
        <li>audit</li>
        <li>CI validation</li>
        <li>reproducibility</li>
      </ul>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        9.3 Monotonicity
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`Stronger constraints ⇒ smaller reachable set`}
      </pre>

      <p>This ensures predictable security behavior.</p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        9.4 Context Sensitivity
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`Reachability = f(context)`}
      </pre>

      <p>Access dynamically adapts to system state.</p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        9.5 Composability
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`EdgePolicy ∧ PathPolicy ∧ RoleConstraint ∧ ContextConstraint`}
      </pre>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        10. Comparison
      </h2>

      <pre className="overflow-x-auto text-xs leading-6">
{`ACL / RBAC
subject → permission → resource

RAG
query → retrieve → filter

GTCA (CRM)
case → constrained traversal → reachable subgraph`}
      </pre>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        11. AI Integration
      </h2>

      <pre className="overflow-x-auto text-xs leading-6">
{`reachable_subgraph = prompt_context`}
      </pre>

      <p>AI operates only within reachable space.</p>

      <blockquote className="border-l-2 pl-4 italic">
        <strong>
          Reachability defines the cognitive boundary of the agent.
        </strong>
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        12. Design Principle
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        Traditional systems ask:
        <br />
        “Is this allowed?”
        <br />
        <br />
        GTCA asks:
        <br />
        <strong>“Is this reachable?”</strong>
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        13. Implementation Notes
      </h2>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        13.1 Deterministic Ordering
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`priority = score(node)`}
      </pre>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        13.2 Incremental Computation
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`ΔG → ΔReachableSet`}
      </pre>

      <p>Supports real-time systems.</p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        13.3 Caching
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`cache_key = (start, role, context, policy_hash)`}
      </pre>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        14. Closing Principle
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        <strong>
          Control the reachable state space, and you control the system.
        </strong>
      </blockquote>

      <p>
        The GTCA is not merely an access control algorithm.
      </p>

      <p>
        It is a <strong>state-space constraint engine</strong> that defines what
        is possible within a system.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        15. Summary
      </h2>

      <pre className="overflow-x-auto text-xs leading-6">
{`Permission → predicate
Reachability → structure

Query → evaluation
Traversal → construction

Security → enforcement
CRM → state-space design`}
      </pre>
    </ConceptPageTemplate>
  );
}
