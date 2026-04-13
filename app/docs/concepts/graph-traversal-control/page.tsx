import { ConceptPageTemplate } from "../../_components/ConceptPageTemplate";

export default function Page() {
  return (
    <ConceptPageTemplate
      category="Core Concept"
      title="Graph Traversal Control"
      subtitle="A Structural Approach to Access, Context, and Decision Boundaries"
      sectionTitle="Overview"
    >
      <p>
        Graph Traversal Control is a core mechanism within the Causal
        Reachability Model (CRM).
      </p>

      <p>
        It defines <strong>what is reachable in a system</strong> not by static
        permissions, but by <strong>controlled traversal over a structured graph</strong>.
      </p>

      <p>Instead of granting access directly:</p>

      <blockquote className="border-l-2 pl-4 italic">
        Systems define how traversal is allowed.
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        Core Principle
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        <strong>Access is not granted. Traversal is constrained.</strong>
      </blockquote>

      <p>
        A node is accessible only if it can be reached through a{" "}
        <strong>valid, policy-constrained path</strong>.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        Formal Model
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Reachable(node) =
  Traverse(
    start = case,
    edges = allowed(role, context),
    depth ≤ limit,
    ranked by weight,
    constraints = policy
  )`}
        </pre>
      </div>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        Key Dimensions
      </h2>

      <p>
        Graph traversal is governed by multiple orthogonal dimensions:
      </p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        1. Role
      </h3>

      <p>Defines which types of edges are traversable.</p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`role = Support

allowed_edges = {
  causes,
  affects,
  logs
}`}
        </pre>
      </div>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        2. Context
      </h3>

      <p>
        Modifies traversal behavior dynamically based on system state.
      </p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`context = incident_mode

→ logs enabled
→ extended traversal allowed`}
        </pre>
      </div>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        3. Case (Starting Point)
      </h3>

      <p>Defines the origin of traversal.</p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`case = Incident-42

→ traversal begins here`}
        </pre>
      </div>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        4. Depth
      </h3>

      <p>Limits traversal expansion to prevent explosion.</p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`max_depth = 2`}
        </pre>
      </div>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        5. Weight (Ranking)
      </h3>

      <p>Controls traversal priority and result ordering.</p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`weight = relevance | importance | trust`}
        </pre>
      </div>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        6. Policy Constraints
      </h3>

      <p>
        Defines additional rules that must be satisfied along traversal paths.
      </p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`constraints:
  - requires approval
  - time-limited access
  - trust threshold`}
        </pre>
      </div>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        Traversal Process
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Start Node (Case)
    ↓
Apply Role + Context → determine allowed edges
    ↓
Traverse graph (bounded by depth)
    ↓
Filter by constraints
    ↓
Rank nodes by weight
    ↓
Return reachable subgraph`}
        </pre>
      </div>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        Key Properties
      </h2>

      <ul className="list-disc pl-5 space-y-2">
        <li>No valid path → no access</li>
        <li>Eliminates reliance on post-filtering</li>
        <li>Access adapts to real-time conditions</li>
        <li>Reachability is auditable and verifiable</li>
        <li>Fine-grained edge-level control</li>
      </ul>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        Comparison with Traditional Models
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`RBAC / ACL
User → Permission → Resource

RAG Systems
Query → Retrieve → Filter

Graph Traversal Control (CRM)
Case → Constrained Traversal → Reachable Subgraph`}
        </pre>
      </div>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        Example
      </h2>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        Incident Investigation
      </h3>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Incident A
 → caused_by → Deployment B
 → affects → Service C
 → logs → Log D`}
        </pre>
      </div>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        Without Traversal Control
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`Access Incident A only
→ Missing context`}
      </pre>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        With Traversal Control
      </h3>

      <pre className="overflow-x-auto text-xs leading-6">
{`Start: Incident A

Allowed:
  causes, affects, logs
Depth: 2

→ B, C, D become reachable`}
      </pre>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        Conceptual Shift
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        Traditional systems ask:
        <br />
        “Is this allowed?”
        <br />
        <br />
        Graph Traversal Control asks:
        <br />
        <strong>“Is this reachable?”</strong>
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        Implications
      </h2>

      <ul className="list-disc pl-5 space-y-2">
        <li>AI-safe execution environments</li>
        <li>Context-aware knowledge systems</li>
        <li>Secure autonomous agents</li>
        <li>Deterministic audit trails</li>
        <li>Fine-grained compliance enforcement</li>
      </ul>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        Conclusion
      </h2>

      <p>
        Graph Traversal Control transforms access control into a{" "}
        <strong>deterministic, structural process</strong>.
      </p>

      <blockquote className="border-l-2 pl-4 italic">
        <strong>Control the graph, and you control the system.</strong>
      </blockquote>
    </ConceptPageTemplate>
  );
}
